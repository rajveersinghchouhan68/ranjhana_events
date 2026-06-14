import { assetUrl } from '../../../utils/assets';

const GATE_IMAGE = assetUrl('assets/royal-gate-elephants.png');

/* Scalloped Rajasthani arch — matches palace wall profile */
function ArchClipDefs() {
  return (
    <svg className="heritage-arch-clips" width="0" height="0" aria-hidden="true">
      <defs>
        <clipPath id="heritageArchFull" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.44 C0.04,0.38 0.09,0.41 0.14,0.36 C0.19,0.28 0.24,0.37 0.29,0.30 C0.34,0.22 0.40,0.33 0.44,0.25 C0.47,0.16 0.50,0.09 0.53,0.25 C0.57,0.33 0.63,0.22 0.68,0.30 C0.73,0.37 0.78,0.28 0.83,0.36 C0.88,0.41 0.93,0.38 0.97,0.44 L1,0.44 L1,1 Z" />
        </clipPath>
        <clipPath id="heritageArchLeft" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.44 C0.04,0.38 0.09,0.41 0.14,0.36 C0.19,0.28 0.24,0.37 0.29,0.30 C0.34,0.22 0.40,0.33 0.44,0.25 C0.47,0.16 0.50,0.09 0.50,0.09 L0.50,1 Z" />
        </clipPath>
        <clipPath id="heritageArchRight" clipPathUnits="objectBoundingBox">
          <path d="M0.50,1 L0.50,0.09 C0.53,0.25 0.57,0.33 0.63,0.22 0.68,0.30 C0.73,0.37 0.78,0.28 0.83,0.36 C0.88,0.41 0.93,0.38 0.97,0.44 L1,0.44 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArchDoor({ side, openProgress }) {
  const spread = Math.min(115, openProgress * 120);
  const clipId = side === 'left' ? 'url(#heritageArchLeft)' : 'url(#heritageArchRight)';

  return (
    <div
      className={`heritage-arch-door heritage-arch-door--${side}`}
      style={{
        clipPath: clipId,
        WebkitClipPath: clipId,
        transform:
          side === 'left' ? `translateX(-${spread}%)` : `translateX(${spread}%)`,
      }}
    />
  );
}

function HeritageGateEntrance({ openProgress }) {
  const textOpacity = Math.max(0, 1 - openProgress * 2.8);
  const revealOpacity = Math.min(1, openProgress * 1.4);
  const archClip = 'url(#heritageArchFull)';

  return (
    <div className="heritage-gate heritage-gate--sandstone">
      <ArchClipDefs />
      <div className="heritage-gate__stage">
        <div className="heritage-gate__artboard">
          <img
            src={GATE_IMAGE}
            alt=""
            className="heritage-gate__base"
            aria-hidden="true"
            draggable={false}
          />

          <div
            className="heritage-arch-doors"
            style={{ clipPath: archClip, WebkitClipPath: archClip }}
          >
            <div
              className="heritage-arch-doors__reveal"
              style={{ opacity: revealOpacity }}
              aria-hidden="true"
            />
            <ArchDoor side="left" openProgress={openProgress} />
            <ArchDoor side="right" openProgress={openProgress} />
            <div
              className="heritage-arch-doors__seam"
              style={{ opacity: Math.max(0, 1 - openProgress * 2) }}
              aria-hidden="true"
            />
          </div>

          <svg
            className="heritage-arch-outline"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="heritage-arch-outline__path"
              d="M0,100 L0,44 C4,38 9,41 14,36 C19,28 24,37 29,30 C34,22 40,33 44,25 C47,16 50,9 53,25 C57,33 63,22 68,30 C73,37 78,28 83,36 C88,41 93,38 97,44 L100,44 L100,100 Z"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div
            className="heritage-gate__overlay"
            style={{
              opacity: textOpacity,
              clipPath: archClip,
              WebkitClipPath: archClip,
            }}
          >
            <div className="heritage-gate__center">
              <p className="heritage-gate__pre">Beginning of Forever</p>
              <h1 className="heritage-gate__title">
                RAANJHANA
                <br />
                EVENTS
              </h1>
              <p className="heritage-gate__tagline">Luxury Wedding Planners</p>
              <div className="heritage-gate__divider" />
              <p className="heritage-gate__hint">Scroll to open the royal gate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeritageLoader() {
  const archClip = 'url(#heritageArchFull)';

  return (
    <div className="heritage-loader heritage-loader--sandstone">
      <ArchClipDefs />
      <div className="heritage-loader__stage">
        <div className="heritage-loader__artboard">
          <img
            src={GATE_IMAGE}
            alt=""
            className="heritage-loader__bg"
            aria-hidden="true"
            draggable={false}
          />
          <div
            className="heritage-loader__center"
            style={{ clipPath: archClip, WebkitClipPath: archClip }}
          >
            <h2>
              RAANJHANA
              <br />
              EVENTS
            </h2>
            <p>Opening your royal invitation…</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeritageGateEntrance, HeritageLoader };
export default HeritageLoader;
