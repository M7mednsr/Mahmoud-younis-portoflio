import React from "react";
import { MapPin } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
      {/* Thumbnail Banner */}
      <div className="h-52 w-full overflow-hidden bg-slate-100 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#0b0f17] mb-1.5 group-hover:text-amber-600 transition-colors leading-snug">
            {project.title}
          </h3>

          {project.location && (
            <div className="text-xs font-medium text-slate-400 mb-3 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{project.location}</span>
            </div>
          )}

          <p className="text-sm text-slate-600 mb-5 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags &&
              project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-medium text-xs border border-slate-200/60"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>

        {/* Bottom Stats Row */}
        {project.stats && project.stats.length > 0 && (
          <div className="pt-4 border-t border-slate-200/60 grid grid-cols-2 gap-4 text-center mt-auto">
            {project.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-base font-bold text-[#0b0f17] tracking-tight truncate">
                  {stat.value}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
