"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative overflow-hidden hero-mesh py-24 md:py-32 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-6 border border-primary/20"
                    >
                        <span>About Video Tools</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-6xl md:text-7xl font-black text-[#131118] dark:text-white leading-[1.08] tracking-tight mb-8"
                    >
                        Reimagining Video Creation <br />
                        <span className="brand-text-gradient">&amp; Enhancement with AI</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.8 }}
                        className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
                    >
                        We&apos;re on a mission to democratize studio-grade video processing — making 4K upscaling, ultra-high compression, and audio extraction instant, private, and accessible to everyone.
                    </motion.p>
                </div>
            </div>
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.15, 0.25, 0.15]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary to-brand-pink blur-[120px] rounded-full"
                ></motion.div>
            </div>
        </section>
    );
}
