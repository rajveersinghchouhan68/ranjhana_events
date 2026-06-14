import { useState, useLayoutEffect } from 'react';
import ProcessionElephant from './ProcessionElephant';

const ELEPHANT_H = 200;
const GROUND_Y = 32;
const CORNER_INSET = 12;

/** Chambers 1–4 occupy 0–80% of section scroll; chamber 5 is the final 20%. */
const FIFTH_START = 0.8;
const WALK_MAX_BEFORE_FIFTH = 0.58;

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
 * One slow baraat across chambers 1–4, then hide behind photo on chamber 5 only.
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

  let walk;
  if (progress < FIFTH_START) {
    const t = progress / FIFTH_START;
    walk = Math.pow(t, 1.4) * WALK_MAX_BEFORE_FIFTH;
  } else {
    const t = (progress - FIFTH_START) / (1 - FIFTH_START);
    walk = WALK_MAX_BEFORE_FIFTH + easeInOut(t) * (1 - WALK_MAX_BEFORE_FIFTH);
  }

  const onFifth = progress >= FIFTH_START;
  const hide = onFifth ? clamp01((progress - 0.9) / 0.1) : 0;
  const isWalking = progress > 0.01 && hide < 0.92;
  const behind = hide > 0.1;

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

  const arcLift = onFifth ? Math.sin(clamp01((progress - FIFTH_START) / 0.2) * Math.PI) * 6 : 0;
  const hideLift = hide * 52;
  const lift = arcLift + hideLift;

  const opacity = hide > 0.35
    ? Math.max(0, 1 - (hide - 0.35) * 1.55)
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
