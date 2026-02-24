import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

const signals = [
  {
    icon: "🚀",
    title: "Funding Announced",
    description: "Startup just closed a round. Budget unlocked. Hiring about to begin.",
    timing: "24-48 hours",
  },
  {
    icon: "👥",
    title: "Leadership Hire",
    description: "A VP of Engineering just joined. They'll build their team within weeks.",
    timing: "1-2 weeks",
  },
  {
    icon: "📊",
    title: "Revenue Milestone",
    description: "ARR crossed a threshold. Growth team expansion is imminent.",
    timing: "2-4 weeks",
  },
  {
    icon: "🏢",
    title: "Office Expansion",
    description: "New office or remote-first announcement signals a scaling phase.",
    timing: "1-3 months",
  },
];

const HiringSignalsSection = () => {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Signal Types
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Signals that <span className="text-gradient-gold">predict hiring</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We track the events that reliably lead to new roles opening up — often before they're posted anywhere.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <GlassCard className="p-6 h-full flex flex-col">
                <div className="text-2xl mb-3">{signal.icon}</div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{signal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{signal.description}</p>
                <div className="flex items-center gap-2 text-xs text-primary/80">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
                    <path d="M6 3v3l2 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  Hiring window: {signal.timing}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringSignalsSection;
