export default function FloatingPetals({ count = 16 }) {
  return (
    <div className="floating-petals" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="floating-petals__petal"
          style={{
            '--x': `${(i * 23 + 7) % 100}%`,
            '--delay': `${(i * 0.4) % 6}s`,
            '--dur': `${6 + (i % 7)}s`,
            '--drift': `${-30 + (i % 60)}px`,
            '--rot': `${i * 40}deg`,
          }}
        />
      ))}
    </div>
  );
}
