import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works", active: true },
  { label: "Features", href: "#features", dropdown: true },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Pricing", href: "#cta" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 sm:px-8 py-5">
      {/* Logo */}
      <a href="#" className="flex items-center gap-2 text-white font-medium text-base">
        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary/40" />
        Signal
      </a>

      {/* Nav pill */}
      <div className="liquid-glass hidden md:flex items-center gap-1 rounded-xl px-2 py-2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`flex items-center gap-0.5 px-3 py-1.5 rounded-md text-sm transition-colors ${
              link.active
                ? "bg-white/15 text-white"
                : "text-white/70 hover:text-white"
            }`}
          >
            {link.label}
            {link.dropdown && <ChevronDown size={14} />}
          </a>
        ))}
      </div>

      {/* CTAs */}
      <div className="hidden md:flex items-center gap-3">
        <button className="liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/5 transition-colors">
          Log in
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full hover:bg-white/90 transition-colors"
        >
          Get Early Access
        </button>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden liquid-glass text-white p-2 rounded-lg"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-[72px] left-4 right-4 z-30 md:hidden liquid-glass rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm ${
                link.active ? "bg-white/15 text-white" : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {link.dropdown && <ChevronDown size={14} />}
            </a>
          ))}
          <div className="flex gap-2 mt-2 pt-3 border-t border-white/10">
            <button className="flex-1 liquid-glass text-white text-sm font-medium px-4 py-2.5 rounded-full">
              Log in
            </button>
            <button
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex-1 bg-white text-black text-sm font-medium px-4 py-2.5 rounded-full"
            >
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
