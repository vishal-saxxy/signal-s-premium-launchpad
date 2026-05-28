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

  const baseStyles = "relative font-medium text-sm tracking-tight px-7 py-3 rounded-full transition-colors duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-white text-black hover:bg-white/90 active:scale-[0.97]",
    outline:
      "liquid-glass text-white hover:bg-white/5 active:scale-[0.97]",
    ghost:
      "bg-transparent text-white/70 hover:text-white hover:bg-white/5 active:scale-[0.97]",
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
