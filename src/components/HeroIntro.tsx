// src/components/HeroIntro.tsx
import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { particlesOptions } from "../config/particlesOptions";
import "./HeroIntro.css";

export default function HeroIntro() {
  const [init, setInit] = useState(false);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      initParticlesEngine(async (engine) => {
        await loadAll(engine);
      }).then(() => {
        setInit(true);
        isInitialized.current = true;
      });
    }
  }, []);

  return (
    <section className="hero-intro-wrapper">
      {init && (
        <Particles
          id="tsparticles"
          className="particles-bg"
          options={{
            ...particlesOptions,
            fullScreen: { enable: false },
          }}
        />
      )}
      <div className="hero-intro">
        <div className="hero-content">
          <h1 className="headline">
            Hello, I'm <span className="highlight">Kaki</span><br />
            Junior Software Developer
          </h1>
          <h2>
            A creative mind turned developer —<br />
            connecting stories, systems, and emotion.
          </h2>
          <a href="#projects" className="cta-btn">↓ View my work</a>
        </div>
      </div>
    </section>
  );
}
