// src/components/AboutMe.tsx
import "./AboutMe.css";
import { useEffect } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiVite,
} from "react-icons/si";

const paragraphs = [
  "I didn't start in tech. My first 'code' was editing timelines in video productions.",
  "After over 10 years shaping visual messages in the corporate world, I studied UX and wanted to build tools, not just design them.",
  "Somewhere in between I became a London bus driver. That job taught me systems thinking, empathy, and calm under pressure.",
  "Every dot behind a camera, the wheel, or the code, shaped how I think, listen, and build."
];

export default function AboutMe() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-section">
      <div className="particles-background"></div>
      <div className="about-container">
        <h1 className="main-heading">
          Hi, I'm <span className="highlight">Kaki</span>
        </h1>

        <blockquote className="quote">
          “You can’t connect the dots looking forward; you can only connect them looking backwards.”<br />
          — Steve Jobs
        </blockquote>

        <div className="about-paragraphs">
          {paragraphs.map((text, index) => (
            <p
              key={index}
              className="fade-in-up paragraph bold-white"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {text}
            </p>
          ))}
        </div>

        <div className="tech-stack">
          <h3 className="tech-stack-heading">Tech Stack</h3>
          <div className="tech-stack-list jumbo-icons">
            <SiJavascript title="JavaScript" />
            <SiTypescript title="TypeScript" />
            <SiReact title="React" />
            <SiNodedotjs title="Node.js" />
            <SiExpress title="Express" />
            <SiPostgresql title="PostgreSQL" />
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiTailwindcss title="TailwindCSS" />
            <SiGit title="Git" />
            <SiVite title="Vite" />
          </div>
        </div>
      </div>
    </section>
  );
}
