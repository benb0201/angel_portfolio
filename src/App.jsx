import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Brands from "./components/sections/Brands";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Brands />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
