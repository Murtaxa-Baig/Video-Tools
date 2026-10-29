"use client";

import { motion } from "framer-motion";

const values = [
    {
        title: "Uncompromised Quality",
        description: "Compressing video sizes by up to 80% while retaining crisp focal details, vivid colors, and smooth frame rates.",
        icon: "high_quality",
    },
    {
        title: "Neural Super-Resolution",
        description: "Pushing the frontiers of AI upscaling to transform standard HD footage into genuine 2K and 4K ultra-high definition.",
        icon: "auto_fix_high",
    },
    {
        title: "Absolute Media Privacy",
        description: "Your videos belong entirely to you. We never train public models with your uploads, and you can download all your data anytime.",
        icon: "verified_user",
    },
    {
        title: "Blazing GPU Speed",
        description: "Engineered with turbo-accelerated cloud rendering queues for instantaneous compression, speed ramps, and audio extraction.",
        icon: "bolt",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Values() {
    return (
        <section className="py-24 bg-background-light dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
                        <span>What Drives Us</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#131118] dark:text-white">
                        Our Core Values
                    </h2>
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -6, boxShadow: "0 12px 24px -6px rgba(255, 102, 0, 0.15)" }}
                            className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-2xl">
                                    {value.icon}
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-[#131118] dark:text-white mb-2">
                                {value.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
