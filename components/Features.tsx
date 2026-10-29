"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Video Compression",
        description:
            "Reduce large video sizes by up to 80% with next-gen encoders without compromising visual clarity.",
        icon: "fit_screen",
        tag: "Lossless Quality",
    },
    {
        title: "AI Video Enhancement",
        description:
            "Harness neural networks to restore blurry footage, reduce digital noise, and balance dynamic lighting.",
        icon: "auto_fix_high",
        tag: "AI Powered",
    },
    {
        title: "HD to 2K & 4K Upscaling",
        description:
            "Transform standard 720p and 1080p high-definition footage into razor-sharp 2K and 4K ultra-high resolution.",
        icon: "high_quality",
        tag: "Ultra HD",
    },
    {
        title: "Video Speed Controller",
        description:
            "Speed up videos up to 10x for dynamic time-lapses, tutorials, or highlights with frame-accurate precision.",
        icon: "speed",
        tag: "Fast & Smooth",
    },
    {
        title: "High-Fidelity Audio Extractor",
        description:
            "Separate background scores, dialogue, or sound effects from any video into crystal-clear MP3, WAV, or AAC.",
        icon: "audiotrack",
        tag: "Instant Extract",
    },
    {
        title: "Extracted Media History",
        description:
            "Automatically log and organize every processed video, enhanced clip, and extracted audio track in your library.",
        icon: "video_library",
        tag: "Organized Library",
    },
    {
        title: "Full Data Export & Download",
        description:
            "You own your media. Download all your processed videos, extracted audio files, and metadata in one click.",
        icon: "cloud_download",
        tag: "100% Data Control",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Features() {
    return (
        <section
            id="features"
            className="bg-white dark:bg-gray-900/60 py-24 border-y border-gray-100 dark:border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
                        <span>Powerful Core Utilities</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#131118] dark:text-white mb-4 tracking-tight">
                        Everything You Need to Perfect Your Videos
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                        From instant compression and AI upscaling to audio extraction and complete data control — all in one unified workspace.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -6, boxShadow: "0 16px 30px -10px rgba(255, 102, 0, 0.18)" }}
                            className="feature-card border border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-800/40 p-8 rounded-2xl transition-all duration-300 relative group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 group-hover:brand-gradient group-hover:text-white transition-all duration-300 shadow-sm">
                                        <span className="material-symbols-outlined text-3xl">
                                            {feature.icon}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700/60">
                                        {feature.tag}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-[#131118] dark:text-white mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center gap-1.5 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Learn more</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </div>
                        </motion.div>
                    ))}

                    {/* Bonus Feature Highlight Card */}
                    <motion.div
                        variants={itemVariants}
                        className="feature-card brand-gradient text-white p-8 rounded-2xl shadow-xl flex flex-col justify-between lg:col-span-2 relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <span className="text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white inline-block mb-4">
                                Complete Ownership
                            </span>
                            <h3 className="text-2xl font-black mb-3">
                                Your Media, Always in Your Hands
                            </h3>
                            <p className="text-white/90 text-sm max-w-xl leading-relaxed mb-6">
                                We believe in total data transparency. Every video you compress, upscale to 4K, or enhance is logged in your history and ready for one-click bulk export. We never use your videos for public AI training.
                            </p>
                        </div>
                        <div className="relative z-10 flex flex-wrap gap-4 text-xs font-bold">
                            <span className="bg-black/20 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm">lock</span>
                                End-to-End Encryption
                            </span>
                            <span className="bg-black/20 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm">cloud_download</span>
                                Instant Zip Export
                            </span>
                            <span className="bg-black/20 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/20 flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-sm">delete_forever</span>
                                One-Click Purge
                            </span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
