export default function GateBorder({ side, openProgress }) {
  const isLeft = side === 'left';
  const offset = openProgress * (isLeft ? -100 : 100);

  return (
    <div
      className={`royal-gate royal-gate--${side}`}
      style={{ transform: `translateX(${offset}%)` }}
      aria-hidden="true"
    >
      <div className="royal-gate__pattern" />
      <div className="royal-gate__arch" />
      <div className="royal-gate__floral" />
    </div>
  );
}
