"use client";

import Link from "next/link";
import CounterAnimation from "@/components/CounterAnimation";
import EarthGlobe from "@/components/EarthGlobe";
import ParticleCanvas from "@/components/ParticleCanvas";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-bg-primary overflow-hidden pt-[80px] max-[768px]:pt-16" id="hero">
      {/* Star particles background */}
      <ParticleCanvas />

      {/* Space background image */}
      <div className="absolute inset-0 bg-[url('/images/space-bg.png')] bg-cover bg-center opacity-50 pointer-events-none" aria-hidden="true" />

      {/* Large "CFG" watermark */}
      <div
        className="absolute top-1/2 right-[5%] -translate-y-1/2 text-[clamp(12rem,20vw,28rem)] font-black tracking-[0.05em] text-white/[0.02] leading-[0.85] pointer-events-none z-[1] select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.03)] max-[768px]:text-[8rem] max-[768px]:right-[-10%]"
        aria-hidden="true"
      >
        CFG
      </div>

      {/* Earth globe at bottom */}
      <EarthGlobe />

      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none z-[2] bg-[linear-gradient(to_right,rgba(10,14,10,0.85)_0%,rgba(10,14,10,0.4)_50%,transparent_100%),radial-gradient(ellipse_at_50%_100%,rgba(212,168,67,0.08)_0%,transparent_60%)]"
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative z-[3] flex flex-col gap-xl max-w-[1280px] mx-auto px-xl pt-4xl pb-5xl w-full max-[1024px]:pt-3xl max-[1024px]:pb-4xl">
        <div className="flex flex-col gap-xl max-w-[640px]">
          {/* Welcome badge */}
          <span className="inline-flex items-center gap-xs text-xs font-semibold tracking-wider uppercase text-accent border border-accent/25 py-1.5 px-4 rounded-full bg-accent/[0.06] w-fit animate-[fadeIn_0.8s_ease_forwards]">
            <span className="w-2 h-2 rounded-full bg-accent animate-[pulse_2s_ease-in-out_infinite]" />
            Welcome to Cosmos
          </span>

          {/* Main heading */}
          <h1 className="text-hero font-bold leading-tight tracking-[-0.02em] text-text-primary animate-[fadeInUp_0.8s_ease_0.2s_both] max-[768px]:text-[clamp(2rem,8vw,3rem)]">
            Financing a<br />
            <span className="font-serif italic font-normal text-accent">Better Tomorrow</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-text-secondary max-w-[480px] leading-relaxed animate-[fadeInUp_0.8s_ease_0.4s_both]">
            Cosmos is committed to enabling growth
            and creating lasting impact through
            responsible financing.
          </p>

          {/* Feature badges */}
          <div className="flex items-center gap-lg animate-[fadeInUp_0.8s_ease_0.6s_both] max-[768px]:flex-wrap max-[768px]:gap-md">
            <div className="flex items-center gap-xs">
              <svg className="text-accent shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 11l3 3L22 4" />
                <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
              </svg>
              <span className="text-sm font-medium text-text-primary leading-[1.3]">Trust &<br />Security</span>
            </div>
            <span className="w-px h-9 bg-white/15 shrink-0 max-[768px]:hidden" />
            <div className="flex items-center gap-xs">
              <svg className="text-accent shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <span className="text-sm font-medium text-text-primary leading-[1.3]">Growth<br />Focused</span>
            </div>
            <span className="w-px h-9 bg-white/15 shrink-0 max-[768px]:hidden" />
            <div className="flex items-center gap-xs">
              <svg className="text-accent shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              <span className="text-sm font-medium text-text-primary leading-[1.3]">Long Term<br />Partnership</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-lg flex-wrap animate-[fadeInUp_0.8s_ease_0.8s_both] max-[768px]:flex-col max-[768px]:items-stretch">
            <Link href="/services" className="btn btn-primary">
              Explore Our Offerings
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <Link href="/about" className="btn btn-outline">
              About Cosmos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
