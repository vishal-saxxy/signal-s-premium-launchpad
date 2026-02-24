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
        background: `radial-gradient(300px circle at ${lightPos.x}% ${lightPos.y}%, hsl(39 40% 62% / 0.06), hsl(0 0% 100% / 0.06) 60%)`,
      } : undefined}
    >
      {hover && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(200px circle at ${lightPos.x}% ${lightPos.y}%, hsl(39 40% 62% / 0.08), transparent 70%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default GlassCard;
