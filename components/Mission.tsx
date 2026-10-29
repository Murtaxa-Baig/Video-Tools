"use client";

import { motion } from "framer-motion";

export default function Mission() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl font-bold text-[#131118] dark:text-white mb-8">
                        Our Mission
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed italic">
                        &quot;To empower every videographer, content creator, and everyday smartphone user with video utilities that feel effortless — eliminating the friction between capturing footage and delivering ultra-crisp 4K media.&quot;
                    </p>
                    <div className="mt-12 flex justify-center gap-10">
                        {[
                            { label: "Videos Processed", value: "5M+" },
                            { label: "Max Resolution", value: "4K UHD" },
                            { label: "Core Utilities", value: "7 in 1" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.1) }}
                            >
                                <p className="text-3xl font-black brand-text-gradient">{stat.value}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
