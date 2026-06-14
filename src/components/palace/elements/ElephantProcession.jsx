import { useRef, useState, useLayoutEffect } from 'react';
import { assetUrl } from '../../../utils/assets';

const ELEPHANT = assetUrl('assets/elephant-decorated.png');
const ELEPHANT_H = 260;
const GROUND_Y = 80;

function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function ElephantProcession({ progress = 0 }) {
  const stageRef = useRef(null);
  const [stageW, setStageW] = useState(0);
  const [elephantW, setElephantW] = useState(280);

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

  const handleImgLoad = (e) => {
    const naturalH = e.currentTarget.naturalHeight || 400;
    const naturalW = e.currentTarget.naturalWidth || 300;
    const scale = ELEPHANT_H / naturalH;
    setElephantW(naturalW * scale);
  };

  // Walk begins as soon as the chamber photo opens (progress = 0)
  const walk = clamp01(progress / 0.82);
  const hide = clamp01((progress - 0.7) / 0.3);
  const isWalking = walk > 0.01 && walk < 0.99 && hide < 0.85;
  const behind = hide > 0.2;

  if (stageW <= 0) {
    return (
      <div ref={stageRef} className="elephant-procession" aria-hidden="true">
        <div className="elephant-procession__ground-line" />
      </div>
    );
  }

  // Left elephant: enters from off-screen left, walks right toward center
  const leftX = lerp(-elephantW - 24, stageW * 0.5 - elephantW * 0.92, walk);
  // Right elephant: enters from off-screen right, walks left toward center
  const rightX = lerp(stageW + 24, stageW * 0.5 - elephantW * 0.08, walk);

  const lift = hide * 48;
  const opacity = hide > 0.5 ? Math.max(0, 1 - (hide - 0.5) * 2) : 1;

  return (
    <div
      ref={stageRef}
      className={[
        'elephant-procession',
        behind ? 'elephant-procession--behind' : '',
        isWalking ? 'elephant-procession--walking' : '',
        hide > 0.85 ? 'elephant-procession--hidden' : '',
      ].filter(Boolean).join(' ')}
      aria-hidden="true"
    >
      <div className="elephant-procession__ground-line" />

      <img
        src={ELEPHANT}
        alt=""
        className="elephant-procession__elephant elephant-procession__elephant--l"
        style={{
          left: `${leftX}px`,
          bottom: `${GROUND_Y + lift}px`,
          height: `${ELEPHANT_H}px`,
          opacity,
        }}
        onLoad={handleImgLoad}
        draggable={false}
      />
      <img
        src={ELEPHANT}
        alt=""
        className="elephant-procession__elephant elephant-procession__elephant--r"
        style={{
          left: `${rightX}px`,
          bottom: `${GROUND_Y + lift}px`,
          height: `${ELEPHANT_H}px`,
          opacity,
        }}
        draggable={false}
      />

      {isWalking && (
        <>
          <span
            className="elephant-procession__dust"
            style={{ left: `${leftX + elephantW * 0.12}px` }}
          />
          <span
            className="elephant-procession__dust elephant-procession__dust--delay"
            style={{ left: `${rightX + elephantW * 0.55}px` }}
          />
        </>
      )}
    </div>
  );
}
