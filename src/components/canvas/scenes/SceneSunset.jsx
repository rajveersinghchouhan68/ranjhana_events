import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { phaseProgress, easeOutCubic } from '../../../context/ScrollContext';

export default function SceneSunset({ progress }) {
  const group = useRef();
  const t = phaseProgress(progress, 'sunset');
  const visible = progress > 0.72;

  useFrame(() => {
    if (!group.current) return;
    group.current.visible = visible;
    if (!visible) return;
    group.current.position.y = -3 + easeOutCubic(t) * 3;
  });

  if (!visible) return null;

  return (
    <group ref={group} position={[0, -3, -2]}>
      <mesh position={[0, 1, -3]}>
        <boxGeometry args={[10, 4, 0.5]} />
        <meshStandardMaterial color="#4a3060" emissive="#d4af37" emissiveIntensity={0.15} />
      </mesh>

      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.5, 1.8, 0.3, 8]} />
        <meshStandardMaterial color="#d4af37" metalness={0.5} roughness={0.4} />
      </mesh>
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 2.2, 0.8, Math.sin(angle) * 1.2]}>
            <boxGeometry args={[0.08, 1.2, 0.08]} />
            <meshStandardMaterial color="#d4af37" emissive="#f0d78c" emissiveIntensity={0.3} />
          </mesh>
        );
      })}

      <pointLight position={[0, 2, 0]} intensity={2} color="#ff9a56" distance={12} />
      <pointLight position={[-2, 1, 1]} intensity={1} color="#d4af37" distance={8} />
      <pointLight position={[2, 1, 1]} intensity={1} color="#e8b4b8" distance={8} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#8b4513" roughness={0.95} />
      </mesh>
    </group>
  );
}
