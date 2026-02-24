import ScrollReveal from "./ScrollReveal";

const problems = [
  {
    title: "Black Hole Applications",
    description: "Your resume disappears into an ATS with 500+ others. No human ever reads it.",
  },
  {
    title: "Outdated Listings",
    description: "50% of job posts are already filled or stale. You're chasing ghosts.",
  },
  {
    title: "Zero Context",
    description: "Job boards show titles and bullet points — no insight into actual team needs or hiring urgency.",
  },
  {
    title: "One-Size-Fits-All",
    description: "The same generic application for every role. No personalization, no differentiation.",
  },
];

const JobBoardCritiqueSection = () => {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              The Problem
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Job boards are <span className="text-gradient-gold">a dead end</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Traditional job boards were built for employers, not for you. Here's what's broken.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-destructive/30 to-transparent" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobBoardCritiqueSection;
