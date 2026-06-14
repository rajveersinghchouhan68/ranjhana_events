import { useState, useLayoutEffect } from 'react';
import ProcessionElephant from './ProcessionElephant';

const ELEPHANT_H = 200;
const GROUND_Y = 32;
const CORNER_INSET = 12;

function clamp01(v) {
  return Math.min(1, Math.max(0, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/**
 * One continuous baraat across the whole Chambers section.
 * progress 0  → section opens, elephants at page bottom corners
 * progress 1  → final chamber image, elephants hide behind center photo
 */
export default function ElephantProcession({ progress = 0 }) {
  const [stageW, setStageW] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useLayoutEffect(() => {
    const measure = () => setStageW(window.innerWidth);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Single journey: corners → center over full section; hide only at the end
  const walk = easeInOut(clamp01(progress / 0.9));
  const hide = clamp01((progress - 0.82) / 0.18);
  const isWalking = walk < 0.98 && hide < 0.85;
  const behind = hide > 0.12;

  const elephantH = Math.min(ELEPHANT_H, Math.max(140, stageW * 0.26));
  const elephantW = elephantH * 1.1;

  if (stageW <= 0) {
    return (
      <div className="elephant-procession" aria-hidden="true">
        <div className="elephant-procession__ground-line" />
      </div>
    );
  }

  const leftX = lerp(CORNER_INSET, stageW * 0.5 - elephantW * 0.88, walk);
  const rightX = lerp(stageW - elephantW - CORNER_INSET, stageW * 0.5 - elephantW * 0.12, walk);

  const arcLift = Math.sin(walk * Math.PI) * 8;
  const hideLift = hide * 52;
  const lift = arcLift + hideLift;

  const opacity = hide > 0.4
    ? Math.max(0, 1 - (hide - 0.4) * 1.7)
    : 1;

  return (
    <div
      className={[
        'elephant-procession',
        behind ? 'elephant-procession--behind' : '',
        isWalking ? 'elephant-procession--walking' : '',
        hide > 0.92 ? 'elephant-procession--hidden' : '',
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
          height: `${elephantH}px`,
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
          height: `${elephantH}px`,
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
