import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import GitHubStats from "./sections/GitHubStats";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Certifications from "./sections/Certifications";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedFavicon from "./components/AnimatedFavicon";
import Lenis from "lenis";
import "./App.css";

function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatedFavicon />
      {isLoading && <LoadingScreen />}
      <Navbar onContactClick={() => setContactOpen(true)} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact
        isOpen={contactOpen}
        onToggle={() => setContactOpen(!contactOpen)}
      />
      <Certifications />
      <GitHubStats />
      <Footer />
    </>
  );
}

export default App;
