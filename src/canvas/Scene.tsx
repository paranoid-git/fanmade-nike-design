import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useDevice } from '../hooks/useDevice'
import { ScrollControls } from '@react-three/drei'
function Shoe() {
  const { scene } = useLoader(GLTFLoader, '/models/scene.gltf')
  const meshRef = useRef() // Removed explicit type as it can cause issues with scene traversal
  const { isMobile } = useDevice()
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })
  const scale = isMobile ? 0.5 : 1
  return (
    <primitive
      style={{ pointerEvents: 'none', overflow: 'hidden' }}
      scale={scale}
      object={scene}
      position={[0, 0, 0]}
      ref={meshRef}
      onWheel={(e) => {
        e.stopPropagation()
      }}
    />
  )
}

export default function Scene() {
  //useLenisScroll();
  return (
    <>
      <Canvas
        camera={{ position: [0, -1, 5], fov: 30 }}
        style={{ pointerEvents: 'none', overflow: 'hidden' }}
        onWheel={(e) => {
          e.stopPropagation()
        }}
      >
        <ScrollControls styles={{ overflow: 'hidden' }} pages={0}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />

            <Shoe />
            <Environment preset="studio" />
          </Suspense>
        </ScrollControls>
      </Canvas>
    </>
  )
}
