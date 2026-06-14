import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function GhoomarDancers({ position = [0, 0, 0] }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <group ref={group} position={position}>
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const r = 1.2;
        return (
          <group key={i} position={[Math.cos(angle) * r, 0.4, Math.sin(angle) * r]} rotation={[0, -angle + Math.PI / 2, 0]}>
            <mesh position={[0, 0.3, 0]}>
              <cylinderGeometry args={[0.08, 0.12, 0.6, 6]} />
              <meshStandardMaterial color={i % 2 === 0 ? '#c41e3a' : '#d4af37'} />
            </mesh>
            <mesh position={[0, 0.75, 0]}>
              <sphereGeometry args={[0.1, 8, 8]} />
              <meshStandardMaterial color="#5c3d2e" />
            </mesh>
            <mesh position={[0.2, 0.5, 0]} rotation={[0, 0, -0.5]}>
              <planeGeometry args={[0.5, 0.8]} />
              <meshStandardMaterial color="#e8b4b8" transparent opacity={0.7} side={2} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
