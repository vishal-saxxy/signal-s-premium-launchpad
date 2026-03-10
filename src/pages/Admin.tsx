// src/pages/Admin.tsx
import { useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";
import * as XLSX from "xlsx";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

const Admin = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      fetchEntries();
    } else {
      setError("Incorrect password");
    }
  };

  const fetchEntries = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "waitlist"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate().toLocaleString() || "",
      }));
      setEntries(data);
    } catch (err) {
      setError("Failed to fetch entries. Check Firestore read rules.");
      console.error(err);
    }
    setLoading(false);
  };

  const exportToExcel = () => {
    const rows = entries.map((e) => ({
      Email: e.email,
      Source: e.source,
      "Signed Up At": e.createdAt,
    }));

    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Waitlist");

    // Auto-size columns
    worksheet["!cols"] = [{ wch: 35 }, { wch: 10 }, { wch: 25 }];

    XLSX.writeFile(workbook, `signal-waitlist-${new Date().toISOString().split("T")[0]}.xlsx`);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="glass-card p-8 w-full max-w-sm">
          <h1 className="font-display text-2xl font-bold text-foreground mb-6 text-center">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Waitlist</h1>
            <p className="text-muted-foreground mt-1">{entries.length} total signups</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={fetchEntries}
              className="px-5 py-2.5 rounded-xl border border-border text-foreground text-sm hover:bg-secondary transition-colors"
            >
              Refresh
            </button>
            <button
              onClick={exportToExcel}
              disabled={entries.length === 0}
              className="px-5 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              Export to Excel
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center text-muted-foreground py-20">Loading entries...</div>
        ) : error ? (
          <div className="text-destructive text-center py-20">{error}</div>
        ) : entries.length === 0 ? (
          <div className="text-center text-muted-foreground py-20">No entries yet.</div>
        ) : (
          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</th>
                  <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Source</th>
                  <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Signed Up At</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, i) => (
                  <tr key={entry.id} className="border-b border-border/30 hover:bg-foreground/[0.02] transition-colors">
                    <td className="py-4 px-6 text-foreground">{entry.email}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        entry.source === "hero"
                          ? "bg-primary/15 text-primary"
                          : "bg-secondary text-muted-foreground"
                      }`}>
                        {entry.source}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground">{entry.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;