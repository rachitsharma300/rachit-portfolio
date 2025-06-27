// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-dark-800 dark:to-dark-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 text-center">
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
                  "Spring Boot Learner",
                  "React Enthusiast",
                  "Building Full Stack Projects",
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
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-2xl text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
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
