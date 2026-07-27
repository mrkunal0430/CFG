'use client';

export default function FloatingShapes() {
  const shapes = [
    { type: 'hexagon', size: 60, top: '15%', left: '8%', delay: 0, duration: 22 },
    { type: 'triangle', size: 40, top: '25%', right: '12%', delay: 3, duration: 18 },
    { type: 'circle', size: 50, bottom: '20%', left: '15%', delay: 6, duration: 25 },
    { type: 'hexagon', size: 35, top: '60%', right: '8%', delay: 2, duration: 20 },
    { type: 'triangle', size: 30, bottom: '30%', right: '25%', delay: 8, duration: 24 },
    { type: 'circle', size: 25, top: '45%', left: '5%', delay: 4, duration: 19 },
  ];

  return (
    <div className="floating-shapes" aria-hidden="true">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`floating-shape floating-shape--${shape.type}`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            bottom: shape.bottom,
            animationDelay: `${shape.delay}s`,
            animationDuration: `${shape.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
