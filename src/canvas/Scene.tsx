import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Shoe() {
  const { scene } = useLoader(GLTFLoader, "/models/scene.gltf");
  const meshRef = useRef(); // Removed explicit type as it can cause issues with scene traversal

  useFrame(() => {
    if (meshRef.current) {
     meshRef.current.rotation.y += 0.01;
    }
  });
  return (
    <primitive scale={1} object={scene} position={[0, 0, 0]} ref={meshRef} />
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, -1, 5], fov: 30 }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Shoe />
        <OrbitControls enableZoom={false} />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
