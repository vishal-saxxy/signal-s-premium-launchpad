// src/components/LiveDemoSection.tsx
// Drop this file into src/components/ and add <LiveDemoSection /> in Index.tsx
// Place it AFTER WorkflowSection and BEFORE PersonalizationSection
//
// No new dependencies needed — uses framer-motion, recharts (already in project via shadcn chart.tsx)

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

// ─── Data ────────────────────────────────────────────────────────────────────

const TICKER_ITEMS = [
  { company: "Zepto", round: "Series G", amount: "₹3,250 Cr", sector: "Quick Commerce", roles: 47, city: "Mumbai" },
  { company: "Krutrim AI", round: "Series B", amount: "₹890 Cr", sector: "AI/ML", roles: 23, city: "Bengaluru" },
  { company: "Groww", round: "Series F", amount: "₹1,100 Cr", sector: "Fintech", roles: 31, city: "Bengaluru" },
  { company: "Ola Electric", round: "Series D", amount: "₹2,400 Cr", sector: "EV", roles: 58, city: "Bengaluru" },
  { company: "PhysicsWallah", round: "Series C", amount: "₹670 Cr", sector: "Edtech", roles: 19, city: "Noida" },
  { company: "Rapido", round: "Series E", amount: "₹960 Cr", sector: "Mobility", roles: 34, city: "Bengaluru" },
  { company: "HealthKart", round: "Series D", amount: "₹480 Cr", sector: "D2C Health", roles: 12, city: "Gurugram" },
  { company: "Licious", round: "Series F", amount: "₹380 Cr", sector: "D2C Food", roles: 9, city: "Bengaluru" },
  { company: "Spinny", round: "Series E", amount: "₹750 Cr", sector: "Auto", roles: 28, city: "Delhi" },
  { company: "Open Financial", round: "Series C", amount: "₹320 Cr", sector: "Neobank", roles: 15, city: "Bengaluru" },
];

const CHART_DATA = [
  { sector: "Fintech", crore: 4200, color: "#c9a84c" },
  { sector: "SaaS", crore: 3100, color: "#b8903e" },
  { sector: "AI/ML", crore: 2800, color: "#d4b06a" },
  { sector: "D2C", crore: 1900, color: "#a07830" },
  { sector: "EV", crore: 1600, color: "#c9a84c" },
  { sector: "Edtech", crore: 980, color: "#b8903e" },
];

const MOCK_CONTACTS = [
  {
    company: "Krutrim AI",
    round: "Series B · ₹890 Cr",
    name: "Priya Sharma",
    role: "Head of Engineering",
    linkedin: "linkedin.com/in/••••••",
    email: "p.sharma@••••••.ai",
    avatar: "PS",
    match: 94,
    tags: ["AI/ML", "Bengaluru", "Backend"],
  },
  {
    company: "Groww",
    round: "Series F · ₹1,100 Cr",
    name: "Arjun Mehta",
    role: "VP Engineering",
    linkedin: "linkedin.com/in/••••••",
    email: "arjun@••••••.com",
    avatar: "AM",
    match: 88,
    tags: ["Fintech", "Bengaluru", "Full Stack"],
  },
  {
    company: "Zepto",
    round: "Series G · ₹3,250 Cr",
    name: "Sneha Kapoor",
    role: "Engineering Manager",
    linkedin: "linkedin.com/in/••••••",
    email: "sneha.k@••••••.com",
    avatar: "SK",
    match: 81,
    tags: ["Quick Commerce", "Mumbai", "Data Eng"],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const LiveDot = () => (
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
  </span>
);

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card px-4 py-3 text-xs">
        <p className="text-white/90 font-semibold mb-1">{payload[0].payload.sector}</p>
        <p className="text-primary">₹{payload[0].value.toLocaleString("en-IN")} Cr</p>
        <p className="text-white/40 mt-0.5">Last 30 days</p>
      </div>
    );
  }
  return null;
};

// ─── Main Component ───────────────────────────────────────────────────────────

