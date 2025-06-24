// src/components/ParticlesBackground.tsx
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';
import { particlesOptions } from '../config/particlesOptions';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
  );
}
