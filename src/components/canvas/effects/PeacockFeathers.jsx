import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';

export default function PeacockFeathers({ count = 20, progress = 0 }) {
  const group = useRef();

  const feathers = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      position: [(Math.random() - 0.5) * 10, Math.random() * 6 - 1, (Math.random() - 0.5) * 4 - 2],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
      scale: 0.15 + Math.random() * 0.2,
      phase: Math.random() * Math.PI * 2,
    })),
  [count]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const f = feathers[i];
      child.rotation.z = f.rotation[2] + Math.sin(t * 0.5 + f.phase) * 0.15;
      child.position.y = f.position[1] + Math.sin(t * 0.3 + f.phase) * 0.1;
    });
    group.current.visible = progress < 0.7;
  });

  return (
    <group ref={group}>
      {feathers.map((f, i) => (
        <mesh key={i} position={f.position} rotation={f.rotation} scale={f.scale}>
          <coneGeometry args={[0.15, 0.6, 4]} />
          <meshStandardMaterial color="#0d4d4d" emissive="#f4b8c1" emissiveIntensity={0.1} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}
