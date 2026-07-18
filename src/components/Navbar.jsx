import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 glass-nav border-b border-slate-200/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-[#0b0f17] hover:opacity-90 transition-opacity"
        >
          MY<span className="text-amber-500">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#projects"
            className="hover:text-[#0b0f17] transition-colors"
          >
            Projects
          </a>
          <a
            href="#expertise"
            className="hover:text-[#0b0f17] transition-colors"
          >
            Expertise
          </a>
          <a
            href="#contact"
            className="hover:text-[#0b0f17] transition-colors"
          >
            Contact
          </a>
        </nav>

        <div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#131b2e] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#131b2e]/90 transition-all duration-200"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
