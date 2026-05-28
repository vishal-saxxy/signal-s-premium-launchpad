import { ReactNode, useRef, useState } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", hover = true }: GlassCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !hover) return;
    const rect = ref.current.getBoundingClientRect();
    setLightPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`${hover ? "glass-card-hover" : "glass-card"} ${className}`}
      style={hover ? {
        background: `radial-gradient(400px circle at ${lightPos.x}% ${lightPos.y}%, rgba(255,255,255,0.04), rgba(255,255,255,0.01) 60%)`,
      } : undefined}
    >
      {children}
    </div>
  );
};

export default GlassCard;
