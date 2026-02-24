import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCursor } from "@/hooks/useCursor";

const Background = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const cursor = useCursor();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div ref={ref} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />

      {/* Cursor-reactive gradient shift */}
      <div
        className="absolute inset-0 opacity-30 transition-none"
        style={{
          background: `radial-gradient(800px circle at ${cursor.x}px ${cursor.y}px, hsl(39 40% 62% / 0.06), transparent 60%)`,
        }}
      />

      {/* Gold radial glow - top */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full opacity-25"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,hsl(39_40%_62%/0.35)_0%,transparent_70%)]" />
      </motion.div>

      {/* Floating glass plane 1 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[25%] -left-[5%] w-[500px] h-[500px] rotate-12 opacity-[0.05] animate-float-slow"
        aria-hidden
      >
        <div className="w-full h-full rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm" />
      </motion.div>

      {/* Floating glass plane 2 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[55%] right-[3%] w-[400px] h-[400px] -rotate-6 opacity-[0.04] animate-float"
        aria-hidden
      >
        <div className="w-full h-full rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm" />
      </motion.div>

      {/* Floating glass plane 3 - new */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[75%] left-[15%] w-[300px] h-[300px] rotate-[20deg] opacity-[0.03] animate-float"
        aria-hidden
      >
        <div className="w-full h-full rounded-3xl border border-foreground/10 bg-foreground/5 backdrop-blur-sm" />
      </motion.div>

      {/* Gold volumetric beam 1 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[10%] right-[20%] w-[2px] h-[400px] opacity-[0.06] rotate-[15deg]"
        aria-hidden
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
      </motion.div>

      {/* Gold volumetric beam 2 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute top-[40%] left-[10%] w-[2px] h-[300px] opacity-[0.05] -rotate-[10deg]"
        aria-hidden
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </motion.div>

      {/* Gold glow - middle */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[50%] right-[10%] w-[700px] h-[700px] rounded-full opacity-15"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,hsl(39_40%_62%/0.3)_0%,transparent_70%)]" />
      </motion.div>

      {/* Gradient fog layers */}
      <div className="absolute top-[30%] left-0 right-0 h-[600px] bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute top-[65%] left-0 right-0 h-[400px] bg-gradient-to-b from-transparent via-primary/[0.015] to-transparent" />

      {/* Bottom glow cluster */}
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-[5%] left-[20%] w-[600px] h-[600px] rounded-full opacity-15"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,hsl(39_40%_62%/0.25)_0%,transparent_70%)]" />
      </motion.div>

      {/* Additional ambient glow */}
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[20%] right-[30%] w-[400px] h-[400px] rounded-full opacity-10"
        aria-hidden
      >
        <div className="w-full h-full rounded-full bg-[radial-gradient(circle,hsl(39_50%_70%/0.2)_0%,transparent_70%)]" />
      </motion.div>

      {/* Grain overlay */}
      <div className="grain-overlay" />
    </div>
  );
};

export default Background;
