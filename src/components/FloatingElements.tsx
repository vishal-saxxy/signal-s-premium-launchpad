import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useCursor } from "@/hooks/useCursor";

const HolographicRing = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.z += delta * 0.15;
    }
  });
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.02, 16, 64]} />
        <meshStandardMaterial color="#C5AE79" transparent opacity={0.25} emissive="#C5AE79" emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
};

const WireframeSphere = ({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
    }
  });
  return (
    <Float speed={0.8} floatIntensity={0.3}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial color="#C5AE79" wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
};

const GlowParticle = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  const speed = useMemo(() => 0.3 + Math.random() * 0.5, []);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshStandardMaterial color="#C5AE79" emissive="#C5AE79" emissiveIntensity={2} transparent opacity={0.6} />
    </mesh>
  );
};

const CursorReactiveGroup = ({ children }: { children: React.ReactNode }) => {
  const groupRef = useRef<THREE.Group>(null);
  const cursor = useCursor();
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, cursor.normalizedX * 0.05, 0.02);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, cursor.normalizedY * 0.03, 0.02);
    }
  });
  return <group ref={groupRef}>{children}</group>;
};

const particles = Array.from({ length: 20 }, (_, i) => [
  (Math.random() - 0.5) * 12,
  (Math.random() - 0.5) * 8,
  (Math.random() - 0.5) * 4 - 2,
] as [number, number, number]);

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ antialias: false, alpha: true }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[0, 0, 5]} intensity={0.4} color="#C5AE79" />
        <CursorReactiveGroup>
          <HolographicRing position={[-4, 2, -3]} scale={0.6} />
          <HolographicRing position={[5, -1, -4]} scale={0.4} />
          <WireframeSphere position={[4, 3, -5]} scale={0.5} />
          <WireframeSphere position={[-3, -2, -4]} scale={0.7} />
          {particles.map((pos, i) => (
            <GlowParticle key={i} position={pos} />
          ))}
        </CursorReactiveGroup>
      </Canvas>
    </div>
  );
};

export default FloatingElements;
