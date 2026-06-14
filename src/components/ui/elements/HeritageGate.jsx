import { assetUrl } from '../../../utils/assets';

const GATE_IMAGE = assetUrl('assets/royal-gate-elephants.png');

function InvitationReveal({ progress }) {
  const scale = 1 + progress * 2.4;
  const lift = progress * 8;
  const cardOpacity =
    progress < 0.42 ? 1 : Math.max(0, 1 - (progress - 0.42) * 2.2);
  const blur = Math.min(6, progress * 10);

  return (
    <div
      className="invitation-reveal"
      style={{
        transform: `translate(-50%, calc(-50% - ${lift}vh)) scale(${scale})`,
        opacity: cardOpacity,
        filter: `blur(${blur * 0.15}px)`,
      }}
    >
      <div className="invitation-reveal__card">
        <div className="invitation-reveal__frame" aria-hidden="true" />
        <p className="invitation-reveal__pre">Beginning of Forever</p>
        <h1 className="invitation-reveal__title">
          RAANJHANA
          <br />
          EVENTS
        </h1>
        <p className="invitation-reveal__tagline">Luxury Wedding Planners</p>
        <div className="invitation-reveal__divider" />
        <p className="invitation-reveal__hint">Scroll to begin your royal journey</p>
      </div>
    </div>
  );
}

function HeritageGateEntrance({ openProgress }) {
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
          <div
            className="heritage-gate__dim"
            style={{ opacity: Math.min(0.45, openProgress * 0.55) }}
            aria-hidden="true"
          />
          <InvitationReveal progress={openProgress} />
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
          <div className="invitation-reveal invitation-reveal--loader">
            <div className="invitation-reveal__card">
              <h2 className="invitation-reveal__title">
                RAANJHANA
                <br />
                EVENTS
              </h2>
              <p className="invitation-reveal__tagline">Opening your royal invitation…</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeritageGateEntrance, HeritageLoader };
export default HeritageLoader;
