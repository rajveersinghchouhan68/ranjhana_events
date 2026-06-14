import { assetUrl } from '../../../utils/assets';
import RoyalOrnateDoor from './RoyalOrnateDoor';

const GATE_IMAGE = assetUrl('assets/royal-gate-elephants.png');

function HeritageGateEntrance({ openProgress }) {
  const textOpacity = Math.max(0, 1 - openProgress * 2.6);
  const revealOpacity = Math.min(1, openProgress * 1.4);

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

          <RoyalOrnateDoor
            openProgress={openProgress}
            textOpacity={textOpacity}
            revealOpacity={revealOpacity}
          >
            <p className="heritage-gate__pre">Beginning of Forever</p>
            <h1 className="heritage-gate__title">
              RAANJHANA
              <br />
              EVENTS
            </h1>
            <p className="heritage-gate__tagline">Luxury Wedding Planners</p>
            <div className="heritage-gate__divider" />
            <p className="heritage-gate__hint">Scroll to open the royal gate</p>
          </RoyalOrnateDoor>
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
          <div className="heritage-loader__text">
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
