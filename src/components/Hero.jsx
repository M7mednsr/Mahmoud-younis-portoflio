import React from "react";
import { heroData } from "../data/portfolioData";

const Hero = () => {
  return (
    <section id="top" className="relative flex flex-col">
      {/* Dark Hero Background Banner */}
      <div className="relative min-h-[640px] flex items-center justify-center overflow-hidden py-24 px-6 text-center">
        {/* Background Photo & Overlays */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${heroData.bgImage}')` }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 dot-pattern opacity-40" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm mb-6 shadow-sm">
            {heroData.subHeadline}
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-md">
            {heroData.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-100 font-medium max-w-3xl mx-auto mb-6 leading-relaxed drop-shadow">
            {heroData.focus}
          </p>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
            {heroData.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-sm font-semibold text-[#0b0f17] shadow-lg shadow-amber-500/20 hover:bg-amber-400 hover:-translate-y-0.5 transition-all duration-200"
            >
              View project gallery
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 hover:border-white/30 transition-all duration-200"
            >
              Discuss a project
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Stats Banner */}
      <div className="bg-[#fcfbf8] border-b border-slate-200/60 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {heroData.stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#131b2e] mb-2 tracking-tight">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
