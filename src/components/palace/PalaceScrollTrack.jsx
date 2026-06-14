export default function PalaceScrollTrack() {
  return (
    <>
      <section id="hero" className="palace-panel palace-panel--gate" data-scene="gate">
        <div className="palace-panel__spacer palace-panel__spacer--gate" />
      </section>

      <section id="courtyard" className="palace-panel palace-panel--courtyard" data-scene="courtyard">
        <div className="palace-panel__spacer" />
      </section>

      <section id="venue" className="palace-panel palace-panel--venue" data-scene="venue">
        <div className="palace-panel__spacer" />
      </section>

      <section id="gallery" className="palace-panel palace-panel--gallery" data-scene="gallery">
        <div className="palace-panel__spacer" />
      </section>

      <section id="rooms" className="palace-panel palace-panel--rooms" data-scene="rooms">
        <div className="palace-panel__spacer palace-panel__spacer--long" />
      </section>

      <section id="invite" className="palace-panel palace-panel--sunset" data-scene="sunset">
        <div className="palace-panel__spacer" />
      </section>
    </>
  );
}
