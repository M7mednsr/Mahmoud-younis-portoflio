import React, { useState } from "react";
import { MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";

const ProjectCard = ({ project }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = project.images || (project.image ? [project.image] : []);

  const nextImage = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentImgIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="group bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
        {/* Thumbnail Banner (Clickable to open Fullscreen Modal) */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="h-56 w-full overflow-hidden bg-slate-100 relative group/img cursor-pointer"
          title="Click to view full image"
        >
          {images.length > 0 && (
            <img
              src={images[currentImgIndex]}
              alt={`${project.title} (${currentImgIndex + 1})`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          )}

          {images.length > 1 && (
            <>
              {/* Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white p-1.5 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/85 text-white p-1.5 rounded-full opacity-0 group-hover/img:opacity-100 transition-opacity z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-2 inset-x-0 flex justify-center gap-1.5 z-10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setCurrentImgIndex(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImgIndex
                        ? "bg-amber-500 w-4 shadow-sm"
                        : "bg-white/70 hover:bg-white w-1.5"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Counter Badge */}
              <div className="absolute top-2 right-2 bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow z-10">
                {currentImgIndex + 1} / {images.length} Photos
              </div>
            </>
          )}
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

    {/* Fullscreen Lightbox Modal */}
    {isModalOpen && (
      <div
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        onClick={() => setIsModalOpen(false)}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors z-50"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Image Container */}
        <div
          className="relative max-w-6xl max-h-[82vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentImgIndex]}
            alt={project.title}
            className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl border border-white/10"
          />

          {/* Modal Navigation Arrows for Multi-Image */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute -left-4 sm:-left-14 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-amber-500 text-white hover:text-[#0b0f17] p-3 rounded-full transition-all shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute -right-4 sm:-right-14 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-amber-500 text-white hover:text-[#0b0f17] p-3 rounded-full transition-all shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Caption */}
        <div className="text-white text-center mt-4 max-w-3xl" onClick={(e) => e.stopPropagation()}>
          <h4 className="text-lg sm:text-xl font-bold tracking-tight mb-1">
            {project.title}
          </h4>
          {images.length > 1 && (
            <span className="inline-block bg-white/15 px-3 py-1 rounded-full text-xs font-semibold text-slate-200 mt-1">
              Photo {currentImgIndex + 1} of {images.length}
            </span>
          )}
        </div>
      </div>
    )}
    </>
  );
};

export default ProjectCard;
