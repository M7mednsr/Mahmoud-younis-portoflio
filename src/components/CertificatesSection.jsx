import React, { useState } from "react";
import { certificatesData } from "../data/portfolioData";
import { Award, Calendar, CheckCircle, X } from "lucide-react";

const CertificatesSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="py-24 px-6 max-w-7xl mx-auto bg-[#fcfbf8]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-600 font-semibold text-xs uppercase tracking-wider mb-4 border border-amber-500/20">
          <Award className="w-4 h-4" />
          <span>Credentials & Training</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0b0f17] tracking-tight mb-4 leading-tight">
          Professional <span className="text-amber-500">Certifications</span>
        </h2>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Verified industry credentials in Occupational Safety, Health, and Environmental (HSE) management for heavy engineering and underground construction.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="group bg-white rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            {/* Certificate Thumbnail / Banner */}
            <div
              onClick={() => setSelectedCert(cert)}
              className="h-72 sm:h-80 w-full overflow-hidden bg-slate-100 relative cursor-pointer group/img border-b border-slate-100 flex items-center justify-center p-4"
              title="Click to view full certificate"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="max-w-full max-h-full object-contain drop-shadow-md group-hover/img:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 right-3 bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow flex items-center gap-1.5 z-10">
                <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>{cert.badge}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/75 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium text-xs shadow-lg">
                  Click to View Full Certificate
                </span>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">
                  <span>{cert.issuer}</span>
                  <span className="flex items-center gap-1 text-slate-400 font-medium lowercase tracking-normal">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0b0f17] mb-3 leading-snug group-hover:text-amber-600 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  ID: <span className="text-[#0b0f17] font-semibold">Verified Diploma</span>
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
                >
                  View Document &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal / Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors z-50"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal Image Wrapper */}
          <div
            className="relative max-w-5xl max-h-[82vh] flex items-center justify-center bg-white p-2 sm:p-4 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="max-w-full max-h-[78vh] object-contain rounded-lg"
            />
          </div>

          {/* Caption */}
          <div
            className="text-white text-center mt-4 max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-lg sm:text-xl font-bold tracking-tight mb-1">
              {selectedCert.title}
            </h4>
            <p className="text-sm text-slate-300">
              Issued by <span className="text-amber-400 font-semibold">{selectedCert.issuer}</span> — {selectedCert.date}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificatesSection;
