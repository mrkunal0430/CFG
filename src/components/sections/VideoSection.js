'use client';

import { useState } from 'react';

const videos = [
  {
    id: 'qbgngus8i7Q',
    title: 'Cosmos Financial Group — Corporate Overview',
    description: 'Discover our vision, mission, and the values that drive us to deliver exceptional financial solutions worldwide.',
  },
  {
    id: 'pPkNtN8G7q8',
    title: 'Our Impact & Growth Story',
    description: 'See how Cosmos Financial Group is creating lasting impact through responsible financing and strategic partnerships.',
  },
  {
    id: 'FXjHwQ6J_yI',
    title: 'Leadership & Innovation',
    description: 'Meet the leaders shaping the future of investment banking with innovation at the core.',
  },
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <section className="py-5xl bg-bg-primary relative overflow-hidden" id="media">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative z-[1]">
        {/* Section header */}

          <span className="inline-flex items-center gap-xs text-xs font-semibold tracking-wider uppercase text-accent border border-accent/25 py-1.5 px-4 rounded-full bg-accent/[0.06] mb-lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            Media & Insights
          </span>
        

        {/* Video showcase */}
        <div className="grid grid-cols-[1fr_340px] gap-xl items-start max-[1024px]:grid-cols-1 max-[1024px]:gap-lg">
          {/* Main video player */}
          <div className="relative rounded-lg overflow-hidden border border-white/[0.08] bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videos[activeVideo].id}?rel=0&modestbranding=1`}
                title={videos[activeVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Video info bar */}
            <div className="p-lg bg-white/[0.03] border-t border-white/[0.06]">
              <h3 className="text-lg font-semibold text-text-primary mb-xs">{videos[activeVideo].title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{videos[activeVideo].description}</p>
            </div>
          </div>

          {/* Playlist sidebar */}
          <div className="flex flex-col gap-sm max-[1024px]:flex-row max-[1024px]:overflow-x-auto max-[1024px]:pb-2 max-[768px]:flex-col">
            {videos.map((video, i) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(i)}
                className={`group flex gap-md p-md rounded-lg border text-left transition-all duration-300 ease-out ${
                  activeVideo === i
                    ? 'bg-accent/[0.08] border-accent/30 shadow-[0_0_20px_rgba(200,230,74,0.06)]'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
                } max-[1024px]:min-w-[280px] max-[1024px]:shrink-0 max-[768px]:min-w-0`}
              >
                {/* Thumbnail */}
                <div className="relative shrink-0 w-[120px] h-[68px] rounded-md overflow-hidden bg-black/50 max-[768px]:w-[100px] max-[768px]:h-[56px]">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  {/* Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeVideo === i
                        ? 'bg-accent text-bg-primary scale-100'
                        : 'bg-black/60 text-white/80 scale-90 group-hover:scale-100'
                    }`}>
                      {activeVideo === i ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="6 3 20 12 6 21 6 3" />
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* Now playing indicator */}
                  {activeVideo === i && (
                    <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-accent text-bg-primary">
                      Now Playing
                    </div>
                  )}
                </div>

                {/* Video info */}
                <div className="flex flex-col justify-center min-w-0">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted mb-0.5">
                    Video {i + 1} of {videos.length}
                  </span>
                  <h4 className={`text-sm font-medium leading-snug line-clamp-2 transition-colors duration-300 ${
                    activeVideo === i ? 'text-accent' : 'text-text-primary group-hover:text-text-primary'
                  }`}>
                    {video.title}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
