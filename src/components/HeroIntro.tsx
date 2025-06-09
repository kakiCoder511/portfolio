// src/components/HeroIntro.tsx
import { useEffect, useRef, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, MoveAttract } from "@tsparticles/engine";
import { loadAll } from "@tsparticles/all";
import "./HeroIntro.css";
import { particlesOptions} from "../components/particlesOptions"

export default function HeroIntro() {
  const [init, setInit] = useState(false);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (!isInitialized.current) {
      initParticlesEngine(async (engine) => {
        console.log("🟢 Init triggered");
        await loadAll(engine);
        console.log("✅ All plugins loaded");
      }).then(() => {
        setInit(true);
        isInitialized.current = true;
      });
    }
  }, []);

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      console.log("🟣 Canvas size:", container.canvas.size);
      console.log("🟣 Particle count:", container.particles.count);
    }
  };

  return (
    <section className="hero-intro-wrapper snap-section" id="hero">
      <div className="hero-intro">
        {init && (
         <Particles
  id="tsparticles"
  particlesLoaded={particlesLoaded}
  options={{
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: { value: "#00001a" }
    },
    fpsLimit: 120,

    particles: {
      number: {
        value: 180,
        density: {
          enable: true,
        },
      },
      color: {
        // 設定一個顏色陣列，讓粒子隨機從中選取顏色
        // 包含藍白、純白，以及少量暖色調 (淺紫/粉紅)
        value: ["#FF0000", "#FFFFFF", "#efc9fd", "#c9d4fd",], // 淺藍白, 純白, 淺藍, 淺粉紅
      },
      links: {
        enable: true,
        distance: 120,
        color: "#87CEEB", // <-- 將粒子間連線顏色設定為更亮的 SkyBlue
        opacity: 0.25, // <-- 稍微增加平時連線的透明度，讓它們更明顯
        width: 1,
        triangles: {
          enable: false,
        },
        shadow: { // 粒子間連線的陰影
          enable: true,
          blur: 6, // <-- 增加模糊度，讓光暈更柔和、更亮
          color: "#87CEEB", // 陰影顏色與連線顏色一致
        },
      },
      move: {
        enable: true,
        speed: 0.6,
        direction: "none",
        random: true,
        straight: false,
        outModes: "bounce",
      },
      size: {
        value: {
          min: 0.5,
          max: 3,
        },
      },
      opacity: {
        value: { min: 0.1, max: 0.7 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        }
      },
      twinkle: { // 讓粒子隨機閃爍
        particles: {
          enable: true,
          opacity: 0.6,
          // Twinkle 顏色也可以設定為陣列中的某個顏色，或與粒子顏色同步
          color: "#E0EFFF",
        },
      },
      shadow: { // 粒子本身的陰影 (發光)
        enable: true,
        blur: 8, // <-- 增加模糊度，粒子光暈更強
        color: "#ADD8E6", // 粒子陰影顏色也設為淺藍色
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: true,
            force: 60,
            smooth: 60,
          },
        },
        onClick: {
          enable: true,
          mode: "push",
        },
        resize: { enable: true },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            enable: true,
            opacity: 1, // 鼠標抓取時連線保持完全不透明，非常亮
            width: 1,
            color: "#66CCFF", // 鼠標連線顏色，選用更鮮豔的藍色
            shadow: { // 鼠標抓取時連線的陰影，製造強烈光暈
              enable: true,
              blur: 12, // <-- 增加模糊度，鼠標周圍光暈更強
              color: "#66CCFF", // 陰影顏色與鼠標連線顏色一致
            },
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  }}
/>
        )}

        <div className="hero-content">
          <h1 className="headline">
            <span>Hello, my name is </span>

            <span className="highlight">Kaki</span>
            <br />
            <span> I'm a Junior Software developer.</span>
          </h1>
          <h2>
            {" "}
            A creative mind turned developer — <br />
            connecting stories, systems, and emotion.
          </h2>
          <a href="#dots" className="cta-btn">
            View my work ↓
          </a>
        </div>
      </div>
    </section>
  );
}
