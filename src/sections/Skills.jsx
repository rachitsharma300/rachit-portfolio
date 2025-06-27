import { motion } from 'framer-motion';
import { FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiTailwindcss, SiGit } from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      name: 'Java',
      icon: <FaJava className="text-red-500" />,
      level: 'Advanced'
    },
    {
      name: 'Spring Boot',
      icon: <SiSpringboot className="text-green-500" />,
      level: 'Intermediate'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript className="text-yellow-500" />,
      level: 'Intermediate'
    },
    {
      name: 'React',
      icon: <FaReact className="text-blue-500" />,
      level: 'Intermediate'
    },
    {
      name: 'SQL Databases',
      icon: <FaDatabase className="text-gray-500" />,
      level: 'Intermediate'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-cyan-500" />,
      level: 'Intermediate'
    },
    {
      name: 'Git',
      icon: <SiGit className="text-orange-500" />,
      level: 'Intermediate'
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've worked with and my proficiency level
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-2">
                {skill.name}
              </h3>
              <div className="flex justify-center">
                <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  {skill.level}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;