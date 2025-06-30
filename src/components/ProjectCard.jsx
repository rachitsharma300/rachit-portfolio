// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  tags = [],
  githubLink,
  liveLink,
  videoUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      viewport={{ once: true }}
      className="h-full bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-dark-700 cursor-pointer"
    >
      {/* Video or Image Placeholder */}
      <div className="h-48 bg-gray-100 dark:bg-dark-700 overflow-hidden">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            className="w-full h-full"
            frameBorder="0"
            allowFullScreen
            title={title}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 p-4 text-center">
              {title}
            </h3>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FiGithub className="mr-1" /> Code
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <FiExternalLink className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
