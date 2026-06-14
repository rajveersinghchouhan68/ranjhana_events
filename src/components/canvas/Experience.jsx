import { Canvas } from '@react-three/fiber';
import { useScroll } from '../../context/ScrollContext';
import CameraRig from './CameraRig';
import SceneInvitation from './scenes/SceneInvitation';
import SceneCourtyard from './scenes/SceneCourtyard';
import ScenePalace from './scenes/ScenePalace';
import SceneSunset from './scenes/SceneSunset';
import Petals from './effects/Petals';
import GoldenDust from './effects/GoldenDust';
import GodRays from './effects/GodRays';
import PeacockFeathers from './effects/PeacockFeathers';

export default function Experience() {
  const { progress } = useScroll();

  return (
    <Canvas
      camera={{ position: [0, 0.5, 7], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <fog attach="fog" args={['#f5e6dc', 10, 28]} />
      <ambientLight intensity={0.5} color="#fff5f0" />
      <directionalLight position={[4, 6, 5]} intensity={1} color="#ffd4c4" />
      <directionalLight position={[-5, 3, 2]} intensity={0.35} color="#f4b8c1" />
      <pointLight position={[0, 2, 3]} intensity={1} color="#e8c4b0" />

      <CameraRig progress={progress} />

      <SceneInvitation progress={progress} />
      <SceneCourtyard progress={progress} />
      <ScenePalace progress={progress} />
      <SceneSunset progress={progress} />

      <Petals count={140} progress={progress} />
      <GoldenDust count={500} progress={progress} />
      <GodRays progress={progress} />
      <PeacockFeathers count={24} progress={progress} />
    </Canvas>
  );
}
