import { useState } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import Spinner from "./Spinner";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Now in Early Access
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            Stop applying.
            <br />
            <span className="text-gradient-gold">Start getting found.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Signal uses hiring intelligence to connect you with startups that are
            actively raising money and building teams — before the job is even posted.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="glass-card inline-flex items-center gap-3 px-6 py-4 text-primary"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              You're on the list. We'll be in touch soon.
            </motion.div>
          ) : loading ? (
            <div className="flex justify-center">
              <Spinner />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full sm:flex-1 px-5 py-4 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm transition-all"
              />
              <MagneticButton type="submit" variant="primary" className="w-full sm:w-auto whitespace-nowrap">
                Get Early Access
              </MagneticButton>
            </form>
          )}
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <p className="mt-6 text-xs text-muted-foreground">
            Join 2,400+ professionals already on the waitlist
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
