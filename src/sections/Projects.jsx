import ProjectCard from "../components/ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ByteBuzz Chat App",
      description: "Real-time chat app with Spring Boot (WebSocket) & React.",
      tags: ["Java", "Spring Boot", "WebSocket", "React", "MongoDB", "Docker"],
      githubLink: "https://github.com/rachitsharma300/bytebuzz-chat-app",
      liveLink: "https://byte-buzz-chat-app.netlify.app/",
      videoUrl:
        "https://github.com/user-attachments/assets/33c87b82-af57-4746-acd4-31f8a96189fc",
    },
    {
      title: "Weather Web App",
      description:
        "Real-time weather forecasts using OpenWeather API with Java backend.",
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
    {
      title: "Personal Portfolio",
      description:
        "Interactive developer portfolio with modern UI and project showcase.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      githubLink: "https://github.com/rachitsharma300/rachit-portfolio",
      liveLink: "",
      videoUrl:
        "https://github.com/user-attachments/assets/6b598e91-071c-4ba2-8559-be130678cd80",
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
           My technical solutions to real-world problems - demonstrated through these projects.
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
