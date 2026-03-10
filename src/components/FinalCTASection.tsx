// src/components/FinalCTASection.tsx
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";
import Spinner from "./Spinner";
import { motion } from "framer-motion";
import { saveEmail } from "@/lib/emailService";

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    const result = await saveEmail(email, "cta");

    setLoading(false);

    if (result.duplicate) {
      setError("You're already on the waitlist! We'll be in touch soon.");
    } else if (result.success) {
      setSubmitted(true);
      setEmail("");
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="cta" className="relative z-10 py-24 sm:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to get <span className="text-gradient-gold">discovered</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of professionals who stopped chasing job posts and started getting
            found by companies that actually need them.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
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
            <div>
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
              {error && <p className="mt-3 text-sm text-destructive">{error}</p>}
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal delay={0.25}>
          <p className="mt-6 text-xs text-muted-foreground">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FinalCTASection;