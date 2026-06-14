import { assetUrl } from '../../../utils/assets';

const GATE_IMAGE = assetUrl('assets/royal-gate-elephants.png');

const ARCH_CLIP = 'url(#heritageArchFull)';

function ArchClipDefs() {
  return (
    <svg className="heritage-arch-clips" width="0" height="0" aria-hidden="true">
      <defs>
        <clipPath id="heritageArchFull" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.40 Q0.12,0.30 0.25,0.38 Q0.38,0.24 0.50,0.11 Q0.62,0.24 0.75,0.38 Q0.88,0.30 1,0.40 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ArchDoor({ side, openProgress }) {
  const spread = Math.min(110, openProgress * 115);

  return (
    <div
      className={`heritage-arch-door heritage-arch-door--${side}`}
      style={{
        transform:
          side === 'left' ? `translateX(-${spread}%)` : `translateX(${spread}%)`,
      }}
    />
  );
}

function HeritageGateEntrance({ openProgress }) {
  const textOpacity = Math.max(0, 1 - openProgress * 2.8);
  const revealOpacity = Math.min(1, openProgress * 1.4);

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
            className="heritage-arch-frame"
            style={{ clipPath: ARCH_CLIP, WebkitClipPath: ARCH_CLIP }}
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

            <div className="heritage-gate__overlay" style={{ opacity: textOpacity }}>
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

          <svg
            className="heritage-arch-outline"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="heritage-arch-outline__path"
              d="M0,100 L0,40 Q12,30 25,38 Q38,24 50,11 Q62,24 75,38 Q88,30 100,40 L100,100 Z"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HeritageLoader() {
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
            style={{ clipPath: ARCH_CLIP, WebkitClipPath: ARCH_CLIP }}
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
