import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { phaseProgress, easeOutCubic } from '../../../context/ScrollContext';
import Elephant from '../../models/Elephant';
import Peacock from '../../models/Peacock';
import PalaceArch from '../../models/PalaceArch';
import BirdCage from '../../models/BirdCage';

export default function SceneInvitation({ progress }) {
  const group = useRef();
  const leftPanel = useRef();
  const rightPanel = useRef();
  const openT = phaseProgress(progress, 'gate');
  const inviteT = 1 - phaseProgress(progress, 'gate');
  const visible = progress < 0.35;

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.visible = visible;
    if (!visible) return;

    if (leftPanel.current && rightPanel.current) {
      const angle = easeOutCubic(openT) * 1.1;
      leftPanel.current.rotation.y = angle;
      rightPanel.current.rotation.y = -angle;
      leftPanel.current.position.x = -1.1 - easeOutCubic(openT) * 0.4;
      rightPanel.current.position.x = 1.1 + easeOutCubic(openT) * 0.4;
    }

    group.current.position.y = Math.sin(t * 0.4) * 0.06 + openT * 0.8;
    group.current.scale.setScalar(0.85 + inviteT * 0.15 - openT * 0.25);
  });

  if (!visible) return null;

  return (
    <group ref={group} position={[0, 0, 0]}>
      <PalaceArch />

      <group ref={leftPanel} position={[-1.1, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.1, 3.4, 0.05]} />
          <meshStandardMaterial color="#faf7f2" metalness={0.1} roughness={0.5} emissive="#d4af37" emissiveIntensity={0.02} />
        </mesh>
        <Elephant side="left" scale={0.35} position={[-0.3, -1.1, 0.08]} />
      </group>

      <group ref={rightPanel} position={[1.1, 0, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.1, 3.4, 0.05]} />
          <meshStandardMaterial color="#faf7f2" metalness={0.1} roughness={0.5} emissive="#d4af37" emissiveIntensity={0.02} />
        </mesh>
        <Elephant side="right" scale={0.35} position={[0.3, -1.1, 0.08]} />
      </group>

      <Peacock position={[0, 1.5, 0.15]} scale={0.5} />
      <BirdCage position={[-1.6, 1.2, 0.2]} />
      <BirdCage position={[1.6, 1.2, 0.2]} />

      <Text
        position={[0, 0.2, 0.12]}
        fontSize={0.22}
        color="#8b6914"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.08}
      >
        RAANJHANA
      </Text>
      <Text
        position={[0, -0.15, 0.12]}
        fontSize={0.1}
        color="#b76e79"
        anchorX="center"
        anchorY="middle"
        maxWidth={2}
        textAlign="center"
      >
        Luxury Wedding Planners
      </Text>

      {[...Array(12)].map((_, i) => (
        <mesh key={i} position={[(Math.random() - 0.5) * 2, (Math.random() - 0.5) * 3, 0.1]}>
          <sphereGeometry args={[0.012, 4, 4]} />
          <meshBasicMaterial color="#f0d78c" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}
