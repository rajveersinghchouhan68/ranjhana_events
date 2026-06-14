import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Elephant({ side = 'left', scale = 1, position = [0, 0, 0], animated = false }) {
  const group = useRef();
  const trunk = useRef();
  const earL = useRef();
  const earR = useRef();
  const flip = side === 'right' ? -1 : 1;

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    if (animated && trunk.current) {
      trunk.current.rotation.x = Math.sin(t * 0.8) * 0.25 - 0.2;
      if (earL.current) earL.current.rotation.z = -Math.sin(t * 1.2 + 0.5) * 0.08;
      if (earR.current) earR.current.rotation.z = Math.sin(t * 1.2) * 0.08;
    } else if (trunk.current) {
      trunk.current.rotation.x = Math.sin(t * 0.5) * 0.05;
      group.current.rotation.y = Math.sin(t * 0.3) * 0.03 * flip;
    }
  });

  return (
    <group ref={group} position={position} scale={scale} rotation={[0, flip * 0.3, 0]}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.9, 0.7, 0.6]} />
        <meshStandardMaterial color="#8a8a8a" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.95, 0.1]}>
        <sphereGeometry args={[0.45, 12, 12]} />
        <meshStandardMaterial color="#7a7a7a" roughness={0.85} />
      </mesh>
      <group ref={trunk} position={[0, 0.7, 0.45]}>
        <mesh rotation={[0.3, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.14, 0.6, 8]} />
          <meshStandardMaterial color="#6a6a6a" />
        </mesh>
      </group>
      <mesh ref={earL} position={[-0.35, 1, 0]}>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshStandardMaterial color="#6a6a6a" />
      </mesh>
      <mesh ref={earR} position={[0.35, 1, 0]}>
        <sphereGeometry args={[0.25, 8, 8]} />
        <meshStandardMaterial color="#6a6a6a" />
      </mesh>
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.6, 0.15, 8]} />
        <meshStandardMaterial color="#d4af37" metalness={0.4} roughness={0.5} />
      </mesh>
      {[[-0.3, -0.1], [0.3, -0.1], [-0.2, -0.35], [0.2, -0.35]].map(([x, z], i) => (
        <mesh key={i} position={[x, -0.25, z]}>
          <cylinderGeometry args={[0.1, 0.12, 0.5, 6]} />
          <meshStandardMaterial color="#5a5a5a" />
        </mesh>
      ))}
      <mesh position={[0, 0.6, -0.1]}>
        <boxGeometry args={[1, 0.5, 0.7]} />
        <meshStandardMaterial color="#c41e3a" roughness={0.7} />
      </mesh>
    </group>
  );
}
