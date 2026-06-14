const GATE_IMAGE = '/assets/heritage-gate.png';

function HeritageDoor({ side, openProgress }) {
  const isLeft = side === 'left';
  const angle = Math.min(85, openProgress * 90);
  const swayPaused = openProgress > 0.08;

  return (
    <div
      className={`heritage-door heritage-door--${side}`}
      style={{
        transform: isLeft
          ? `perspective(2000px) rotateY(${angle}deg)`
          : `perspective(2000px) rotateY(${-angle}deg)`,
      }}
    >
      <div
        className="heritage-door__panel"
        style={{ animationPlayState: swayPaused ? 'paused' : 'running' }}
      >
        <img
          src={GATE_IMAGE}
          alt=""
          className="heritage-door__img"
          aria-hidden="true"
          draggable={false}
        />
      </div>
    </div>
  );
}

function HeritageGateEntrance({ openProgress }) {
  const textOpacity = Math.max(0, 1 - openProgress * 2.2);

  if (openProgress >= 0.98) return null;

  return (
    <div className="heritage-gate">
      <div className="heritage-gate__stage">
        <div className="heritage-gate__artboard">
          <img
            src={GATE_IMAGE}
            alt=""
            className="heritage-gate__base"
            aria-hidden="true"
            draggable={false}
          />
          <HeritageDoor side="left" openProgress={openProgress} />
          <HeritageDoor side="right" openProgress={openProgress} />

          <div className="heritage-gate__overlay" style={{ opacity: textOpacity }}>
            <div className="heritage-gate__center-mask" aria-hidden="true" />
            <div className="heritage-gate__center">
              <span className="heritage-gate__om">ॐ</span>
              <p className="heritage-gate__pre">Beginning of Forever</p>
              <h1 className="heritage-gate__title">RAANJHANA EVENTS</h1>
              <p className="heritage-gate__tagline">
                Luxury Wedding Planners<br />&amp; Destination Celebrations
              </p>
              <div className="heritage-gate__divider" />
              <p className="heritage-gate__hint">Scroll to open the royal gate</p>
            </div>
          </div>

          <div
            className="heritage-gate__seam"
            style={{ opacity: Math.max(0, 1 - openProgress * 1.5) }}
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

function HeritageLoader() {
  return (
    <div className="heritage-loader">
      <div className="heritage-loader__stage">
        <div className="heritage-loader__artboard">
          <img
            src={GATE_IMAGE}
            alt=""
            className="heritage-loader__bg"
            aria-hidden="true"
            draggable={false}
          />
          <div className="heritage-gate__center-mask" aria-hidden="true" />
          <div className="heritage-loader__center">
            <h2>RAANJHANA EVENTS</h2>
            <p>Opening your royal invitation…</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { HeritageGateEntrance, HeritageLoader };
export default HeritageLoader;
