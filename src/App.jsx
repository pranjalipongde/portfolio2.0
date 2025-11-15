import "./index.css";

import Header from "./components/Header";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
