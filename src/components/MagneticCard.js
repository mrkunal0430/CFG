'use client';

import { useRef, useState } from 'react';

export default function MagneticCard({ children, className = '', intensity = 15 }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('perspective(800px) rotateX(0deg) rotateY(0deg)');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
    setGlare({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, opacity: 0.12 });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`magnetic-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 0.15s ease-out' }}
    >
      <div
        className="magnetic-card-glare"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(200,230,74,${glare.opacity}), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}
