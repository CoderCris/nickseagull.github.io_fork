import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props: any) {
  const meshRef = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    setColor(localStorage["starlight-theme"] === "dark" ? "white" : "black")
    meshRef.current.rotation.x += (delta * props.rotationMult[0])
    meshRef.current.rotation.y += (delta * props.rotationMult[1])
    meshRef.current.rotation.z += (delta * props.rotationMult[2])
  })
  const [color, setColor] = useState("black")
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={3}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}
const Logo = () => {
  return (
    <a href="/">
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box rotation={[0, 4, 0]} rotationMult={[1, 1, 0]} />
      <Box rotation={[0, 4, 0]} rotationMult={[0, 1, 1]} />
      <Box rotation={[0, 4, 0]} rotationMult={[1, 0, 1]} />
    </Canvas>
    </a>
  )
}

export default Logo;


