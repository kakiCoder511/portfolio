// src/config/particlesOptions.ts
export const particlesOptions = {
  background: {
    color: { value: "#00001a" }
  },
  fpsLimit: 60,
  detectRetina: true,
  particles: {
    number: {
      value: 80,
      density: { enable: true }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
    },
    size: {
      value: { min: 1, max: 3 },
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: "bounce",
    },
    links: {
      enable: true,
      distance: 120,
      color: "#87CEEB",
      opacity: 0.25,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 1
        }
      },
      push: {
        quantity: 4
      }
    }
  }
};
