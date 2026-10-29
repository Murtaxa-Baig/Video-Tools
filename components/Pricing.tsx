"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
    {
        name: "Weekly",
        badge: "Short-Term",
        price: "$4.99",
        period: "/ week",
        description: "Great for quick tasks, urgent edits, or test-driving full capabilities.",
        popular: false,
        features: [
            "Unlimited Video Compression",
            "AI Video Enhancement (Standard)",
            "HD to 2K Resolution Upscaling",
            "Audio Extractor (MP3 & WAV)",
            "Video Speed Adjustments (up to 4x)",
            "7-Day Media History Library",
            "Download All Processed Files",
        ],
        ctaText: "Start Weekly Plan",
    },
    {
        name: "Monthly",
        badge: "Most Popular",
        price: "$12.99",
        period: "/ month",
        description: "The sweet spot for active content creators, TikTokers, and YouTubers.",
        popular: true,
        features: [
            "Everything in Weekly, plus:",
            "Full HD to 4K Ultra HD AI Upscaling",
            "Turbo GPU Processing Priority",
            "Video Speed Controller up to 10x",
            "Lossless Multi-Format Audio Extraction",
            "30-Day Persistent Media History",
            "Batch Video Compression",
            "One-Click Full Data Export",
        ],
        ctaText: "Start Monthly Plan",
    },
    {
        name: "Yearly",
        badge: "Best Value · Save 68%",
        price: "$49.99",
        period: "/ year",
        subPrice: "Only ~$4.16 / month",
        description: "Maximum savings and VIP capabilities for creators and professionals.",
        popular: false,
        features: [
            "Everything in Monthly, plus:",
            "Unlimited 4K AI Upscaling & Restoration",
            "VIP Ultra-Fast Cloud Rendering Queue",
            "Unlimited Media History Retention",
            "Early Access to Next-Gen Video AI Models",
            "Priority 24/7 Creator Support",
            "Instant Full Media Archive Download",
        ],
        ctaText: "Get Yearly Access",
    },
];

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
                        <span>Transparent Pricing</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-[#131118] dark:text-white mb-4 tracking-tight">
                        Flexible Plans Designed for Every Workflow
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                        Choose between Weekly, Monthly, or Yearly subscriptions. Upgrade, downgrade, or cancel anytime directly in your device settings.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                                plan.popular
                                    ? "bg-white dark:bg-gray-900 border-2 border-primary shadow-2xl md:-translate-y-2 ring-4 ring-primary/10"
                                    : "bg-white dark:bg-gray-900/70 border border-gray-200/80 dark:border-gray-800 shadow-lg hover:border-primary/40"
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                                    <span className="brand-gradient text-white text-xs font-extrabold uppercase tracking-wider py-1 px-4 rounded-full shadow-md">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <div>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-[#131118] dark:text-white">
                                        {plan.name}
                                    </h3>
                                    {!plan.popular && (
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                                            {plan.badge}
                                        </span>
                                    )}
                                </div>

                                <p className="text-xs text-gray-500 dark:text-gray-400 mb-6 min-h-[36px]">
                                    {plan.description}
                                </p>

                                <div className="mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl sm:text-5xl font-black text-[#131118] dark:text-white tracking-tight">
                                            {plan.price}
                                        </span>
                                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                                            {plan.period}
                                        </span>
                                    </div>
                                    {plan.subPrice && (
                                        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                                            {plan.subPrice}
                                        </p>
                                    )}
                                </div>

                                <ul className="space-y-3 mb-8 text-sm">
                                    {plan.features.map((feature, fIdx) => (
                                        <li
                                            key={fIdx}
                                            className="flex items-start gap-2.5 text-gray-700 dark:text-gray-300"
                                        >
                                            <span className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0">
                                                check_circle
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <Link
                                    href="/#download"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 cursor-pointer shadow-md ${
                                            plan.popular
                                                ? "brand-gradient text-white hover:opacity-95 shadow-primary/25"
                                                : "bg-gray-100 dark:bg-gray-800 text-[#131118] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                                        }`}
                                    >
                                        {plan.ctaText}
                                    </motion.button>
                                </Link>
                                <p className="text-[11px] text-center text-gray-400 mt-2.5">
                                    Managed via Apple App Store / Google Play
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center text-xs text-gray-500 max-w-xl mx-auto">
                    Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing cycle. All plans include full rights to export your data and processed media.
                </div>
            </div>
        </section>
    );
}

