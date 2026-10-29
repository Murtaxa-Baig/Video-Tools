"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Does compressing my video reduce visual quality?",
        answer:
            "No. Video Editor utilizes intelligent adaptive bitrate compression algorithms (H.264, H.265, and AV1) that selectively compress redundant digital data while preserving focal details, colors, and motion sharpness. In most cases, file size drops by up to 80% without noticeable quality loss.",
    },
    {
        question: "How does the AI HD to 2K / 4K upscaling work?",
        answer:
            "Unlike traditional bicubic scaling that stretches pixels and causes blurriness, our deep-learning neural network analyzes each video frame, reconstructs high-frequency textures, sharpens edges, and synthesizes crisp micro-details, producing genuine 2K or 4K ultra-high definition clarity.",
    },
    {
        question: "Can I download all my data and media history?",
        answer:
            "Yes! You maintain complete ownership of your media. Your processed videos, converted clips, and extracted audio files are saved in your personal Media History. You can download individual files or request a complete bulk export of all your media anytime with a single click.",
    },
    {
        question: "What audio formats can I extract from videos?",
        answer:
            "You can extract high-fidelity audio tracks in standard formats including MP3 (up to 320 kbps), WAV (lossless uncompressed audio), and AAC. Extracted audio is stored in your library and ready for immediate download or sharing.",
    },
    {
        question: "How do the Weekly, Monthly, and Yearly subscriptions work?",
        answer:
            "We offer three flexible tiers: Weekly (ideal for short-term edits), Monthly (great for regular creators), and Yearly (best value with up to 68% savings and VIP rendering). Subscriptions can be managed or canceled at any time directly through your Apple ID or Google Play account.",
    },
    {
        question: "Is my video data secure and private?",
        answer:
            "Absolutely. Your uploaded files are encrypted during transit (TLS 1.3) and at rest. Video Editor processes your files securely and never uses your personal videos or extracted audio to train public AI models. You can delete items from history or delete your entire account whenever you wish.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white dark:bg-gray-900/40 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
                        <span>Have Questions?</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#131118] dark:text-white mb-4 tracking-tight">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base">
                        Everything you need to know about Video Editor, AI enhancement, subscriptions, and data exports.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                                    isOpen
                                        ? "border-primary/40 bg-primary/5 dark:bg-primary/10 shadow-sm"
                                        : "border-gray-200/80 dark:border-gray-800 bg-white dark:bg-gray-800/40 hover:border-gray-300 dark:hover:border-gray-700"
                                }`}
                            >
                                <button
                                    onClick={() => setActiveIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 cursor-pointer focus:outline-none text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-bold text-base sm:text-lg text-[#131118] dark:text-white pr-4">
                                        {faq.question}
                                    </span>
                                    <motion.span
                                        animate={{ rotate: isOpen ? 180 : 0 }}
                                        transition={{ duration: 0.25 }}
                                        className={`material-symbols-outlined shrink-0 text-2xl ${
                                            isOpen ? "text-primary" : "text-gray-400"
                                        }`}
                                    >
                                        expand_more
                                    </motion.span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed border-t border-gray-100 dark:border-gray-800/50 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
