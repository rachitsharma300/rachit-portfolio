import { motion } from 'framer-motion';
import { FaJava, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiGit, SiPostgresql, SiMongodb, SiSpringboot } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: <FaReact className="text-blue-500" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: 'HTML5', icon: <span className="text-orange-500">{"</>"}</span> },
        { name: 'CSS3', icon: <span className="text-blue-400">#</span> }
      ],
      color: 'border-blue-200 dark:border-blue-900/50'
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
        { name: 'Spring Boot', icon: <SiSpringboot className="text-green-500" /> },
        { name: 'REST API', icon: <TbApi className="text-purple-500" /> },
        { name: 'JWT/OAuth', icon: <span className="text-red-400">🔐</span> }
      ],
      color: 'border-green-200 dark:border-green-900/50'
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <FaJava className="text-red-500" /> },
        { name: 'Python', icon: <FaPython className="text-blue-600" /> },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> }
      ],
      color: 'border-purple-200 dark:border-purple-900/50'
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
        { name: 'Git', icon: <SiGit className="text-orange-500" /> },
        { name: 'Linux', icon: <span className="text-yellow-600">🐧</span> }
      ],
      color: 'border-amber-200 dark:border-amber-900/50'
    }
  ];

  const proficiencyData = [
    { skill: 'Java/Spring', level: 90, color: 'bg-red-500' },
    { skill: 'React', level: 85, color: 'bg-blue-500' },
    { skill: 'Node.js', level: 80, color: 'bg-green-500' },
    { skill: 'MongoDB', level: 75, color: 'bg-green-600' },
    { skill: 'Python', level: 70, color: 'bg-blue-600' }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-3">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I've worked with and mastered throughout my development journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-xl border ${category.color} bg-white dark:bg-dark-800 p-5 shadow-sm hover:shadow-md transition-shadow`}
            >
              <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200 mb-4 flex items-center">
                <span className="mr-2 text-xl">{category.icon || '💻'}</span>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center px-4 py-2 rounded-lg bg-gray-50 dark:bg-dark-700"
                  >
                    <div className="mr-3 text-xl">{skill.icon}</div>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compact Proficiency Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-sm max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center">
            Core Skill Proficiency
          </h3>
          <div className="space-y-4">
            {proficiencyData.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="w-32 text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  {item.skill}
                </span>
                <div className="flex-1 flex items-center">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-1.5 mr-3">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-1.5 rounded-full ${item.color}`}
                    />
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400 w-8">
                    {item.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;