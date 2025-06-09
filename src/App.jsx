import HeroIntro from "./components/HeroIntro";
import IntroHeader from "./components/AboutMe"
import "./App.css";

function App() {
  return (
    <main className="scroll-container">
      <section className="page" style={{ height: "100vh" }}>
        <HeroIntro />
      </section>
      <section className="page"style={{ height: "100vh" }}>
        <IntroHeader/>
      </section>
    </main>
  );
}

export default App;
