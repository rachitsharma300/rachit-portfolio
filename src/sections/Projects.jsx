import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with Java Spring Boot backend and React frontend.",
      tags: ["Java", "Spring Boot", "React", "MySQL"],
      githubLink: "https://github.com/yourusername/ecommerce-app",
      liveLink: "https://ecommerce-demo.com"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks with user authentication and real-time updates.",
      tags: ["Spring Security", "JWT", "React", "MongoDB"],
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: null
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve real problems.
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