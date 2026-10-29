"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-full aspect-[4/3] md:h-[420px] bg-gray-100 dark:bg-gray-800 rounded-3xl relative overflow-hidden shadow-2xl bg-cover bg-center border border-gray-100 dark:border-gray-800"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80')",
                            }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/25 to-black/40"></div>
                            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl">
                                        high_quality
                                    </span>
                                    <div>
                                        <p className="text-xs text-gray-300">Target Output</p>
                                        <p className="text-sm font-bold">4K Ultra HD @ 60 FPS</p>
                                    </div>
                                </div>
                                <span className="text-xs bg-primary px-3 py-1 rounded-full font-bold">
                                    GPU Accelerated
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
                            <span>High-Performance Media Engine</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-[#131118] dark:text-white mb-6 tracking-tight leading-tight">
                            Engineered for Creators, Editors &amp; Storytellers
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
                            High-definition video production shouldn&apos;t require bulky desktop workstations or hours of rendering. Video Editor brings cutting-edge AI upscaling, high-ratio compression, speed ramping, and audio extraction into an intuitive, seamless mobile and web experience.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "AI-driven super-resolution upscaling from HD to 2K & 4K.",
                                "Smart video compression saving up to 80% space without visible quality loss.",
                                "Built-in media history with instant, full data download and export rights."
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.15 * index }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">
                                        verified
                                    </span>
                                    <span className="text-gray-700 dark:text-gray-200 text-sm sm:text-base font-medium">
                                        {item}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
