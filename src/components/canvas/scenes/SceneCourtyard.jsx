import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { phaseProgress, easeOutCubic } from '../../../context/ScrollContext';
import GhoomarDancers from '../../models/GhoomarDancers';
import Lantern from '../../models/Lantern';

export default function SceneCourtyard({ progress }) {
  const group = useRef();
  const t = phaseProgress(progress, 'courtyard');
  const visible = progress > 0.12 && progress < 0.48;

  useFrame((state) => {
    if (!group.current) return;
    group.current.visible = visible;
    if (!visible) return;
    const time = state.clock.elapsedTime;
    group.current.position.y = -2 + easeOutCubic(t) * 2;
    group.current.rotation.y = Math.sin(time * 0.15) * 0.05;
  });

  if (!visible) return null;

  return (
    <group ref={group} position={[0, -2, -1]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#c9956b" roughness={0.9} />
      </mesh>

      <mesh position={[0, 1.5, -3]}>
        <boxGeometry args={[8, 3, 0.3]} />
        <meshStandardMaterial color="#e8dcc8" />
      </mesh>
      {[-3, -1, 1, 3].map((x, i) => (
        <mesh key={i} position={[x, 2.8, -3]}>
          <cylinderGeometry args={[0.3, 0.4, 0.8, 8]} />
          <meshStandardMaterial color="#d4af37" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}

      <GhoomarDancers position={[0, 0, 0]} />

      {[-2.5, 2.5].map((x, i) => (
        <group key={i} position={[x, 0, -1]}>
          <mesh position={[0, 1.2, 0]}>
            <torusGeometry args={[0.8, 0.05, 8, 24, Math.PI]} />
            <meshStandardMaterial color="#d4af37" metalness={0.8} roughness={0.2} />
          </mesh>
        </group>
      ))}

      <Lantern position={[-2, 1.5, 0.5]} />
      <Lantern position={[2, 1.5, 0.5]} />
      <Lantern position={[0, 2, 1]} />
    </group>
  );
}
