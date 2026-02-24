import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useCursor } from "@/hooks/useCursor";

const GlassCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const cursor = useCursor();

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.2;
    // Subtle cursor tilt
    meshRef.current.rotation.z = THREE.MathUtils.lerp(
      meshRef.current.rotation.z,
      cursor.normalizedX * 0.15,
      0.05
    );
  });

  const goldColor = useMemo(() => new THREE.Color("#C5AE79"), []);

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <MeshTransmissionMaterial
          backside
          samples={6}
          thickness={0.5}
          chromaticAberration={0.1}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.1}
          color={goldColor}
          transmission={0.95}
          roughness={0.05}
          ior={1.5}
        />
      </mesh>
      {/* Gold edge wireframe */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1.82, 1.82, 1.82)]} />
        <lineBasicMaterial color="#C5AE79" transparent opacity={0.4} />
      </lineSegments>
    </Float>
  );
};

const HeroCube = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ pointerEvents: "none" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#C5AE79" />
        <pointLight position={[-5, -5, 3]} intensity={0.3} color="#ffffff" />
        <GlassCube />
      </Canvas>
    </div>
  );
};

export default HeroCube;
