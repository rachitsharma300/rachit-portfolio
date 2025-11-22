// import { motion, useInView } from "framer-motion";
// import { useEffect, useState, useRef } from "react";
// import { FaCode, FaProjectDiagram, FaGithub, FaClock } from "react-icons/fa";

// const QuickStats = () => {
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });

//     const stats = [
//         {
//             icon: <FaProjectDiagram className="text-4xl" />,
//             label: "Projects Completed",
//             value: 8,
//             suffix: "+",
//             color: "from-blue-600 to-blue-400",
//             bgColor: "bg-blue-50 dark:bg-blue-900/20",
//         },
//         {
//             icon: <FaGithub className="text-4xl" />,
//             label: "GitHub Commits",
//             value: 500,
//             suffix: "+",
//             color: "from-purple-600 to-purple-400",
//             bgColor: "bg-purple-50 dark:bg-purple-900/20",
//         },
//         {
//             icon: <FaCode className="text-4xl" />,
//             label: "Technologies Mastered",
//             value: 15,
//             suffix: "+",
//             color: "from-green-600 to-green-400",
//             bgColor: "bg-green-50 dark:bg-green-900/20",
//         },
//         {
//             icon: <FaClock className="text-4xl" />,
//             label: "Years of Coding",
//             value: 3,
//             suffix: "+",
//             color: "from-orange-600 to-orange-400",
//             bgColor: "bg-orange-50 dark:bg-orange-900/20",
//         },
//     ];

//     const Counter = ({ value, suffix, duration = 2000 }) => {
//         const [count, setCount] = useState(0);

//         useEffect(() => {
//             if (!isInView) return;

//             let startTime;
//             let animationFrame;

//             const animate = (currentTime) => {
//                 if (!startTime) startTime = currentTime;
//                 const progress = (currentTime - startTime) / duration;

//                 if (progress < 1) {
//                     setCount(Math.floor(value * progress));
//                     animationFrame = requestAnimationFrame(animate);
//                 } else {
//                     setCount(value);
//                 }
//             };

//             animationFrame = requestAnimationFrame(animate);

//             return () => {
//                 if (animationFrame) {
//                     cancelAnimationFrame(animationFrame);
//                 }
//             };
//         }, [isInView, value, duration]);

//         return (
//             <span className="text-4xl md:text-5xl font-bold">
//                 {count}
//                 {suffix}
//             </span>
//         );
//     };

//     return (
//         <section
//             ref={ref}
//             className="py-16 bg-white dark:bg-dark-900 transition-colors duration-300"
//         >
//             <div className="container mx-auto px-4">
//                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//                     {stats.map((stat, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5, delay: index * 0.1 }}
//                             viewport={{ once: true }}
//                             whileHover={{ scale: 1.05, y: -5 }}
//                             className={`${stat.bgColor} rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-dark-700`}
//                         >
//                             <motion.div
//                                 initial={{ scale: 0 }}
//                                 whileInView={{ scale: 1 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
//                                 viewport={{ once: true }}
//                                 className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}
//                             >
//                                 {stat.icon}
//                             </motion.div>

//                             <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
//                                 <Counter value={stat.value} suffix={stat.suffix} />
//                             </div>

//                             <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
//                                 {stat.label}
//                             </p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default QuickStats;
