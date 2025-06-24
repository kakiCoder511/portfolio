import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import HeroIntro from "./components/HeroIntro";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import "./App.css";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  return (
    <>
      <ParticlesBackground />

      <div className="flex flex-col min-h-screen">
        <HeroIntro />
        <AboutMe />
        <ProjectSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
