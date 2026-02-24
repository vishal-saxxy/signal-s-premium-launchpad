import { useState } from "react";
import MagneticButton from "./MagneticButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Intelligence", href: "#intelligence" },
    { label: "Pricing", href: "#cta" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border/50">
      <div className="absolute inset-0 bg-background/70 backdrop-blur-xl" />
      <div className="relative max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold text-foreground tracking-tight">
          Signal
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <MagneticButton
            variant="primary"
            className="px-6 py-2.5 text-xs"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Early Access
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden relative bg-background/95 backdrop-blur-xl border-b border-border/50 px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground py-2"
            >
              {link.label}
            </a>
          ))}
          <MagneticButton variant="primary" className="w-full py-3 text-xs mt-2">
            Get Early Access
          </MagneticButton>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
