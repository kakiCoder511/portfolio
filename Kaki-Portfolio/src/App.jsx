// my-new-particles-app/src/App.jsx
import { useState, useCallback } from 'react'; // 可能會有 useState，唔緊要
import Particles from '@tsparticles/react';
import { loadAll } from '@tsparticles/all';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadAll(engine);
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          background: { color: { value: "#0f172a" } },
          particles: {
    number: { value: 500 }, // 增加數量
    color: { value: "#FF0000" }, // 改為鮮紅色
    size: { value: 5 },
    move: { enable: true, speed: 2 }, // 稍微提高速度
    links: { enable: true, distance: 120, color: "#ffffff" },
},
          detectRetina: true,
        }}
      />
      {/* 加入你最簡單嘅文字內容，確保 zIndex 係 1 */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 1, /* 確保文字在粒子之上 */
        }}
      >
        <h1>Hello, my name is Kaki</h1>
        <h2>Fullstack Developer</h2>
      </div>
    </div>
  );
}

export default App;