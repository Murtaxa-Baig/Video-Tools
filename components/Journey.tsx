"use client";

import { motion } from "framer-motion";

const milestones = [
    {
        year: "2024",
        title: "The Genesis",
        description: "Built our first ultra-efficient compression engine to solve smartphone storage bottlenecks without losing video clarity.",
        icon: "rocket_launch",
    },
    {
        year: "2025",
        title: "AI Super-Resolution",
        description: "Rolled out proprietary neural upscaling models, enabling standard HD footage to transform directly into sharp 2K and 4K.",
        icon: "auto_fix_high",
    },
    {
        year: "2026",
        title: "The Complete Video Suite",
        description: "Launched cross-platform mobile apps featuring speed control, audio extraction, persistent media history, and complete data export.",
        icon: "public",
    },
];

export default function Journey() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
                        <span>Milestones</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#131118] dark:text-white">
                        Our Journey
                    </h2>
                </motion.div>
                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full timeline-line hidden md:block"></div>
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col md:flex-row items-center justify-between mb-24 last:mb-0"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`w-full md:w-[45%] text-center ${
                                    index % 2 === 0 ? "md:text-right" : "md:text-left order-2 md:order-3"
                                } order-2 mt-6 md:mt-0`}
                            >
                                <span className="text-primary font-bold text-sm mb-2 block">
                                    {milestone.year}
                                </span>
                                <h3 className="text-xl font-bold text-[#131118] dark:text-white mb-3">
                                    {milestone.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {milestone.description}
                                </p>
                            </motion.div>
                            <div className="w-12 h-12 rounded-full brand-gradient text-white flex items-center justify-center shadow-lg relative z-10 order-1 md:order-2">
                                <span className="material-symbols-outlined text-2xl">
                                    {milestone.icon}
                                </span>
                            </div>
                            <div className="w-full md:w-[45%] hidden md:block order-3"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
