"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyContent() {
    return (
        <div className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-8 text-center md:text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-4 border border-primary/20">
                    <span>Privacy &amp; Data Transparency</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-black text-[#131118] dark:text-white mb-4">
                    Privacy Policy
                </h1>
                <p className="text-[#6b608a] dark:text-[#a097bd] text-lg font-normal leading-relaxed mb-6">
                    How Video Tools collects, processes, protects, and stores your media files, video processing history, and personal data.
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                        Effective Date: October 29, 2026
                    </span>
                    <span className="hidden sm:inline text-gray-300">|</span>
                    <a
                        className="text-primary font-medium hover:underline flex items-center gap-1"
                        href="mailto:supportappnaya@gmail.com"
                    >
                        <span className="material-symbols-outlined text-sm">mail</span>
                        supportappnaya@gmail.com
                    </a>
                </div>
            </motion.header>

            <div className="space-y-12">
                {[
                    {
                        id: "introduction",
                        title: "1. Introduction",
                        content: (
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                This Privacy Policy outlines the practices of <strong>AppNaya Technologies</strong> regarding the collection, use, storage, and disclosure of personal data and multimedia files when you use <strong>Video Tools</strong> (&quot;the Application&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), including our mobile applications and related web services. We are dedicated to respecting your privacy, safeguarding your personal media, and providing total transparency over your data.
                            </p>
                        )
                    },
                    {
                        id: "information-collected",
                        title: "2. Information We Collect",
                        content: (
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>To provide high-performance video compression, AI enhancement, upscaling, speed modification, and audio extraction, we collect the following categories of information:</p>
                                
                                <div className="space-y-3">
                                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800">
                                        <h4 className="font-bold text-[#131118] dark:text-white text-sm mb-1">A. Account Information</h4>
                                        <p className="text-sm">When you create an account or sign in using Google or Apple Authentication, we receive your name, email address, profile photo (if permitted), and unique user identifier.</p>
                                    </div>

                                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800">
                                        <h4 className="font-bold text-[#131118] dark:text-white text-sm mb-1">B. Media Files &amp; User Inputs</h4>
                                        <p className="text-sm">Video files you upload for compression, AI upscaling (HD to 2K/4K), speed adjustments, or audio extraction. User settings such as desired bitrate, resolution, audio format (MP3/WAV/AAC), and playback speed factors.</p>
                                    </div>

                                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800">
                                        <h4 className="font-bold text-[#131118] dark:text-white text-sm mb-1">C. Media History &amp; Metadata</h4>
                                        <p className="text-sm">Technical metadata of uploaded and processed files, including file dimensions, frame rate, duration, original and compressed file sizes, processing timestamps, and history records displayed in your media library.</p>
                                    </div>

                                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800">
                                        <h4 className="font-bold text-[#131118] dark:text-white text-sm mb-1">D. Subscription &amp; Billing Data</h4>
                                        <p className="text-sm">Information regarding your active subscription plan (Weekly, Monthly, or Yearly), purchase receipts, and expiration dates. Payments are processed through Apple App Store or Google Play Store; <em>we do not store or process your credit card numbers or banking credentials directly</em>.</p>
                                    </div>

                                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800">
                                        <h4 className="font-bold text-[#131118] dark:text-white text-sm mb-1">E. Diagnostic &amp; Usage Information</h4>
                                        <p className="text-sm">Device type, operating system version, app version, error logs, and performance metrics to troubleshoot processing failures and maintain service stability.</p>
                                    </div>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: "purpose",
                        title: "3. Purpose of Data Processing",
                        content: (
                            <>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    Your information and uploaded files are processed solely for the following explicit purposes:
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        "Compressing videos to reduce file size while preserving high visual quality",
                                        "Enhancing video clarity and removing noise using neural AI models",
                                        "Upscaling standard HD (720p/1080p) videos to crisp 2K or 4K resolution",
                                        "Modifying video playback speed with precise frame timing",
                                        "Extracting audio streams into independent MP3, WAV, or AAC audio files",
                                        "Maintaining your personal Media History so you can access previous outputs",
                                        "Enabling full, one-click data downloads and archives upon your request",
                                        "Managing subscription tiers (Weekly, Monthly, Yearly) and customer support"
                                    ].map((item, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-white dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 flex items-start gap-3">
                                            <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                                            <p className="text-sm font-medium text-[#131118] dark:text-white">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )
                    },
                    {
                        id: "ai-policy",
                        title: "4. AI Processing & Model Non-Training Guarantee",
                        content: (
                            <div className="p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                                    <h4 className="font-bold text-[#131118] dark:text-white text-base">Strict AI Privacy Standard</h4>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                    When you utilize our AI Video Enhancement or 4K Upscaling features, your video frames are fed temporarily into neural inference models strictly to generate the enhanced or upscaled output.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm font-semibold text-primary">
                                    We do NOT use your private videos, extracted audio, or media content to train, retrain, evaluate, or improve public AI models, foundation models, or third-party algorithms.
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                    Your media remains exclusively yours, and server processing caches are scrubbed following task completion.
                                </p>
                            </div>
                        )
                    },
                    {
                        id: "history-storage",
                        title: "5. Media History & Storage Retention",
                        content: (
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    Video Tools provides a built-in <strong>Media History</strong> library to give you convenient access to your generated outputs, compressed files, and extracted audio tracks across sessions.
                                </p>
                                <ul className="space-y-2.5 list-disc pl-5 text-sm">
                                    <li><strong>Retention Duration:</strong> Processed files remain stored in your history based on your subscription tier (7 days for Weekly, 30 days for Monthly, and unlimited active retention for Yearly subscribers, unless deleted earlier).</li>
                                    <li><strong>User Control:</strong> You have the right at any time to delete individual history entries or wipe your entire media history directly from the app interface. Once deleted by you, the media files are permanently removed from our active storage.</li>
                                    <li><strong>Guest / Temporary Cache:</strong> If processing occurs without an authenticated account, temporary files are automatically deleted after 24 hours.</li>
                                </ul>
                            </div>
                        )
                    },
                    {
                        id: "download-data",
                        title: "6. Right to Download All Your Data (Data Portability)",
                        content: (
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    We uphold the principles of data portability under GDPR (Article 20), CCPA, and international standards. You maintain absolute sovereignty over your creative assets.
                                </p>
                                <div className="p-5 rounded-2xl bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700">
                                    <h4 className="font-bold text-[#131118] dark:text-white text-base mb-2 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">cloud_download</span>
                                        How to Download All Your Data
                                    </h4>
                                    <p className="text-sm mb-3">
                                        You can initiate a complete export of your personal data and media history directly through the application settings or by contacting our data protection team:
                                    </p>
                                    <ol className="list-decimal pl-5 space-y-1.5 text-sm">
                                        <li>Navigate to <strong>Settings → Media History &amp; Data</strong> in the Video Tools application.</li>
                                        <li>Select <strong>Download All Data</strong> to receive a unified ZIP archive containing your processed videos, extracted audio files, and metadata logs.</li>
                                        <li>Alternatively, send an email to <a href="mailto:supportappnaya@gmail.com" className="text-primary underline">supportappnaya@gmail.com</a> with the subject line <em>&quot;Data Export Request&quot;</em> from your registered account email.</li>
                                    </ol>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: "third-parties",
                        title: "7. Third-Party Service Providers & Cloud Infrastructure",
                        content: (
                            <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-6 border border-primary/20 space-y-4">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                    We partner with verified, enterprise-grade infrastructure providers to deliver reliable processing:
                                </p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">cloud</span>
                                        <div>
                                            <h4 className="font-bold text-[#131118] dark:text-white text-sm">Cloud GPU &amp; Rendering Infrastructure</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">High-speed isolated servers that compute video compression, neural upscaling, and audio extraction over encrypted connections.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">lock</span>
                                        <div>
                                            <h4 className="font-bold text-[#131118] dark:text-white text-sm">Google Firebase &amp; Authentication</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Encrypted user authentication and database synchronization adhering to the Google API Services User Data Policy.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="material-symbols-outlined text-primary text-xl">payments</span>
                                        <div>
                                            <h4 className="font-bold text-[#131118] dark:text-white text-sm">Apple &amp; Google In-App Purchases</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">Secure subscription billing and payment processing complying with Apple and Google developer terms.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: "security",
                        title: "8. Data Security Measures",
                        content: (
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    We protect your videos and credentials using industry-standard security protocols:
                                </p>
                                <ul className="space-y-2 list-disc pl-5 text-sm">
                                    <li><strong>Encryption in Transit:</strong> All uploads, downloads, and API communications are secured via Transport Layer Security (TLS 1.3).</li>
                                    <li><strong>Encryption at Rest:</strong> Stored media files and metadata are encrypted using AES-256 bit encryption.</li>
                                    <li><strong>Secure Expiring URLs:</strong> Download links for your processed files are signed and expire automatically to prevent unauthorized third-party access.</li>
                                </ul>
                            </div>
                        )
                    },
                    {
                        id: "user-rights",
                        title: "9. Your Privacy Rights",
                        content: (
                            <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                                    Depending on your jurisdiction (such as GDPR in the EU or CCPA/CPRA in California), you possess the following rights:
                                </p>
                                <div className="space-y-2.5">
                                    {[
                                        { title: "Right of Access", desc: "Request a copy of your personal data and media records." },
                                        { title: "Right to Rectification", desc: "Request correction of inaccurate or incomplete personal information." },
                                        { title: "Right to Erasure (Deletion)", desc: "Request permanent deletion of your account, media files, and history." },
                                        { title: "Right to Data Portability", desc: "Download all your processed media and account data in a structured format." },
                                        { title: "Right to Object / Restrict", desc: "Restrict specific processing of your data." }
                                    ].map((right, idx) => (
                                        <div key={idx} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 flex justify-between items-center">
                                            <div>
                                                <h5 className="font-bold text-sm text-[#131118] dark:text-white">{right.title}</h5>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">{right.desc}</p>
                                            </div>
                                            <span className="material-symbols-outlined text-primary text-xl">check</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    },
                    {
                        id: "account-deletion",
                        title: "10. Account Deletion & Data Removal",
                        content: (
                            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                <p>
                                    You can permanently delete your Video Tools account at any time. When an account is deleted, your profile information, authentication tokens, media history records, and stored video/audio files are permanently wiped from our production databases.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 items-center">
                                    <Link
                                        href="/delete-account"
                                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-colors shadow-sm"
                                    >
                                        <span className="material-symbols-outlined text-base">delete</span>
                                        Go to Delete Account Page
                                    </Link>
                                    <span className="text-xs text-gray-500">Or request manual deletion via support email.</span>
                                </div>
                            </div>
                        )
                    },
                    {
                        id: "childrens-privacy",
                        title: "11. Children's Privacy",
                        content: (
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Video Tools does not knowingly solicit or collect personal information from children under the age of 13 (or under 16 in certain jurisdictions). If we discover that a child has provided us with personal information without parental consent, we will promptly delete that information from our servers.
                            </p>
                        )
                    },
                    {
                        id: "policy-updates",
                        title: "12. Changes to This Privacy Policy",
                        content: (
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                We may update this Privacy Policy from time to time to reflect changes in our technology, features, or applicable laws. Any modifications will be posted on this page with an updated Effective Date. Continued use of Video Tools after updates constitutes acceptance of the revised policy.
                            </p>
                        )
                    },
                    {
                        id: "contact",
                        title: "13. Contact Information & Data Protection",
                        content: (
                            <div className="text-center p-8 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
                                <h4 className="text-xl font-bold text-[#131118] dark:text-white mb-2">
                                    Questions or Data Requests?
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm max-w-md mx-auto">
                                    For inquiries regarding your data, privacy questions, or to request a full media history export, contact our team:
                                </p>
                                <a
                                    href="mailto:supportappnaya@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 brand-gradient text-white rounded-xl font-semibold hover:opacity-95 transition-opacity shadow-md shadow-primary/20"
                                >
                                    <span className="material-symbols-outlined text-lg">mail</span>
                                    supportappnaya@gmail.com
                                </a>
                                <p className="text-xs text-gray-400 mt-4">
                                    AppNaya Technologies &bull; Project ID: project-716448996918
                                </p>
                            </div>
                        )
                    }
                ].map((section) => (
                    <motion.section
                        key={section.id}
                        id={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-[#131118] dark:text-white">
                            <span className="w-1.5 h-7 bg-primary rounded-full shrink-0"></span>
                            <span>{section.title}</span>
                        </h2>
                        {section.content}
                    </motion.section>
                ))}
            </div>
        </div>
    );
}
