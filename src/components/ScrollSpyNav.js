'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollSpyNav({ items }) {
  const [activeId, setActiveId] = useState(items[0]?.id || '');
  const [visible, setVisible] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);

      const offsets = items.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        return { id: item.id, top: el.getBoundingClientRect().top };
      });

      const closest = offsets.reduce((prev, curr) => {
        if (curr.top <= 200 && curr.top > prev.top - 200) return curr;
        if (curr.top <= 200) return prev.top <= 200 ? (curr.top > prev.top ? curr : prev) : curr;
        return prev;
      }, offsets[0]);

      if (closest) setActiveId(closest.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      ref={navRef}
      className={`scroll-spy-nav ${visible ? 'scroll-spy-nav--visible' : ''}`}
    >
      <div className="scroll-spy-nav-inner">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`scroll-spy-pill ${activeId === item.id ? 'scroll-spy-pill--active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
