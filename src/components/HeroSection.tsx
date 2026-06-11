// src/components/HeroSection.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import Spinner from "./Spinner";
import { saveEmail } from "@/lib/emailService";

const BG_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_230229_7c9bc431-46cf-489a-948d-e8144d8eb5d4.mp4";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");

    const result = await saveEmail(email, "hero");

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
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={BG_VIDEO}
      />
      {/* Subtle dim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40 pointer-events-none" />

      {/* Hero content — bottom left */}
      <div className="absolute bottom-0 left-0 z-20 px-6 sm:px-12 pb-12 sm:pb-20 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 mb-6 text-xs text-white/80">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Now in Early Access
          </div>

          <h1 className="font-display text-white text-4xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight mb-4">
            Stop applying.
            <br />
            <span className="text-gradient-gold">Start getting found.</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-7 max-w-md">
            Signal uses hiring intelligence to connect you with startups that are
            actively raising money and building teams — before the job is even posted.
          </p>

          {submitted ? (
            <div className="liquid-glass inline-flex items-center gap-3 px-6 py-4 rounded-full text-white">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 10l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              You're on the list. We'll be in touch soon.
            </div>
          ) : loading ? (
            <Spinner />
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap items-center gap-3 max-w-lg"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="liquid-glass flex-1 min-w-[200px] px-5 py-3 rounded-full text-white placeholder:text-white/50 focus:outline-none text-sm"
              />
              <button
                type="submit"
                className="bg-white text-black text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/90 transition-colors"
              >
                Get Early Access
              </button>
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("how-it-works")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="liquid-glass text-white text-sm sm:text-base font-medium px-6 sm:px-7 py-3 rounded-full hover:bg-white/5 transition-colors"
              >
                Discover How
              </button>
            </form>
          )}
          {error && <p className="mt-3 text-sm text-destructive">{error}</p>}

          <p className="mt-5 text-xs text-white/50">
            Join 2,400+ professionals already on the waitlist
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
