import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

const signals = [
  {
    icon: "💰",
    title: "New Funding Round",
    description: "We detect when a startup closes a seed, Series A, or growth round — a clear signal they're about to hire aggressively.",
  },
  {
    icon: "📈",
    title: "Team Growth Patterns",
    description: "We track headcount velocity. When a 20-person startup grows 40% in 3 months, they need more people — fast.",
  },
  {
    icon: "🔍",
    title: "Job Posting Velocity",
    description: "A sudden spike in open roles means budget was just unlocked. We surface these moments before competitors notice.",
  },
];

const FundingSignalSection = () => {
  return (
    <section id="how-it-works" className="relative z-10 py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Hiring Intelligence
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What is a <span className="text-gradient-gold">Funding Signal</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Funding events are the strongest predictors of hiring activity. Signal turns financial data into career opportunities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {signals.map((signal, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <GlassCard className="p-8 h-full">
                <div className="text-3xl mb-4">{signal.icon}</div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {signal.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {signal.description}
                </p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundingSignalSection;
