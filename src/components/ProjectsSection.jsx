import React, { useState } from "react";
import { projectsData, projectFilters } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter(
          (project) => project.tags && project.tags.includes(activeFilter)
        );

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <div className="text-xs font-semibold tracking-wider text-amber-600 uppercase mb-2">
          SELECTED WORK
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b0f17] tracking-tight mb-4">
          Projects Gallery
        </h2>
        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          Case studies from MTBM and micro tunneling projects spanning machine
          operation, PLC automation, laser guidance, and construction management.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {projectFilters.map((filter, index) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#131b2e] text-white shadow-sm"
                  : "bg-slate-200/80 text-slate-700 hover:bg-slate-300/80"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
