// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { FaCertificate, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    id: "EnS6Qap2781571j740",
    title: "HTML & CSS",
    issuer: "GUVI",
    date: "June 2025",
    link: "https://www.guvi.in/share-certificate/EnS6Qap2781571j740",
    skills: ["HTML5", "CSS3", "Responsive Design"],
  },
  {
    id: "H57k6659AU51MnP998",
    title: "DSA with JAVA",
    issuer: "GUVI",
    date: "June 2025",
    link: "https://www.guvi.in/share-certificate/H57k6659AU51MnP998",
    skills: ["Problem Solving", "Logic"],
  },
  {
    id: "JY4W34O75461MdD01Z",
    title: "JAVASCRIPT",
    issuer: "GUVI",
    date: "2025",
    link: "https://www.guvi.in/share-certificate/JY4W34O75461MdD01Z",
    skills: ["Scripting"],
  },
  {
    id: "Y48F1W850h7m515B8A",
    title: "AWS",
    issuer: "GUVI",
    date: "2025",
    link: "https://www.guvi.in/share-certificate/Y48F1W850h7m515B8A",
    skills: ["EC2", "Route 53", "AWS Amplify", "S3"],

  },
  {
    id: "Coming Soon",
    title: "SYSTEM DESIGN",
    issuer: "GUVI",
    date: "2025",
    link: "https://www.guvi.in/",
    skills: [""],
  },
  {
    id: "0Kc2Ww1C6s412474u1",
    title: "CHAT GPT",
    issuer: "GUVI",
    date: "April 2025",
    link: "https://www.guvi.in/share-certificate/0Kc2Ww1C6s412474u1",
    skills: ["Code Assistance", "Prompt Engg", "Content Generation"],
  },
  {
    id: "Coming Soon",
    title: "AGILE FUNDAMENTALS",
    issuer: "GUVI",
    date: "2025",
    link: "https://www.guvi.in/",
    skills: [""],
  },
];

export default function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed left-4 bottom-4 z-50">
      {/* Collapsed Button */}
      {!isExpanded && (
        <motion.a
          href="#" // Remove if using button
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(true)}
          className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-dark-700 px-6 py-3 rounded-lg font-medium transition"
        >
          <FaCertificate className="text-lg" />
          Certificates
        </motion.a>
      )}

      {/* Expanded Panel */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white dark:bg-dark-900 w-[90vw] max-w-md rounded-xl shadow-2xl border border-gray-200 dark:border-dark-700"
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-dark-700">
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">
              My Certifications
            </h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-4 max-h-[70vh] overflow-y-auto space-y-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-dark-800 p-4 rounded-lg border border-gray-200 dark:border-dark-700"
              >
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">
                        {index + 1}
                      </span>
                    </div>
                    {index !== certifications.length - 1 && (
                      <div className="w-px h-full bg-gray-300 dark:bg-gray-600 my-1"></div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-gray-200">
                          {cert.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {cert.issuer} • {cert.date}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                          ID: {cert.id}
                        </p>
                      </div>
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                          title="View certificate"
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </div>

                    <div className="mt-2 flex flex-wrap gap-1">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
