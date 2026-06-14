export default function CourtyardDancers() {
  return (
    <div className="courtyard-dancers" aria-hidden="true">
      <svg viewBox="0 0 240 200" className="courtyard-dancers__svg">
        <ellipse cx="120" cy="185" rx="90" ry="8" fill="rgba(92,61,43,0.12)" />
        <g className="courtyard-dancers__figure courtyard-dancers__figure--l">
          <circle cx="72" cy="52" r="14" fill="#5c3d2b" />
          <path d="M72 66 Q58 110 50 170 L94 170 Q86 110 72 66" fill="#8b2040" />
          <path d="M50 90 Q30 70 22 50" stroke="#c9a227" strokeWidth="3" fill="none" />
          <path d="M94 95 Q115 75 125 55" stroke="#c9a227" strokeWidth="3" fill="none" />
          <ellipse cx="72" cy="48" rx="18" ry="6" fill="#c9a227" opacity="0.8" />
        </g>
        <g className="courtyard-dancers__figure courtyard-dancers__figure--r">
          <circle cx="168" cy="52" r="14" fill="#5c3d2b" />
          <path d="M168 66 Q182 110 190 170 L146 170 Q154 110 168 66" fill="#6b1830" />
          <path d="M190 90 Q210 70 218 50" stroke="#c9a227" strokeWidth="3" fill="none" />
          <path d="M146 95 Q125 75 115 55" stroke="#c9a227" strokeWidth="3" fill="none" />
          <ellipse cx="168" cy="48" rx="18" ry="6" fill="#c9a227" opacity="0.8" />
        </g>
      </svg>
    </div>
  );
}
