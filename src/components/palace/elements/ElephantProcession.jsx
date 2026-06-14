import { useRef, useState, useLayoutEffect } from 'react';
import ProcessionElephant from './ProcessionElephant';

const ELEPHANT_H = 200;
const GROUND_Y = 72;

function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function ElephantProcession({ progress = 0 }) {
  const stageRef = useRef(null);
  const [stageW, setStageW] = useState(0);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return undefined;

    const measure = () => setStageW(el.offsetWidth);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Elephants appear only once user starts scrolling the chamber photo
  const started = progress > 0.015;
  const walk = easeInOut(clamp01((progress - 0.02) / 0.75));
  const hide = clamp01((progress - 0.72) / 0.28);
  const isWalking = started && walk < 0.98 && hide < 0.8;
  const behind = hide > 0.15;

  const elephantW = ELEPHANT_H * 1.1;

  if (stageW <= 0) {
    return (
      <div ref={stageRef} className="elephant-procession" aria-hidden="true">
        <div className="elephant-procession__ground-line" />
      </div>
    );
  }

  // Start far off left/right edges; meet at center behind photo
  const leftX = lerp(-elephantW - 40, stageW * 0.5 - elephantW * 0.88, walk);
  const rightX = lerp(stageW + 40, stageW * 0.5 - elephantW * 0.12, walk);

  // Gentle arc: rise slightly mid-walk, then tuck up behind photo at end
  const arcLift = Math.sin(walk * Math.PI) * 10;
  const hideLift = hide * 56;
  const lift = arcLift + hideLift;

  const opacity = !started
    ? 0
    : hide > 0.45
      ? Math.max(0, 1 - (hide - 0.45) * 1.8)
      : 1;

  return (
    <div
      ref={stageRef}
      className={[
        'elephant-procession',
        behind ? 'elephant-procession--behind' : '',
        isWalking ? 'elephant-procession--walking' : '',
        hide > 0.9 ? 'elephant-procession--hidden' : '',
      ].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <div className="elephant-procession__ground-line" />
      <div className="elephant-procession__path" aria-hidden="true" />

      <div
        className="elephant-procession__elephant elephant-procession__elephant--l"
        style={{
          left: `${leftX}px`,
          bottom: `${GROUND_Y + lift}px`,
          height: `${ELEPHANT_H}px`,
          opacity,
        }}
      >
        <ProcessionElephant facing="right" uid="l" />
        {isWalking && <span className="elephant-procession__foot elephant-procession__foot--l" />}
      </div>

      <div
        className="elephant-procession__elephant elephant-procession__elephant--r"
        style={{
          left: `${rightX}px`,
          bottom: `${GROUND_Y + lift}px`,
          height: `${ELEPHANT_H}px`,
          opacity,
        }}
      >
        <ProcessionElephant facing="left" uid="r" />
        {isWalking && <span className="elephant-procession__foot elephant-procession__foot--r" />}
      </div>

      {isWalking && (
        <>
          <span
            className="elephant-procession__dust"
            style={{ left: `${leftX + elephantW * 0.18}px` }}
          />
          <span
            className="elephant-procession__dust elephant-procession__dust--delay"
            style={{ left: `${rightX + elephantW * 0.62}px` }}
          />
          <span
            className="elephant-procession__spark"
            style={{ left: `${leftX + elephantW * 0.3}px` }}
          />
          <span
            className="elephant-procession__spark elephant-procession__spark--delay"
            style={{ left: `${rightX + elephantW * 0.4}px` }}
          />
        </>
      )}
    </div>
  );
}
