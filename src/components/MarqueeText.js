'use client';

export default function MarqueeText({ text, speed = 30, className = '' }) {
  return (
    <div className={`marquee-strip ${className}`} aria-hidden="true">
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i} className="marquee-item">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
