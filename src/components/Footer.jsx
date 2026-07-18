import React from "react";
import { footerData } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200/60 bg-[#fcfbf8] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-slate-500">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
          <span className="font-bold text-[#0b0f17] tracking-tight text-base">
            {footerData.logo}
          </span>
          <span>{footerData.copyright}</span>
        </div>

        <div className="flex items-center gap-6 font-medium text-slate-600">
          <a
            href="#projects"
            className="hover:text-[#0b0f17] transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[#0b0f17] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
