import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Certifications from './sections/Certifications'
import "./App.css";

function App() {
  //  const [count, setCount] = useState(0)
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setContactOpen(true)} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact 
        isOpen={contactOpen} 
        onToggle={() => setContactOpen(!contactOpen)} 
      />
           <Certifications /> 
      <Footer />
    </>
  );
}

export default App;
