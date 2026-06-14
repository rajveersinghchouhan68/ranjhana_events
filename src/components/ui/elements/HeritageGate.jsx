import { assetUrl } from '../../../utils/assets';

const GATE_IMAGE = assetUrl('assets/royal-gate-elephants.png');

function ArchDoor({ side, openProgress }) {
  const isLeft = side === 'left';
  const angle = Math.min(82, openProgress * 88);

  return (
    <div
      className={`heritage-arch-door heritage-arch-door--${side}`}
      style={{
        transform: isLeft
          ? `perspective(1400px) rotateY(${angle}deg)`
          : `perspective(1400px) rotateY(${-angle}deg)`,
      }}
    />
  );
}

function HeritageGateEntrance({ openProgress }) {
  const textOpacity = Math.max(0, 1 - openProgress * 2.2);

  if (openProgress >= 0.98) return null;

  return (
    <div className="heritage-gate heritage-gate--sandstone">
      <div className="heritage-gate__stage">
        <div className="heritage-gate__artboard">
          <img
            src={GATE_IMAGE}
            alt=""
            className="heritage-gate__base"
            aria-hidden="true"
            draggable={false}
          />

          <div className="heritage-arch-doors">
            <ArchDoor side="left" openProgress={openProgress} />
            <ArchDoor side="right" openProgress={openProgress} />
            <div
              className="heritage-arch-doors__seam"
              style={{ opacity: Math.max(0, 1 - openProgress * 1.5) }}
              aria-hidden="true"
            />
          </div>

          <div className="heritage-gate__overlay" style={{ opacity: textOpacity }}>
            <div className="heritage-gate__center">
              <span className="heritage-gate__om">ॐ</span>
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
  return (
    <div className="heritage-loader heritage-loader--sandstone">
      <div className="heritage-loader__stage">
        <div className="heritage-loader__artboard">
          <img
            src={GATE_IMAGE}
            alt=""
            className="heritage-loader__bg"
            aria-hidden="true"
            draggable={false}
          />
          <div className="heritage-loader__center">
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
