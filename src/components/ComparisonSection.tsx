import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

const ComparisonSection = () => {
  const easyApply = [
    "One-click mass apply",
    "Generic resume sent",
    "Lost in ATS black hole",
    "No personalization",
    "Competing with 500+ applicants",
    "Hope-based strategy",
  ];

  const signalApproach = [
    "Targeted outreach to funded startups",
    "Personalized pitch per company",
    "Direct to hiring manager",
    "Based on real hiring signals",
    "You're one of the first to reach out",
    "Data-driven, high-conviction moves",
  ];

  return (
    <section className="relative z-10 py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Why Signal Wins
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Easy Apply is <span className="text-gradient-gold">broken</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The spray-and-pray approach doesn't work anymore. Here's how Signal flips the script.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal delay={0.1}>
            <GlassCard className="p-8 h-full" hover={false}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <h3 className="font-display text-lg font-semibold text-muted-foreground">Easy Apply</h3>
              </div>
              <ul className="space-y-4">
                {easyApply.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 text-destructive/60">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard className="p-8 h-full border-gradient-gold">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <h3 className="font-display text-lg font-semibold text-foreground">Signal Approach</h3>
              </div>
              <ul className="space-y-4">
                {signalApproach.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 text-primary">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
