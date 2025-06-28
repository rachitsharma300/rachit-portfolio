// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaJava, FaReact, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiGit, SiPostgresql, SiMongodb } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'DOM', 'Tailwind CSS', 'Unit Test'],
      icon: '💻'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'REST API', 'JWT/OAuth'],
      icon: '⚙️'
    },
    {
      title: 'Languages',
      skills: ['Java', 'JavaScript', 'Python', 'C'],
      icon: '📝'
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'Linux', 'Vercel'],
      icon: '🧰'
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL'],
      icon: '🗄️'
    }
  ];

  const getIcon = (skill) => {
    switch(skill) {
      case 'Java': return <FaJava className="text-red-500" />;
      case 'React': return <FaReact className="text-blue-400" />;
      case 'JavaScript': return <SiJavascript className="text-yellow-500" />;
      case 'Tailwind CSS': return <SiTailwindcss className="text-cyan-500" />;
      case 'Git': return <SiGit className="text-orange-500" />;
      case 'Node.js': return <FaNodeJs className="text-green-600" />;
      case 'Python': return <FaPython className="text-blue-800" />;
      case 'PostgreSQL': return <SiPostgresql className="text-blue-700" />;
      case 'MongoDB': return <SiMongodb className="text-green-700" />;
      default: return <span>{skill.charAt(0)}</span>;
    }
  };

  return (
    <section id="skills" className="py-12 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">My Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 mb-4"></div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-full sm:w-[45%] lg:w-[30%] bg-white dark:bg-dark-700 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="flex items-center p-3 bg-gray-100 dark:bg-dark-600">
                <span className="text-xl mr-2">{category.icon}</span>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
              </div>
              <div className="p-4 flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center px-3 py-1.5 rounded-full bg-gray-50 dark:bg-dark-600 text-sm"
                  >
                    <span className="mr-2 text-lg">{getIcon(skill)}</span>
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;