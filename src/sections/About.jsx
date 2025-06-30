import { motion } from "framer-motion";
import profilePhoto from "../assets/Rachit.png";

const About = () => {
  const technologies = [
    {
      icon: (
        <img
          src="https://techstack-generator.vercel.app/java-icon.svg"
          alt="Java"
          width="65"
          height="65"
        />
      ),
      name: "Java",
    },
    {
      icon: (
        <img
          src="https://techstack-generator.vercel.app/js-icon.svg"
          alt="JavaScript"
          width="65"
          height="65"
        />
      ),
      name: "JavaScript",
    },
    {
      icon: (
        <img
          src="https://techstack-generator.vercel.app/react-icon.svg"
          alt="React"
          width="65"
          height="65"
        />
      ),
      name: "React",
    },
    {
      icon: (
        <img
          src="https://techstack-generator.vercel.app/docker-icon.svg"
          alt="Docker"
          width="65"
          height="65"
        />
      ),
      name: "Docker",
    },
    {
      icon: (
        <img
          src="https://techstack-generator.vercel.app/github-icon.svg"
          alt="GitHub"
          width="65"
          height="65"
        />
      ),
      name: "GitHub",
    },
    {
      icon: (
        <img
          src="https://techstack-generator.vercel.app/mysql-icon.svg"
          alt="MySQL"
          width="65"
          height="65"
        />
      ),
      name: "MySQL",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Full Stack Java Developer passionate about building robust
            applications
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative group"
            >
              <img
                src={profilePhoto}
                alt="Rachit Sharma"
                className="rounded-xl w-full max-w-xs border-4 border-white dark:border-dark-700 shadow-xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Java Full Stack Developer
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
              <p>
                I specialize in building robust enterprise applications using
                Java, Spring Boot, and modern JavaScript frameworks. My focus is
                on developing efficient, scalable, and well architected
                solutions that align with business goals.
              </p>
              <p>
                With experience across the full development stack, I bridge the
                gap between strong backend systems and intuitive frontend
                interfaces to deliver seamless user experiences
              </p>
              <p>
                I believe in writing clean, maintainable code and continuously
                enhancing my skills to stay updated with evolving technologies.
                I am committed to building high-quality software solutions that
                create real impact.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-6 text-center">
                Technologies I Work With
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300,
                    }}
                    viewport={{ once: true }}
                    className="relative group"
                    title={tech.name}
                  >
                    <div className="p-1 rounded-lg ">{tech.icon}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
