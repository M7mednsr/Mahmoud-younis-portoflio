import React from "react";
import { expertiseData } from "../data/portfolioData";

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
          CAPABILITIES
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b0f17] tracking-tight mb-4">
          Core Expertise
        </h2>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          A multi-disciplinary skill set built across the full underground
          construction lifecycle — from machine controls to final handover.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl border border-slate-200/80 p-8 shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[#0b0f17] mb-3 group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
