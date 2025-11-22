import ProjectCard from "../components/ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  // Java (Spring Boot, Monolithic), React.js, JavaScript, MongoDB, AWS, Docker
  const projects = [
    {
      title: "Patna Metro Route Finder Voice Assistant",
      description:
        "Developed a first-of-its-kind Patna Metro Route Finder web application, providing users with accurate live metro routes, fare calculation, and distance details. Integrated an intelligent chatbot assistant to offer seamless query support and enhance user experience",
      tags: [
        "Java",
        "Spring Boot",
        "Monolithic",
        "React.js",
        "MongoDB",
        "Docker",
        "AWS",
      ],
      githubLink: "https://github.com/rachitsharma300/Patna-Metro",
      liveLink: "https://www.patnametromap.in/",
      videoUrl:
        "https://github.com/user-attachments/assets/a815c282-29fa-4318-af81-52f6d5ec7c73",
    },
    {
      title: "ByteBuzz Chat App",
      description:
        "Developed Bytebuzz, a real-time chat platform using Spring Boot (WebSocket) and React, enabling low-latency one-to-one and group messaging with a responsive UI and scalable backend.",
      tags: ["Java", "Spring Boot", "WebSocket", "React", "MongoDB", "Docker"],
      githubLink: "https://github.com/rachitsharma300/bytebuzz-chat-app",
      liveLink: "https://byte-buzz-chat-app.netlify.app/",
      videoUrl:
        "https://github.com/user-attachments/assets/33c87b82-af57-4746-acd4-31f8a96189fc",
    },
    {
      title: "Weather Web App",
      description:
        "Built a real-time weather forecast application using Java (Servlets, JSP) and OpenWeather API, delivering accurate location-based weather updates through a dynamic web interface.",
      tags: [
        "Java",
        "Servlet",
        "JSP",
        "OpenWeather API",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      githubLink: "https://github.com/rachitsharma300/Weather-Web-App",
      liveLink: null,
      videoUrl:
        "https://github.com/rachitsharma300/Weather-Web-App/assets/50745070/204eeaac-103e-44d1-9ab8-e01451e1e908",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical solutions to real-world problems - demonstrated through
            these projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
