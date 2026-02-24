import ScrollReveal from "./ScrollReveal";
import GlassCard from "./GlassCard";
import { motion } from "framer-motion";

const companies = [
  { name: "Acme AI", stage: "Series A", raised: "$12M", hiring: "+8 roles", signal: "Strong" },
  { name: "NeuralPath", stage: "Seed", raised: "$4.5M", hiring: "+3 roles", signal: "Rising" },
  { name: "DataForge", stage: "Series B", raised: "$28M", hiring: "+15 roles", signal: "Very Strong" },
  { name: "CloudNova", stage: "Series A", raised: "$9M", hiring: "+6 roles", signal: "Strong" },
  { name: "QuantumOps", stage: "Seed", raised: "$2.8M", hiring: "+4 roles", signal: "Rising" },
];

const DatabaseSection = () => {
  return (
    <section id="intelligence" className="relative z-10 py-24 sm:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Intelligence Database
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              The startup <span className="text-gradient-gold">intelligence layer</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Real-time data on thousands of funded startups — their growth stage, team velocity, and hiring probability.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <GlassCard className="overflow-hidden" hover={false}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Company</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Stage</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Raised</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Hiring</th>
                    <th className="text-left py-4 px-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Signal</th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((c, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      viewport={{ once: true }}
                      className="border-b border-border/30 hover:bg-foreground/[0.02] transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-foreground">{c.name}</td>
                      <td className="py-4 px-6 text-muted-foreground">{c.stage}</td>
                      <td className="py-4 px-6 text-primary font-medium">{c.raised}</td>
                      <td className="py-4 px-6 text-foreground/80">{c.hiring}</td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                          c.signal === "Very Strong"
                            ? "bg-primary/15 text-primary"
                            : c.signal === "Strong"
                            ? "bg-primary/10 text-primary/80"
                            : "bg-foreground/5 text-muted-foreground"
                        }`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {c.signal}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DatabaseSection;
