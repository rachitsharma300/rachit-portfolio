import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
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
      <Footer />
    </>
  );
}

export default App;
