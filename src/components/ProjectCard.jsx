import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink, FiLayers } from "react-icons/fi";
import { useRef } from "react";

const ProjectCard = ({
  title,
  description,
  tags = [],
  githubLink,
  liveLink,
  videoUrl,
  version,
  index,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        } gap-10 mb-24 items-center`}
    >
      {/* Visual Side */}
      <div className="w-full lg:w-3/5 group relative perspective-1000">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-gray-800 aspect-video transform transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1">
          {/* Version Badge */}
          {version && (
            <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 shadow-lg">
              {version}
            </div>
          )}

          {/* Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>

          {videoUrl ? (
            <video
              src={videoUrl}
              className="relative w-full h-full object-cover z-10 pointer-events-none"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 z-10">
              <h3 className="text-3xl font-bold text-white/20">{title}</h3>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 z-20 pointer-events-none" />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <motion.h3
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="h-1 w-20 bg-blue-600 rounded-full mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800/50"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4"
        >
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
            >
              <FiGithub className="text-xl" />
              <span>Code</span>
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:scale-105 shadow-lg"
            >
              <FiExternalLink className="text-xl" />
              <span>Live Demo</span>
            </a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
