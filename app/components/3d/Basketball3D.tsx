'use client';

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

interface BasketballProps {
  position?: [number, number, number];
  scale?: number;
}

function Basketball({ position = [0, 0, 0], scale = 1 }: BasketballProps) {
  const groupRef = useRef<THREE.Group>(null!);
  const ballRef = useRef<THREE.Mesh>(null!);
  const [isClicked, setIsClicked] = useState(false);
  const clickTimeRef = useRef(0);

  // Gentle auto-rotation + breathing + click interaction
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
    if (ballRef.current) {
      const breathe = 1 + Math.sin(state.clock.elapsedTime * 1.2) * 0.008;
      let targetScale = breathe;

      if (isClicked) {
        const elapsed = state.clock.elapsedTime - clickTimeRef.current;
        if (elapsed < 0.6) {
          // Pulse effect on click
          targetScale = breathe + Math.sin(elapsed * 12) * 0.15;
          const mat = ballRef.current.material as THREE.MeshPhongMaterial;
          mat.emissive = new THREE.Color('#ffaaaa');
          mat.emissiveIntensity = 0.6;
        } else {
          setIsClicked(false);
          const mat = ballRef.current.material as THREE.MeshPhongMaterial;
          mat.emissive = new THREE.Color('#3a1a00');
          mat.emissiveIntensity = 0.08;
        }
      }

      ballRef.current.scale.setScalar(targetScale);
    }
  });

  const handleClick = () => {
    setIsClicked(true);
    clickTimeRef.current = performance.now() / 1000; // Use performance for timing
    // Optional: trigger a small "dribble" visual boost
  };

  const ballRadius = 2.2;

  return (
    <group ref={groupRef} position={position} scale={scale}>
      {/* Main Basketball Sphere - Click to "dribble" / interact */}
      <mesh ref={ballRef} onClick={handleClick} onPointerOver={(e) => { e.object.scale.setScalar(1.05); }} onPointerOut={(e) => { if (!isClicked) e.object.scale.setScalar(1); }}>
        <sphereGeometry args={[ballRadius]} />
        <meshPhongMaterial
          color="#c8102e"
          shininess={90}
          specular="#ffffff"
          emissive="#3a1a00"
          emissiveIntensity={0.08}
        />
      </mesh>

      {/* Classic Basketball Black Seams */}
      {/* Horizontal equator seam */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[ballRadius + 0.015, 0.035, 12, 120]} />
        <meshPhongMaterial color="#111111" shininess={20} />
      </mesh>

      {/* Vertical seam */}
      <mesh rotation={[0, 0, 0]}>
        <torusGeometry args={[ballRadius + 0.015, 0.035, 12, 120]} />
        <meshPhongMaterial color="#111111" shininess={20} />
      </mesh>

      {/* Second vertical seam (perpendicular) */}
      <mesh rotation={[0, Math.PI / 2, 0]}>
        <torusGeometry args={[ballRadius + 0.015, 0.035, 12, 120]} />
        <meshPhongMaterial color="#111111" shininess={20} />
      </mesh>

      {/* Upper latitude seam */}
      <mesh position={[0, 1.1, 0]} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.85, 0.028, 12, 100]} />
        <meshPhongMaterial color="#111111" shininess={20} />
      </mesh>

      {/* Lower latitude seam */}
      <mesh position={[0, -1.1, 0]} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.85, 0.028, 12, 100]} />
        <meshPhongMaterial color="#111111" shininess={20} />
      </mesh>

      {/* Subtle highlight ring for premium feel */}
      <mesh rotation={[0.8, 0.6, 0]}>
        <torusGeometry args={[ballRadius + 0.08, 0.008, 8, 80]} />
        <meshPhongMaterial 
          color="#ff6666" 
          emissive="#c8102e" 
          emissiveIntensity={0.4}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

// Small stylized pine tree for local Southern Pines identity
function PineAccent({ position = [4.5, -1.5, -1] as [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={position} scale={0.7}>
      {/* Trunk */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.12, 0.15, 1.2, 5]} />
        <meshPhongMaterial color="#3f2a1f" />
      </mesh>
      {/* Foliage layers - stacked cones */}
      <mesh position={[0, 0.3, 0]}>
        <coneGeometry args={[1.1, 1.4, 5]} />
        <meshPhongMaterial color="#166534" emissive="#0a3d1f" emissiveIntensity={0.1} />
      </mesh>
      <mesh position={[0, 1.1, 0]}>
        <coneGeometry args={[0.85, 1.1, 5]} />
        <meshPhongMaterial color="#166534" emissive="#0a3d1f" emissiveIntensity={0.1} />
      </mesh>
      <mesh position={[0, 1.7, 0]}>
        <coneGeometry args={[0.55, 0.9, 5]} />
        <meshPhongMaterial color="#166534" emissive="#0a3d1f" emissiveIntensity={0.1} />
      </mesh>
    </group>
  );
}

interface SceneProps {
  interactive?: boolean;
}

function Scene({ interactive = true }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[8, 12, 6]} 
        intensity={1.8} 
        castShadow 
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-8, -4, -6]} intensity={0.7} color="#ff6666" />
      <pointLight position={[0, 10, -8]} intensity={0.4} color="#ffffff" />

      <Basketball position={[0, 0.3, 0]} scale={1} />
      <PineAccent position={[5.2, -0.8, -2]} />

      {/* Subtle energy particles around the ball */}
      <Stars 
        radius={12} 
        depth={8} 
        count={80} 
        factor={1.5} 
        saturation={0} 
        fade 
        speed={0.6} 
      />

      {interactive && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.12}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 1.6}
          enableDamping
          dampingFactor={0.12}
        />
      )}
    </>
  );
}

export default function Basketball3D({ className = "" }: { className?: string }) {
  return (
    <div className={`canvas-container w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 9], fov: 42 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true, 
          preserveDrawingBuffer: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
      
      {/* Subtle interaction hint */}
      <div className="absolute bottom-6 right-6 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white/60 pointer-events-none">
        DRAG TO ROTATE • CLICK TO DRIBBLE
      </div>
    </div>
  );
}
