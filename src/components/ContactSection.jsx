import React from "react";
import { contactData } from "../data/portfolioData";
import { Phone, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const getIcon = (type) => {
    switch (type) {
      case "phone":
        return <Phone className="w-4 h-4 text-amber-500" />;
      case "whatsapp":
        return <MessageCircle className="w-4 h-4 text-green-500" />;
      case "linkedin":
        return (
          <svg
            className="w-4 h-4 fill-current text-white"
            viewBox="0 0 24 24"
          >
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto text-center">
      <div
        className="relative rounded-3xl border border-slate-800 p-10 md:p-16 shadow-xl overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/imgs/contact-team.png')` }}
      >
        {/* Semi-transparent overlay so the background image appears clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f17]/45 via-[#0b0f17]/60 to-[#0b0f17]/75" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 drop-shadow-md">
            {contactData.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow">
            {contactData.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {contactData.buttons.map((btn, index) => {
              const isLinkedin = btn.type === "linkedin";
              return (
                <a
                  key={index}
                  href={btn.href}
                  target={btn.href.startsWith("http") ? "_blank" : "_self"}
                  rel={btn.href.startsWith("http") ? "noopener noreferrer" : ""}
                  className={`inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold shadow-md transition-all duration-200 ${
                    isLinkedin
                      ? "bg-amber-500 text-[#0b0f17] hover:bg-amber-400"
                      : "border border-white/25 bg-white/10 text-white backdrop-blur-md hover:border-amber-500 hover:bg-white/20"
                  }`}
                >
                  {getIcon(btn.type)}
                  <span>{btn.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
