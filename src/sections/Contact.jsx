// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';

const Contact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {/* Collapsed Contact Button */}
      {!isExpanded && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsExpanded(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-xl"
          aria-label="Contact me"
        >
          <FaEnvelope className="text-xl" />
        </motion.button>
      )}

      {/* Expanded Contact Panel */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="bg-white dark:bg-dark-900 w-[90vw] max-w-md rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-dark-700"
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-dark-700">
            <h3 className="font-bold text-lg text-gray-800 dark:text-gray-200">Contact Me</h3>
            <button 
              onClick={() => setIsExpanded(false)}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-6 max-h-[70vh] overflow-y-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-800 dark:text-gray-200"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-800 dark:text-gray-200"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-dark-800 dark:text-gray-200"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
              >
                Send Message
              </button>
            </form>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-400">Gurugram, India</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-400">+91 9871874041</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 dark:text-blue-400" />
                <span className="text-gray-600 dark:text-gray-400">rachitsharma300@outlook.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Contact;