const LiveDemoSection = () => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [unlockedCards, setUnlockedCards] = useState<Set<number>>(new Set());
  const [pulseCount, setPulseCount] = useState(3);

  // Ticker animation — new funding event every 2.8s
  useEffect(() => {
    const id = setInterval(() => {
      setTickerIndex((i) => (i + 1) % TICKER_ITEMS.length);
      setPulseCount((n) => n + 1);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  const handleUnlock = (index: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const current = TICKER_ITEMS[tickerIndex];

  return (
    <section id="live-demo" className="relative z-10 py-16 sm:py-24 lg:py-32 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <LiveDot />
              <span className="text-xs font-semibold text-emerald-400 tracking-widest uppercase">
                Live Intelligence
              </span>
            </div>
            <h2 className="font-display text-[28px] leading-tight sm:text-4xl lg:text-5xl font-bold mb-4">
              This is what Signal{" "}
              <span className="text-gradient-gold">shows you every day</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Real funding events, real hiring signals, real contacts — delivered
              before the job post goes up.
            </p>
          </div>
        </ScrollReveal>


        {/* ── Row 1: Ticker + Chart ─────────────────────────────────── */}
        <div className="grid lg:grid-cols-2 gap-6 mb-6">

          {/* Live Funding Ticker */}
          <ScrollReveal direction="left">
            <GlassCard className="p-6 h-full" hover={false}>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <LiveDot />
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                    Funding Ticker
                  </span>
                </div>
                <span className="text-xs text-white/30">{pulseCount} events today</span>
              </div>

              {/* Animated ticker card */}
              <div className="relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 mb-4 min-h-[110px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tickerIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-display text-lg font-semibold text-white">
                            {current.company}
                          </span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {current.round}
                          </span>
                        </div>
                        <p className="text-2xl font-display font-bold text-gradient-gold mb-2">
                          {current.amount}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-white/50">
                          <span>📍 {current.city}</span>
                          <span>🏷 {current.sector}</span>
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-2xl font-display font-bold text-emerald-400">
                          +{current.roles}
                        </div>
                        <div className="text-xs text-white/40">open roles</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Ticker history pills */}
              <div className="flex flex-wrap gap-2">
                {TICKER_ITEMS.slice(0, 5).map((item, i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: i === tickerIndex % 5 ? 1 : 0.35 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/60"
                  >
                    {item.company}
                  </motion.span>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Funding by Sector Chart */}
          <ScrollReveal direction="right">
            <GlassCard className="p-6 h-full" hover={false}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                  Funding by Sector
                </span>
                <span className="text-xs text-white/30">Last 30 days · India</span>
              </div>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={CHART_DATA} barSize={28} margin={{ left: -20, right: 0 }}>
                    <XAxis
                      dataKey="sector"
                      tick={{ fill: "rgba(255,255,255,0.4)", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `₹${v / 1000}k`}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(255,255,255,0.03)" }} />
                    <Bar dataKey="crore" radius={[4, 4, 0, 0]}>
                      {CHART_DATA.map((entry, index) => (
                        <Cell key={index} fill={entry.color} fillOpacity={0.85} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-white/30 mt-3 text-center">
                Fintech & AI/ML dominate this cycle — strong hiring signal
              </p>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* ── Row 2: Blurred Contact Cards ─────────────────────────── */}
        <ScrollReveal delay={0.1}>
          <GlassCard hover={false} className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                    Today's Matched Contacts
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    3 new
                  </span>
                </div>
                <p className="text-xs text-white/30">
                  Hiring managers at companies that just raised — matched to your profile
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {MOCK_CONTACTS.map((contact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative rounded-xl bg-white/[0.03] border border-white/[0.06] overflow-hidden"
                >
                  {/* Card content */}
                  <div className="p-4">
                    {/* Company + round */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-primary">{contact.company}</span>
                      <span className="text-xs text-white/30">{contact.round.split("·")[0].trim()}</span>
                    </div>

                    {/* Avatar + name */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary shrink-0">
                        {contact.avatar}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white truncate">{contact.name}</p>
                        <p className="text-xs text-white/50 truncate">{contact.role}</p>
                      </div>
                    </div>

                    {/* Blurred contact details */}
                    <div className="space-y-1.5 mb-3 relative">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-white/30 w-4">🔗</span>
                        <span
                          className="text-white/40 blur-[5px] select-none font-mono"
                          aria-hidden="true"
                        >
                          {contact.linkedin}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-white/30 w-4">✉</span>
                        <span
                          className="text-white/40 blur-[5px] select-none font-mono"
                          aria-hidden="true"
                        >
                          {contact.email}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {contact.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] text-white/40 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Match score + unlock button */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-16 h-1 rounded-full bg-white/[0.08] overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-primary to-amber-300"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${contact.match}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                          />
                        </div>
                        <span className="text-xs text-primary font-medium">{contact.match}% match</span>
                      </div>
                      <button
                        onClick={() => handleUnlock(i)}
                        className="text-xs px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors font-medium"
                      >
                        Unlock →
                      </button>
                    </div>
                  </div>

                  {/* Lock icon overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-black/0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/20 transition-all duration-300 pointer-events-none"
                  >
                    <span className="text-2xl">🔒</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA strip */}
            <div className="mt-5 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-sm text-white/50 text-center sm:text-left">
                <span className="text-white/80 font-medium">47 more contacts</span> matched today — unlock with early access
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-white text-black text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white/90 transition-colors shrink-0"
              >
                Get Early Access →
              </button>
            </div>
          </GlassCard>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default LiveDemoSection;
