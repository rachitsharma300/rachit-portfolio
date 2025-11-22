import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaAward, FaCheckCircle } from "react-icons/fa";

const certifications = [
  {
    id: "EnS6Qap2781571j740",
    title: "HTML & CSS",
    issuer: "GUVI",
    date: "June 2025",
    link: "https://www.guvi.in/share-certificate/EnS6Qap2781571j740",
    skills: ["HTML5", "CSS3", "Responsive Design"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "H57k6659AU51MnP998",
    title: "DSA with JAVA",
    issuer: "GUVI",
    date: "June 2025",
    link: "https://www.guvi.in/share-certificate/H57k6659AU51MnP998",
    skills: ["Problem Solving", "Logic", "Algorithms"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "JY4W34O75461MdD01Z",
    title: "JAVASCRIPT",
    issuer: "GUVI",
    date: "2025",
    link: "https://www.guvi.in/share-certificate/JY4W34O75461MdD01Z",
    skills: ["ES6+", "DOM Manipulation", "Async/Await"],
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: "Y48F1W850h7m515B8A",
    title: "AWS Cloud Practitioner",
    issuer: "GUVI",
    date: "2025",
    link: "https://www.guvi.in/share-certificate/Y48F1W850h7m515B8A",
    skills: ["EC2", "S3", "Cloud Security", "Amplify"],
    gradient: "from-orange-400 to-amber-600",
  },
  {
    id: "Y71734xG6H3A7r36j4",
    title: "System Design",
    issuer: "GUVI",
    date: "November 2025",
    link: "https://www.guvi.in/share-certificate/Y71734xG6H3A7r36j4",
    skills: ["Scalability", "Microservices", "Architecture", "Distributed Systems"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "Coming Soon 2",
    title: "Agile Fundamentals",
    issuer: "GUVI",
    date: "In Progress",
    link: "https://www.guvi.in/",
    skills: ["Scrum", "Kanban", "Project Management"],
    gradient: "from-indigo-400 to-purple-600",
    isPending: true,
  },
  {
    id: "0Kc2Ww1C6s412474u1",
    title: "ChatGPT & AI Tools",
    issuer: "GUVI",
    date: "April 2025",
    link: "https://www.guvi.in/share-certificate/0Kc2Ww1C6s412474u1",
    skills: ["Prompt Engineering", "AI Integration"],
    gradient: "from-teal-400 to-emerald-600",
  }
];

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-dark-700 flex flex-col h-full"
    >
      {/* Top Gradient Banner */}
      <div className={`h-2 bg-gradient-to-r ${cert.gradient}`} />

      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {cert.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Issued by {cert.issuer}
              </span>
              {!cert.isPending && (
                <FaCheckCircle className="text-blue-500 text-xs" title="Verified" />
              )}
            </div>
          </div>
          <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.gradient} bg-opacity-10 text-white shadow-md`}>
            <FaAward className="text-xl" />
          </div>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {cert.skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-semibold rounded-md bg-gray-50 dark:bg-dark-700 text-gray-600 dark:text-gray-300 border border-gray-100 dark:border-dark-600"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-dark-700 flex justify-between items-center">
          <span className="text-xs font-mono text-gray-400 dark:text-gray-500">
            {cert.date}
          </span>

          {!cert.isPending ? (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Verify Credential <FaExternalLinkAlt className="text-xs" />
            </a>
          ) : (
            <span className="text-xs font-bold text-amber-500 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">
              In Progress
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent inline-block">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Continuous learning and validation of my technical skills through industry-recognized certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
