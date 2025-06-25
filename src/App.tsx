import HeroIntro from "./components/HeroIntro";
import AboutMe from "./components/AboutMe";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
import "./index.css"

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#111] to-[#1a1a1a] text-white font-sans">
      <HeroIntro />
      <AboutMe />
      <ProjectSection />
      <Footer />
    </main>
  );
}
