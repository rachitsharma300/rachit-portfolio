// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { darkMode } = useTheme();

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Light mode optimizations
  const particleColor = darkMode ? "#3B82F6" : "#1D4ED8"; // Darker blue for light
  const linkColor = darkMode ? "#93C5FD" : "#1E40FF"; // Brighter connection lines
  const particleOpacity = darkMode
    ? { min: 0.3, max: 0.7 }
    : { min: 0.6, max: 0.9 };
  const linkOpacity = darkMode ? 0.4 : 0.7;
  const particleSize = darkMode ? { min: 1, max: 3 } : { min: 2, max: 4 };
  const linkWidth = darkMode ? 1 : 1.5;

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-dark-800 dark:to-dark-900"
    >
      {/* Particle Background - Full Screen */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: { color: "transparent" },
            particles: {
              number: { value: darkMode ? 50 : 40 }, // Reduced number since text takes more space
              color: { value: particleColor },
              shape: {
                type: "char",
                options: {
                  char: {
                    value: [
                      "Java",
                      "JavaScript",
                      "Python",
                      "HTML",
                      "CSS",
                      "React",
                      "TailwindCSS",
                      "Thymeleaf",
                      "Spring Boot",
                      "Spring",
                      "Database",
                      "JWT",
                      "WebFlux",
                      "Batch Processing",
                      "Node.js",
                      "REST API",
                      "MySQL",
                      "JDBC",
                      "MongoDB",
                      "AWS",
                      "Postman",
                      "IntelliJ",
                      "Bootstrap",
                      "System Design",
                    ],
                    font: "Verdana",
                    style: "",
                    weight: "400",
                  },
                },
              },
              links: {
                color: linkColor,
                distance: 120, // Slightly increased distance for better readability
                enable: true,
                opacity: linkOpacity,
                width: linkWidth,
              },
              move: {
                enable: true,
                speed: { min: 0.4, max: 1.5 }, // Slightly slower for text readability
                outModes: { default: "bounce" },
              },
              opacity: particleOpacity,
              size: {
                value: 5.5, // Fixed size for better text readability
                random: false,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100, // Increased repulse distance
                  duration: 0.4,
                },
              },
            },
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Rachit Sharma
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 h-8">
            <Typewriter
              options={{
                strings: [
                  "Aspiring Full Stack Java Developer",
                  "Building Full Stack Projects",
                  "Spring Boot Learner",
                  "React Enthusiast",
                  "Passionate Java Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-dark-700 px-6 py-3 rounded-lg font-medium transition"
            >
              <HiDocumentDownload /> Resume
            </motion.a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/rachitsharma300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition" />
            </a>
            <a
              href="https://linkedin.com/in/rachitsharma300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
