import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiJavascript } from 'react-icons/si';
import profilePhoto from '../assets/Rachit.png';

const About = () => {
  const technologies = [
    { name: 'Java', icon: <FaJava className="text-red-500" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'SQL Databases', icon: <FaDatabase className="text-gray-500" /> },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here's my story and what drives me as a developer
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="bg-gray-100 dark:bg-dark-700 rounded-xl p-2 shadow-lg overflow-hidden"
            >
              <img 
                src={profilePhoto}
                alt="Rachit Sharma"
                className="rounded-lg w-full max-w-xs mx-auto object-cover hover:shadow-xl transition-all duration-300"
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
                I'm a passionate full stack developer specializing in Java and modern web technologies. 
                Currently enhancing my skills through a comprehensive Java Full Stack Development course.
              </p>
              <p>
                My journey in programming began with a fascination for problem-solving and creating 
                efficient solutions. This led me to pursue full stack development where I can bring 
                ideas to life from database to UI.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open 
                source projects, or solving coding challenges.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4">Technologies I Work With:</h4>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gray-100 dark:bg-dark-700 px-4 py-2 rounded-lg transition-colors duration-300"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-gray-800 dark:text-gray-200">{tech.name}</span>
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