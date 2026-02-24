import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";

const PersonalizationSection = () => {
  return (
    <section className="relative z-10 py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                Personalization Engine
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
                Every message is <span className="text-gradient-gold">uniquely crafted</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Signal doesn't send templates. It researches each company — their funding,
                product, team dynamics, and hiring patterns — to generate outreach that feels
                genuinely personal and relevant.
              </p>
              <ul className="space-y-3">
                {[
                  "References specific company milestones",
                  "Adapts tone to company culture",
                  "Highlights your most relevant experience",
                  "Includes data-backed insights about their growth",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="text-primary text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <GlassCard className="p-6">
              {/* Mock email preview */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-semibold">S</div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Signal Draft</p>
                    <p className="text-xs text-muted-foreground">Personalized for Acme AI</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-foreground/70 leading-relaxed">
                  <p>Hi Sarah,</p>
                  <p>
                    Congrats on Acme AI's <span className="text-primary font-medium">$12M Series A</span> led by Sequoia — impressive traction
                    for just 18 months. I noticed you're scaling the engineering team from 8 to 20 this quarter.
                  </p>
                  <p>
                    I've spent the last 3 years building ML pipelines at scale, most recently at a
                    Series B startup where I grew the data team from 2 to 12...
                  </p>
                  <p className="text-muted-foreground italic">
                    [Personalized based on 14 data points]
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PersonalizationSection;
