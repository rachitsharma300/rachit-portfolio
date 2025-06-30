import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-xl" />,
      url: "https://github.com/rachitsharma300",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/rachitsharma300/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-xl" />,
      url: "https://x.com/rachitsharma300",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-xl" />,
      url: "mailto:rachitsharma300@outlook.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section - Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-2xl font-bold flex items-center">
              {/* Left bracket - rotates clockwise */}
              <span className="text-blue-500 inline-block origin-center animate-spin-slow">
                {"<"}
              </span>

              {/* Name - static */}
              <span className="mx-1">Rachit</span>

              {/* Right bracket - rotates counter-clockwise */}
              <span className="text-blue-500 inline-block origin-center animate-spin-slow-reverse">
                {"/>"}
              </span>
            </h2>
            <p className="text-gray-400 mt-2">Java Full Stack Developer</p>
          </motion.div>

          {/* Right Section - Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 hover:bg-blue-600 text-white p-3 rounded-full transition"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className=" border-gray-800 mt-4 pt-4 text-center text-gray-400"
        >
          <p>
            &copy; {new Date().getFullYear()} Rachit Sharma. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
