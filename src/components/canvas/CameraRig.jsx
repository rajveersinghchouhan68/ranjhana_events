import { useFrame, useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { lerp, easeOutCubic } from '../../context/ScrollContext';

export default function CameraRig({ progress }) {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0, z: 7 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useFrame((state) => {
    const p = progress;
    const t = state.clock.elapsedTime;

    if (p < 0.18) {
      target.current = { x: mouse.current.x * 0.25, y: 0.3 + mouse.current.y * 0.1, z: 7 - p * 2 };
    } else if (p < 0.42) {
      const local = easeOutCubic((p - 0.18) / 0.24);
      target.current = {
        x: lerp(0, 1.5, local),
        y: lerp(0.3, 0.8, local),
        z: lerp(5, 3.5, local),
      };
    } else if (p < 0.68) {
      const local = easeOutCubic((p - 0.42) / 0.26);
      target.current = {
        x: lerp(1.5, -0.5, local),
        y: lerp(0.8, 0.2, local),
        z: lerp(3.5, 4.5, local),
      };
    } else {
      const local = easeOutCubic((p - 0.68) / 0.32);
      target.current = {
        x: lerp(-0.5, 0, local),
        y: lerp(0.2, 1.2, local),
        z: lerp(4.5, 6, local),
      };
    }

    camera.position.x = lerp(camera.position.x, target.current.x + Math.sin(t * 0.2) * 0.03, 0.04);
    camera.position.y = lerp(camera.position.y, target.current.y, 0.04);
    camera.position.z = lerp(camera.position.z, target.current.z, 0.04);
    camera.lookAt(0, p > 0.5 ? 0.3 : 0, 0);
  });

  return null;
}
