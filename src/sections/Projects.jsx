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
      version: "v2.0",
    },
    {
      title: "Learning Management System (LMS)",
      description:
        "A robust Learning Management System featuring role-based access (Admin, Instructor, Student) and secure JWT authentication. Empowering instructors to curate multimedia courses (Video, PDF) while enabling students to enroll and track progress. Built with React, Tailwind, and SQL, leveraging AWS S3 for content storage and deployed on Render/Netlify for high availability.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "MySQL",
        "AWS S3",
        "Render",
        "Netlify",
      ],
      githubLink: "https://github.com/rachitsharma300/LMS",
      liveLink: "https://learnprofessional.netlify.app/",
      videoUrl:
        "https://github.com/user-attachments/assets/baa2f9f0-0512-4c1d-b25d-61c23470e59c",
      version: "v1.0",
    },
    {
      title: "Dynamic Online Shopping",
      description:
        "A comprehensive E-Commerce application delivering a seamless shopping experience with secure Razorpay integration. Features include role-based access (Admin/Customer), dynamic product catalogs, cart management, and real-time order tracking. Built with a scalable Spring Boot backend and a responsive React + Tailwind frontend, deployed on Render and Netlify.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Spring Boot",
        "MySQL",
        "Razorpay",
        "Spring Security",
        "JWT",
        "Swagger",
        "JUnit",
        "Render",
        "Netlify",
      ],
      githubLink: "https://github.com/rachitsharma300/DOS",
      liveLink: "https://dynamic-online-shopping.netlify.app/",
      videoUrl: "https://github.com/user-attachments/assets/9abb194a-36b3-4e09-96eb-3e4fdc9d243d",
      version: "v1.0",
    },
    {
      title: "StayEase Hotel Booking System",
      description:
        "A comprehensive hotel booking platform simulating real-world portals like Booking.com. Features secure role-based authentication (JWT), advanced hotel search with date filtering, real-time room availability tracking, and seamless Razorpay payment integration. Includes a powerful admin dashboard for managing properties, bookings, and users. Built with a scalable Spring Boot backend and a modern React + Tailwind frontend.",
      tags: [
        "React.js",
        "Tailwind CSS",
        "Spring Boot",
        "MySQL",
        "Spring Data JPA",
        "Spring Security",
        "JWT",
        "Razorpay",
        "Render",
        "Netlify",
      ],
      githubLink: "https://github.com/rachitsharma300/StayEase",
      liveLink: "https://stay-ease-hms.netlify.app/",
      videoUrl:
        "https://github.com/user-attachments/assets/6748bef8-d791-4b2d-99fa-ac3488b0c1b1",
      version: "v1.0",
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
      version: "v1.5",
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
      version: "v1.0",
    },
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gray-50 dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent inline-block">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of technical craftsmanship and creative problem-solving.
          </p>
        </motion.div>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
