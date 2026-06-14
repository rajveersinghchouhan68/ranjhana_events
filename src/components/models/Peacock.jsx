import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Peacock({ position = [0, 0, 0], scale = 1 }) {
  const group = useRef();
  const tail = useRef();
  const head = useRef();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.4) * 0.08;
    if (tail.current) tail.current.rotation.y = Math.sin(t * 0.6) * 0.12;
    if (head.current) head.current.rotation.z = Math.sin(t * 0.8) * 0.05;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.2, 10, 10]} />
        <meshStandardMaterial color="#1a5f5f" roughness={0.6} />
      </mesh>
      <group ref={head} position={[0, 0.05, 0.18]}>
        <mesh>
          <sphereGeometry args={[0.1, 8, 8]} />
          <meshStandardMaterial color="#1a5f5f" />
        </mesh>
        <mesh position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.01, 0.02, 0.15, 4]} />
          <meshStandardMaterial color="#d4af37" metalness={0.8} />
        </mesh>
      </group>
      <group ref={tail} position={[0, 0.1, -0.15]}>
        {Array.from({ length: 9 }).map((_, i) => {
          const angle = ((i - 4) / 8) * 1.2;
          return (
            <mesh key={i} position={[Math.sin(angle) * 0.3, Math.cos(angle) * 0.15, -0.1]} rotation={[angle * 0.3, 0, angle]}>
              <coneGeometry args={[0.12, 0.5, 6]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? '#0d4d4d' : '#1a7a7a'}
                emissive="#d4af37"
                emissiveIntensity={0.1}
              />
            </mesh>
          );
        })}
        <mesh position={[0, 0.2, -0.3]}>
          <circleGeometry args={[0.5, 16]} />
          <meshStandardMaterial color="#0d4d4d" emissive="#f4b8c1" emissiveIntensity={0.15} side={2} />
        </mesh>
      </group>
    </group>
  );
}
