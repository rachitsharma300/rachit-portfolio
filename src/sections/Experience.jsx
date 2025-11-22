import { motion } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

const Experience = () => {
    const journeyData = [
        {
            year: "2015",
            title: "Matriculation (10th Standard)",
            organization: "BSEB Board",
            description: "Completed matriculation with 70%",
            type: "education",
            icon: FaGraduationCap,
            color: "from-emerald-500 to-teal-500",
            bgGlow: "bg-emerald-500/20",
        },
        {
            year: "2015-2018",
            title: "Diploma in Civil Engineering",
            organization: "Government Polytechnic Manesar, Gurugram",
            description: "Completed diploma in Civil Engineering with 65%, building foundation in technical education",
            type: "education",
            icon: FaGraduationCap,
            color: "from-green-500 to-emerald-500",
            bgGlow: "bg-green-500/20",
        },
        {
            year: "2019",
            title: "Career Transition & Exploration",
            organization: "Self-Directed Learning",
            description: "Prepared for JE government exams while taking on part-time jobs. Explored career opportunities and discovered passion for software development",
            type: "milestone",
            icon: FaCode,
            color: "from-amber-500 to-orange-500",
            bgGlow: "bg-amber-500/20",
        },
        {
            year: "2020-2023",
            title: "B. Tech, Computer Science",
            organization: "GRD Institute of Management & Technology, Dehradun",
            description: "Graduated with Honours - 76.4%. Specialized in full-stack development, data structures, and software engineering",
            type: "education",
            icon: FaGraduationCap,
            color: "from-blue-500 to-cyan-500",
            bgGlow: "bg-blue-500/20",
        },
        {
            year: "Jul 2023 - Apr 2024",
            title: "Software Developer Intern",
            organization: "Soft Wind Technology, Faridabad",
            description: "Developed and maintained full-stack features for e-commerce platforms using Java, Spring Boot, and React.js. Optimized performance and enhanced user experience in a fast-paced startup environment",
            type: "work",
            icon: FaBriefcase,
            color: "from-violet-500 to-purple-500",
            bgGlow: "bg-violet-500/20",
        },
        {
            year: "May-Jun 2025",
            title: "Freelance Full Stack Developer",
            organization: "Jagdamba Nursing Health Care",
            description: "Built comprehensive healthcare platform with patient care modules and real-time notification system using Firebase. Delivered scalable solutions for healthcare management",
            type: "freelance",
            icon: FaLaptopCode,
            color: "from-pink-500 to-rose-500",
            bgGlow: "bg-pink-500/20",
        },
        {
            year: "Jul 2025",
            title: "Freelance Web Developer",
            organization: "Perfect Swasth Healthcare",
            description: "Developed static website showcasing medicines, company details, and order tracking features with modern UI/UX design",
            type: "freelance",
            icon: FaLaptopCode,
            color: "from-fuchsia-500 to-pink-500",
            bgGlow: "bg-fuchsia-500/20",
        },
    ];

    return (
        <section
            id="experience"
            className="py-20 bg-white dark:bg-dark-900 transition-colors duration-300 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block mb-4"
                    >
                        <div className="text-6xl">🚀</div>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                        My Journey
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        From civil engineering to full-stack development - A story of transformation, learning, and growth
                    </p>
                </motion.div>

                {/* Journey Timeline */}
                <div className="max-w-5xl mx-auto">
                    {journeyData.map((item, index) => {
                        const Icon = item.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="relative mb-16 last:mb-0"
                            >
                                {/* Connector Line */}
                                {index < journeyData.length - 1 && (
                                    <div className="absolute left-8 md:left-1/2 top-24 md:top-32 w-0.5 h-16 md:h-24 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transform md:-translate-x-1/2 z-0"></div>
                                )}

                                <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                                    {/* Content Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-1 w-full"
                                    >
                                        <div className="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-dark-700 overflow-hidden">
                                            {/* Gradient overlay on hover */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                {/* Year Badge */}
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className={`inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white font-bold text-sm shadow-lg`}
                                                >
                                                    {item.year}
                                                </motion.div>

                                                {/* Title */}
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                                                    {item.title}
                                                </h3>

                                                {/* Organization */}
                                                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 flex items-center gap-2">
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                                    </svg>
                                                    {item.organization}
                                                </p>

                                                {/* Description */}
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    {item.description}
                                                </p>

                                                {/* Type Badge */}
                                                <div className="mt-4 inline-block">
                                                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.bgGlow} bg-opacity-50 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-dark-600`}>
                                                        {item.type === 'education' && '🎓 Education'}
                                                        {item.type === 'work' && '💼 Work Experience'}
                                                        {item.type === 'freelance' && '💻 Freelance'}
                                                        {item.type === 'milestone' && '🎯 Milestone'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Decorative corner */}
                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-bl-full`}></div>
                                        </div>
                                    </motion.div>

                                    {/* Icon Circle */}
                                    <div className="relative flex-shrink-0 z-10">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
                                            viewport={{ once: true }}
                                            whileHover={{ scale: 1.15, rotate: 360 }}
                                            className="relative"
                                        >
                                            {/* Outer glow ring */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full blur-xl opacity-40 animate-pulse`}></div>

                                            {/* Main icon circle */}
                                            <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-2xl border-4 border-white dark:border-dark-900`}>
                                                <Icon className="text-2xl md:text-3xl text-white" />
                                            </div>

                                            {/* Pulsing ring */}
                                            <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} animate-ping opacity-20`}></div>
                                        </motion.div>
                                    </div>

                                    {/* Spacer for alignment on desktop */}
                                    <div className="hidden md:block flex-1"></div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer - Journey Continues */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-20"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-block"
                    >
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30"></div>
                            <FaRocket className="relative text-6xl md:text-7xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent" />
                        </div>
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mt-6 mb-3">
                        The Journey Continues...
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Always learning, always growing, always building something amazing
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
