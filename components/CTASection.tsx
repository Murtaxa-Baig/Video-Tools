"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CTASection() {
    const pathname = usePathname();

    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="brand-gradient rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
                        >
                            Elevate Your Content
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight"
                        >
                            Ready to Transform Your Video Quality?
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="text-base sm:text-lg opacity-95 mb-10 max-w-2xl mx-auto font-medium leading-relaxed"
                        >
                            Compress files without artifacts, restore and upscale to 4K with AI, extract clear audio tracks, and retain complete control over your media history.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.35 }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <Link
                                href="/#download"
                                onClick={(e) => {
                                    if (pathname === "/") {
                                        e.preventDefault();
                                        document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="w-full sm:w-auto"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-white text-[#131118] font-bold py-4 px-10 rounded-xl text-base sm:text-lg transition-all shadow-lg hover:bg-gray-50 cursor-pointer"
                                >
                                    Download Video Editor
                                </motion.button>
                            </Link>

                            <Link
                                href="/#pricing"
                                onClick={(e) => {
                                    if (pathname === "/") {
                                        e.preventDefault();
                                        document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="w-full sm:w-auto"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto bg-black/20 hover:bg-black/30 border border-white/40 text-white font-bold py-4 px-10 rounded-xl text-base sm:text-lg transition-all cursor-pointer backdrop-blur-sm"
                                >
                                    View Subscription Tiers
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
