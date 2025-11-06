import "./AboutMe.css";
import "./HobbiesSlider.css";
import { useEffect } from "react";
import HobbiesSlider from "./HobbiesSlider";
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
  "Somewhere in-between I became a London bus driver. That job taught me systems thinking, empathy, and calm under pressure.",
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
      <div className="about-container">
        <div className="about-grid">
          <div className="photo-wrapper fade-in-up">
            <img
              src="/AboutmeProfilepic.png"
              alt="Kaki Lai"
              className="profile-photo"
            />
          </div>

          <div className="about-content">
            <h1 className="main-heading">
              Hi, I'm <span className="highlight">Kaki</span>
            </h1>

            <blockquote className="quote">
              “You can't connect the dots looking forward; you can only connect them looking backwards.”
              ---- Steve Jobs
            </blockquote>

            <div className="about-paragraphs">
              {paragraphs.map((text, index) => (
                <p
                  key={index}
                  className="fade-in-up paragraph"
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {text}
                </p>
              ))}
            </div>

            <div className="extra-content fade-in-up">
              <h3>What I bring from my previous experiences:</h3>
              <ul>
                <li>Creativity in solving problems</li>
                <li>Observation and analytic skills</li>
                <li>Collaboration with different kinds of people</li>
                <li>Curiosity about technology and humans</li>
              </ul>

              <h3>How would my friends describe me:</h3>
              <ul>
                <li>Proactive — always learning and exploring</li>
                <li>Creative — love generating new ideas</li>
                <li>Motivated — do what I love with energy</li>
                <li>Open-minded — open to feedback</li>
                <li>Adaptable — flexible in new environments</li>
                <li>Integrity — do my best at work</li>
                <li>Empathy — understand people's feelings</li>
              </ul>

              <h3>Besides work, I love ...</h3>
              <p>Photography, painting, travelling and something fun!</p>
            </div>
          </div>
        </div>

        <div className="hobbies-section">
          <HobbiesSlider />
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
