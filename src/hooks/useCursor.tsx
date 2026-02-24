import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

interface CursorPosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

const CursorContext = createContext<CursorPosition>({
  x: 0, y: 0, normalizedX: 0, normalizedY: 0,
});

export const CursorProvider = ({ children }: { children: ReactNode }) => {
  const [pos, setPos] = useState<CursorPosition>({ x: 0, y: 0, normalizedX: 0, normalizedY: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
      normalizedX: (e.clientX / window.innerWidth) * 2 - 1,
      normalizedY: -(e.clientY / window.innerHeight) * 2 + 1,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return <CursorContext.Provider value={pos}>{children}</CursorContext.Provider>;
};

export const useCursor = () => useContext(CursorContext);
