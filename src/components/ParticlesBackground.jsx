// components/ParticlesBackground.jsx
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all'; // Correct for tsparticles v3

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: { value: "#0f172a" } },
        particles: {
          number: { value: 100 },
          color: { value: "#38bdf8" }, // sky blue
          size: { value: 5 },
          move: { enable: true, speed: 1 },
          links: { enable: true, distance: 120, color: "#ffffff" },
        },
        detectRetina: true,
      }}
    />
  );
}