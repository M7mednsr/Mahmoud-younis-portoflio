import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ExpertiseSection from "./components/ExpertiseSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf8] text-slate-800 font-sans selection:bg-amber-500 selection:text-[#0b0f17]">
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <ExpertiseSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
