import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { phaseProgress, easeOutCubic } from '../../../context/ScrollContext';
import Elephant from '../../models/Elephant';
import PalaceDome from '../../models/PalaceDome';

export default function ScenePalace({ progress }) {
  const group = useRef();
  const water = useRef();
  const elephant = useRef();
  const t = phaseProgress(progress, 'venue');
  const visible = progress > 0.28 && progress < 0.64;

  useFrame((state) => {
    if (!group.current) return;
    group.current.visible = visible;
    if (!visible) return;
    const time = state.clock.elapsedTime;

    group.current.position.z = -3 + easeOutCubic(t) * 1.5;

    if (water.current) {
      water.current.material.opacity = 0.5 + Math.sin(time * 2) * 0.05;
    }
  });

  if (!visible) return null;

  return (
    <group ref={group} position={[0, -1, -3]}>
      <PalaceDome position={[0, 2, -4]} />

      <mesh position={[0, 0.5, -2]}>
        <boxGeometry args={[6, 2, 1]} />
        <meshStandardMaterial color="#f5ebe0" />
      </mesh>

      <mesh ref={water} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
        <circleGeometry args={[3, 32]} />
        <meshStandardMaterial color="#f4b8c1" transparent opacity={0.45} metalness={0.3} roughness={0.2} />
      </mesh>

      <group ref={elephant} position={[2, -0.2, 1]}>
        <Elephant side="center" scale={0.7} animated />
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 1]}>
        <planeGeometry args={[4, 8]} />
        <meshStandardMaterial color="#e8b4b8" transparent opacity={0.3} />
      </mesh>

      {[-1.5, 0, 1.5].map((x, i) => (
        <mesh key={i} position={[x, 0.3, 2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.6, 6]} />
          <meshStandardMaterial color="#d4af37" />
        </mesh>
      ))}
    </group>
  );
}
