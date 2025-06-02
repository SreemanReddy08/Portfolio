import React, { useEffect } from "react";
import NavBar from "./Components/NavBar";
import SkillsTypingEffect from "./Components/Typeing";
import About from "./Components/ProjectsSection";
import ProjectCard from "./Pages/ProjectCard";
import Certifications from "./Pages/Certifications";
import Footer from "./Components/Footer";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="scroll-smooth text-white">
      <NavBar />

      {/* Sections with IDs for href scrolling */}
      <section id="home">
        <SkillsTypingEffect />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <ProjectCard />
      </section>

      <section id="certifications">
        <Certifications />
      </section>

      <Footer />
    </div>
  );
}

export default App;
