import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function GoldenDust({ count = 400, progress = 0 }) {
  const ref = useRef();

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const velocities = [];
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      velocities.push({
        x: (Math.random() - 0.5) * 0.002,
        y: Math.random() * 0.003 + 0.001,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return { positions, velocities };
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array;
    const t = state.clock.elapsedTime;
    const burst = progress > 0.12 && progress < 0.2 ? 0.02 : 0;

    velocities.forEach((v, i) => {
      const i3 = i * 3;
      pos[i3] += v.x + Math.sin(t + v.phase) * 0.001;
      pos[i3 + 1] += v.y + burst;
      if (pos[i3 + 1] > 6) {
        pos[i3 + 1] = -4;
        pos[i3] = (Math.random() - 0.5) * 12;
      }
    });
    ref.current.geometry.attributes.position.needsUpdate = true;
    ref.current.material.opacity = 0.4 + Math.sin(t * 0.5) * 0.15 + progress * 0.2;
  });

  const texture = useMemo(() => {
    const c = document.createElement('canvas');
    c.width = 32;
    c.height = 32;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    g.addColorStop(0, 'rgba(240,215,140,1)');
    g.addColorStop(1, 'rgba(212,175,55,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 32, 32);
    return new THREE.CanvasTexture(c);
  }, []);

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        map={texture}
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
