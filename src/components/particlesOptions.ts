import type { ISourceOptions } from "@tsparticles/engine";

export const particlesOptions: ISourceOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: {
    color: { value: "#0A0A0A" } // 深灰藍黑色
  },
  fpsLimit: 120,
  detectRetina: true,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true
      }
    },
    color: {
      value: "#F0F0F0"
    },
    links: {
      enable: true,
      distance: 120,
      color: "#ffffff",
      opacity: 0.15,
      width: 1,
      triangles: {
        enable: false
      }
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      outModes: "bounce",
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      }
    },
    size: {
      value: {
        min: 0.5,
        max: 3
      }
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.7
      },
      animation: {
        enable: true,
        speed: 0.5,
        minimumValue: 0.1,
        sync: false
      }
    },
    twinkle: {
      particles: {
        enable: true,
        opacity: 0.5,
        color: "#ffffff"
      },
      lines: {
        enable: false
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: true,
          force: 60,
          smooth: 10
        }
      },
      onClick: {
        enable: true,
        mode: "push"
      },
      resize: {
        enable: true
      }
    },
    modes: {
      grab: {
        distance: 140,
        links: {
          opacity: 0.5
        }
      },
      push: {
        quantity: 4
      }
    }
  }
};
