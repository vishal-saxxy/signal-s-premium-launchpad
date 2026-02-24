import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Background = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* Gold radial glow - top */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,hsl(39_40%_62%/0.3)_0%,transparent_70%)]" />
      </motion.div>

      {/* Floating glass plane 1 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[30%] -left-[5%] w-[400px] h-[400px] rotate-12 opacity-[0.04] animate-float-slow"
        aria-hidden
      >
        <div className="w-full h-full rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm" />
      </motion.div>

      {/* Floating glass plane 2 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[60%] right-[5%] w-[300px] h-[300px] -rotate-6 opacity-[0.03] animate-float"
        aria-hidden
      >
        <div className="w-full h-full rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm" />
      </motion.div>

      {/* Gold glow - middle */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[50%] right-[10%] w-[600px] h-[600px] rounded-full opacity-10"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,hsl(39_40%_62%/0.25)_0%,transparent_70%)]" />
      </motion.div>

      {/* Subtle fog gradient */}
      <div className="absolute top-[40%] left-0 right-0 h-[500px] bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      {/* Bottom glow */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[10%] left-[20%] w-[500px] h-[500px] rounded-full opacity-10"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,hsl(39_40%_62%/0.2)_0%,transparent_70%)]" />
      </motion.div>

      {/* Grain overlay */}
      <div className="grain-overlay" />
    </div>
  );
};

export default Background;
