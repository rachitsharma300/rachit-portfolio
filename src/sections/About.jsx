import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import profilePhoto1 from "../assets/Rachit.png";
import profilePhoto2 from "../assets/Rachit2.png";

const About = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // First flip (show backside)
        await controls.start({ 
          rotateY: 180,
          transition: { duration: 1.5, ease: "easeInOut" } 
        });
        // Pause on backside
        await new Promise(resolve => setTimeout(resolve, 2000));
        // Second flip (show second photo)
        await controls.start({ 
          rotateY: 360,
          transition: { duration: 1.5, ease: "easeInOut" } 
        });
        // Pause on second photo
        await new Promise(resolve => setTimeout(resolve, 3000));
        // Reset to first photo
        await controls.start({ 
          rotateY: 0,
          transition: { duration: 0 } // Instant reset
        });
      }
    };
    sequence();
  }, [controls]);

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
            Full Stack Java Developer passionate about building robust applications
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative h-[450px] w-[350px] perspective-1000">
              <motion.div
                className="relative w-full h-full preserve-3d"
                animate={controls}
              >
                {/* Front Side - First Photo */}
                <div className="absolute w-full h-full backface-hidden">
                  <img
                    src={profilePhoto1}
                    alt="Rachit Sharma"
                    className="w-full h-full object-cover rounded-xl border-4 border-white dark:border-dark-700 shadow-xl"
                  />
                </div>

                {/* Back Side - Developer Info */}
                <div 
                  className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center p-6 text-white text-center"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <div>
                    <h3 className="text-xl font-bold mb-2">Rachit Sharma</h3>
                    <p className="text-sm">Full Stack Developer</p>
                    <p className="text-xs mt-4">Specializing in Java & React</p>
                  </div>
                </div>

                {/* Second Photo (hidden until flipped) */}
                <div 
                  className="absolute w-full h-full backface-hidden"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <img
                    src={profilePhoto2}
                    alt="Rachit Sharma"
                    className="w-full h-full object-cover rounded-xl border-4 border-white dark:border-dark-700 shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>

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
                interfaces to deliver seamless user experiences.
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
                    <div className="p-1 rounded-lg">{tech.icon}</div>
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