import HeritagePole from './HeritagePole';

function blendOpacity(blend, start = 0.52) {
  if (!blend || blend <= start) return 0;
  return Math.min(1, (blend - start) / (1 - start));
}

export default function HeritageChamberFrame({
  image,
  nextImage = null,
  blend = 0,
  alt,
  focus = 'center center',
  nextFocus = 'center center',
}) {
  const cross = blendOpacity(blend);
  const currentOpacity = nextImage ? 1 - cross : 1;

  return (
    <div className="heritage-chamber__frame">
      <div className="heritage-chamber__poles-row">
        <HeritagePole />

        <div className="heritage-chamber__window-wrap">
          <div className="heritage-chamber__window">
            <img
              src={image}
              alt={alt}
              className="heritage-chamber__photo"
              style={{ objectPosition: focus, opacity: currentOpacity }}
              draggable={false}
              loading="eager"
            />
            {nextImage && cross > 0 && (
              <img
                src={nextImage}
                alt=""
                aria-hidden="true"
                className="heritage-chamber__photo heritage-chamber__photo--next"
                style={{ objectPosition: nextFocus, opacity: cross }}
                draggable={false}
                loading="eager"
              />
            )}
            <div className="heritage-chamber__veil" aria-hidden="true" />
            <div className="heritage-chamber__photo-skirt" aria-hidden="true" />
          </div>
        </div>

        <HeritagePole flip />
      </div>
    </div>
  );
}
