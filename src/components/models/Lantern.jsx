import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Lantern({ position = [0, 0, 0] }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[0.2, 0.3, 0.2]} />
        <meshStandardMaterial color="#d4af37" emissive="#f0d78c" emissiveIntensity={0.4} transparent opacity={0.85} />
      </mesh>
      <pointLight intensity={0.5} color="#ff9a56" distance={2} />
    </group>
  );
}
