import { ReactNode, useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  disabled?: boolean;
  type?: "button" | "submit";
}

const MagneticButton = ({
  children,
  className = "",
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const baseStyles = "relative font-display font-semibold text-sm tracking-wide px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(39_60%_55%/0.4)] active:scale-[0.97]",
    outline:
      "bg-transparent border border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5 active:scale-[0.97]",
    ghost:
      "bg-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/5 active:scale-[0.97]",
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {variant === "primary" && (
        <span className="absolute inset-0 shimmer-gold pointer-events-none" />
      )}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default MagneticButton;
