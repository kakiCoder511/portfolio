import HeroIntro from "./components/HeroIntro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/ProjectSection";
import "./App.css";

function App() {
  return (
    <main className="scroll-container">
      <section className="page" id="hero">
        <HeroIntro />
      </section>
      <section className="page" id="about">
        <AboutMe />
      </section>
      <section className="page" id="projects">
        <Projects />
      </section>
    </main>
  );
}

export default App;
