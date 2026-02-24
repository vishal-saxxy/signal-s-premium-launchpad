import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Signal Detects",
    description: "Our engine monitors funding rounds, hiring spikes, and team changes across thousands of startups in real-time.",
  },
  {
    step: "02",
    title: "Match & Rank",
    description: "We match you with companies based on your skills, interests, and career goals — ranked by hiring probability.",
  },
  {
    step: "03",
    title: "Personalize Outreach",
    description: "Signal generates a personalized pitch for each opportunity, referencing company-specific context and signals.",
  },
  {
    step: "04",
    title: "Direct Connect",
    description: "Reach the hiring manager directly with a warm, data-backed intro — not a cold application into an ATS void.",
  },
];

const WorkflowSection = () => {
  return (
    <section id="features" className="relative z-10 py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Workflow
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How <span className="text-gradient-gold">Signal</span> Works
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From detection to connection in four steps. No noise, no guesswork.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-12">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.12} direction={i % 2 === 0 ? "left" : "right"}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`glass-card p-8 relative ${i % 2 === 1 ? "md:mt-16" : ""}`}
                >
                  <span className="font-display text-4xl font-bold text-primary/20">{step.step}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
