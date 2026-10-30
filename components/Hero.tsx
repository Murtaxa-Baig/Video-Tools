"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden hero-mesh py-16 md:py-24 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left text column */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-6 border border-primary/25">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span>All-in-One Video Processing Suite</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#131118] dark:text-white leading-[1.1] mb-6 tracking-tight">
                            Compress, Enhance &amp; Upscale Videos{" "}
                            <span className="brand-text-gradient">in Seconds</span>
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Compress large video files without losing visual clarity, restore blurry footage with AI, upscale from HD to crisp 4K, fine-tune playback speed, and extract studio-quality audio. All your processed media is securely saved in your personal history.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-10">
                            <Link
                                href="/#download"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="w-full sm:w-auto brand-gradient brand-gradient-hover text-white font-bold py-4 px-9 rounded-xl text-lg transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-2xl">download</span>
                                    <span>Download Video Tools</span>
                                </motion.button>
                            </Link>

                            <Link
                                href="/#features"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                <motion.button
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.96 }}
                                    className="w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[#131118] dark:text-white font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span className="material-symbols-outlined text-xl text-primary">auto_fix_high</span>
                                    <span>View All Features</span>
                                </motion.button>
                            </Link>
                        </div>

                        {/* Quick Trust Badges */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-500 dark:text-gray-400 font-medium">
                            <span className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                4K AI Super Resolution
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                Up to 80% Compression
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                100% User Media Privacy
                            </span>
                        </div>
                    </motion.div>

                    {/* Right visual card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="flex-1 w-full max-w-lg lg:max-w-none"
                    >
                        <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white dark:from-gray-900 to-primary/5 dark:to-primary/10 border border-gray-200/80 dark:border-gray-800 shadow-2xl">
                            {/* Decorative background glow */}
                            <div className="absolute -top-10 -right-10 w-44 h-44 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />

                            {/* Header of mock video player */}
                            <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800 mb-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl brand-gradient flex items-center justify-center text-white shadow-md">
                                        <span className="material-symbols-outlined text-xl">smart_display</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm text-[#131118] dark:text-white">
                                            cinematic_sunset_4k.mp4
                                        </h3>
                                        <p className="text-xs text-gray-500">Source: 1080p HD &bull; 60fps</p>
                                    </div>
                                </div>
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/15 text-primary border border-primary/25">
                                    AI Enhanced
                                </span>
                            </div>

                            {/* Center Preview Display */}
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 flex items-center justify-center group mb-6 shadow-inner">
                                <div
                                    className="absolute inset-0 bg-cover bg-center opacity-85"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80')",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* Split Before/After Tag */}
                                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-semibold text-white flex items-center gap-1.5 border border-white/10">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                    Upscaled to 4K UHD
                                </div>

                                <div className="relative z-10 w-14 h-14 rounded-full brand-gradient text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                                    <span className="material-symbols-outlined text-3xl ml-1">play_arrow</span>
                                </div>

                                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90">
                                    <span>01:42 / 03:15</span>
                                    <span className="bg-primary px-2 py-0.5 rounded text-[10px] font-bold">
                                        PRO 4K
                                    </span>
                                </div>
                            </div>

                            {/* Processing Features Metrics Row */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 text-center">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
                                        Compression
                                    </span>
                                    <span className="font-extrabold text-sm text-emerald-500">
                                        -78% Size
                                    </span>
                                    <span className="text-[10px] text-gray-400 block">420MB → 92MB</span>
                                </div>

                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 text-center">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
                                        Resolution
                                    </span>
                                    <span className="font-extrabold text-sm text-primary">
                                        4K 2160p
                                    </span>
                                    <span className="text-[10px] text-gray-400 block">AI Neural Scale</span>
                                </div>

                                <div className="p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 text-center">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 block mb-1">
                                        Audio Track
                                    </span>
                                    <span className="font-extrabold text-sm text-[#131118] dark:text-white">
                                        320kbps MP3
                                    </span>
                                    <span className="text-[10px] text-gray-400 block">Extracted Clean</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
