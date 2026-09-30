"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center lg:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-6 border border-primary/20">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span>AI Chat &middot; (project-716448996918)</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-[#131118] dark:text-white leading-[1.1] mb-6 tracking-tight">
                        Generate Human-Like AI Content in Seconds
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                        Empower your writing with our suite of advanced AI tools designed
                        for students, professionals, and creatives. Experience the future of
                        content generation.
                    </p>
                   {/* <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="brand-gradient brand-gradient-hover text-white font-bold py-4 px-10 rounded-lg text-lg transition-all shadow-lg"
                        >
                            Get Started Free
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                        >
                            Learn More
                        </motion.button>
                    </div> */}
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex-1 w-full"
                >
                    <div className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-brand-pink/5 flex items-center justify-center p-8">
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-full h-full bg-cover bg-center rounded-xl shadow-inner border border-white/20"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB86QxfJFKhCim1Kh_WeVLZ7FWPJA1abHoH9RE3Mv8b0u-lEXf01c8xQ_lA7Nk6wR7F31i0QbGAiVTRu_UIOGrdk3vpzHWdPOdLrYUgypnvE4BABKSJhgrHmdGi-l_8Np91pDxOhOogy6nb4ktJPpBSN42F9Qj8-4tIg1f30uyfgNHJHtYrnGgKF64zDJsUz_5DKqDZ5gJC3fAlHgellbfNrg_HfTk940FR8dZZm2teAWTMPgwP740EbFFMd1B1WsLra63ZvnOptsTW')",
                            }}
                        ></motion.div>
                       {/* <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl flex items-center gap-3 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                                <span className="material-symbols-outlined text-green-600 dark:text-green-400">
                                    check_circle
                                </span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    AI Detection Score
                                </p>
                                <p className="font-bold text-[#131118] dark:text-white">
                                    99.9% Human-Like
                                </p>
                            </div>
                        </motion.div> */}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
