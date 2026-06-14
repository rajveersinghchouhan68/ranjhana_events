import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function GodRays({ progress = 0 }) {
  const group = useRef();

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((ray, i) => {
      ray.material.opacity = 0.03 + Math.sin(t * 0.4 + i) * 0.02;
      ray.rotation.z = ray.userData.baseAngle + Math.sin(t * 0.2 + i) * 0.02;
    });
  });

  return (
    <group ref={group} position={[0, 4, -4]}>
      {Array.from({ length: 7 }).map((_, i) => {
        const angle = ((i - 3) / 6) * 0.6;
        return (
          <mesh
            key={i}
            position={[Math.sin(angle) * 2, 0, 0]}
            rotation={[0, 0, angle]}
            userData={{ baseAngle: angle }}
          >
            <planeGeometry args={[0.12, 10]} />
            <meshBasicMaterial color="#f0d78c" transparent opacity={0.04} side={2} depthWrite={false} />
          </mesh>
        );
      })}
    </group>
  );
}
