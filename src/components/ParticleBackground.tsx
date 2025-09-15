import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particles in a sphere
  const particles = useMemo(() => {
    const temp = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      // Create particles in a sphere around the camera
      temp[i3] = (Math.random() - 0.5) * 20;
      temp[i3 + 1] = (Math.random() - 0.5) * 20;
      temp[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    return temp;
  }, []);

  // Animate particles with slow rotation and floating
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      
      // Add subtle floating motion
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f5ff"
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
};

const GlitchParticles = () => {
  const ref = useRef<THREE.Points>(null);
  
  const glitchParticles = useMemo(() => {
    const temp = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * 25;
      temp[i3 + 1] = (Math.random() - 0.5) * 25;
      temp[i3 + 2] = (Math.random() - 0.5) * 15;
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Glitch effect - sudden position changes
      if (Math.random() > 0.98) {
        ref.current.rotation.x += (Math.random() - 0.5) * 0.1;
        ref.current.rotation.z += (Math.random() - 0.5) * 0.1;
      }
      
      // Slow continuous rotation
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <Points ref={ref} positions={glitchParticles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
};

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="opacity-70"
      >
        <fog attach="fog" args={["#0a0a0a", 10, 50]} />
        <ParticleField />
        <GlitchParticles />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;