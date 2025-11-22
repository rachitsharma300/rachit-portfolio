import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white dark:from-dark-900 dark:to-dark-800"
        >
            <div className="text-center">
                {/* Animated Logo/Name */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 flex items-center justify-center">
                        <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="text-blue-600 dark:text-blue-400 inline-block"
                        >
                            {"<"}
                        </motion.span>
                        <span className="mx-2">Rachit</span>
                        <motion.span
                            animate={{ rotate: -360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="text-blue-600 dark:text-blue-400 inline-block"
                        >
                            {"/>"}
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Loading Bar */}
                <div className="w-64 h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden mx-auto mb-4">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                    />
                </div>

                {/* Loading Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-600 dark:text-gray-400 text-sm"
                >
                    Loading Portfolio...
                </motion.p>

                {/* Animated Dots */}
                <div className="flex justify-center gap-2 mt-4">
                    {[0, 1, 2].map((index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: index * 0.2,
                            }}
                            className="w-3 h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        />
                    ))}
                </div>

                {/* Circular Progress Indicator */}
                <motion.div
                    className="mt-8 mx-auto"
                    style={{ width: 100, height: 100 }}
                >
                    <svg viewBox="0 0 100 100" className="transform -rotate-90">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            className="text-gray-200 dark:text-dark-700"
                        />
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                            style={{
                                strokeDasharray: "283",
                                strokeDashoffset: 0,
                            }}
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#9333EA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
