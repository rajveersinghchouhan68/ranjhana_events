import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function BirdCage({ position = [0, 0, 0] }) {
  const group = useRef();
  const bird = useRef();

  useFrame((state) => {
    if (!bird.current) return;
    const t = state.clock.elapsedTime;
    bird.current.position.y = Math.sin(t * 3) * 0.03;
    bird.current.rotation.z = Math.sin(t * 4) * 0.2;
    group.current.rotation.y = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <group ref={group} position={position}>
      <mesh>
        <cylinderGeometry args={[0.2, 0.22, 0.5, 12, 1, true]} />
        <meshStandardMaterial color="#d4af37" wireframe transparent opacity={0.6} />
      </mesh>
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.22, 0.22, 0.04, 12]} />
        <meshStandardMaterial color="#8b6914" metalness={0.8} />
      </mesh>
      <group ref={bird} position={[0, 0, 0]}>
        <mesh>
          <sphereGeometry args={[0.04, 6, 6]} />
          <meshStandardMaterial color="#c41e3a" />
        </mesh>
        <mesh position={[0, 0, 0.04]} rotation={[0.5, 0, 0]}>
          <coneGeometry args={[0.03, 0.06, 4]} />
          <meshStandardMaterial color="#c41e3a" />
        </mesh>
      </group>
    </group>
  );
}
