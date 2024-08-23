import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/routes/Hero";
import About from "./components/routes/About";
import Experience from "./components/routes/Experience";
import Projects from "./components/routes/Projects";
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
