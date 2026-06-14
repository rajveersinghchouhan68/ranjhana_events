import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const COLORS = [0xf4c4a0, 0xe8b4b8, 0xf0d78c, 0xffb6c1, 0xffa07a];

export default function Petals({ count = 120, progress = 0 }) {
  const ref = useRef();
  const mouse = useRef({ x: 0, y: 0 });

  const data = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = Math.random() * 10 - 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      velocities.push({
        x: (Math.random() - 0.5) * 0.004,
        y: -(Math.random() * 0.008 + 0.003),
        z: (Math.random() - 0.5) * 0.003,
        rot: Math.random() * Math.PI,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        phase: Math.random() * Math.PI * 2,
      });
    }
    return { positions, velocities };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array;
    const t = state.clock.elapsedTime;

    data.velocities.forEach((v, i) => {
      const i3 = i * 3;
      pos[i3] += v.x + mouse.current.x * 0.003 * Math.sin(t + v.phase);
      pos[i3 + 1] += v.y;
      pos[i3 + 2] += v.z + mouse.current.y * 0.002;
      if (pos[i3 + 1] < -4) {
        pos[i3 + 1] = 8;
        pos[i3] = (Math.random() - 0.5) * 14;
      }
    });
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={data.positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#e8b4b8" transparent opacity={0.7} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}
