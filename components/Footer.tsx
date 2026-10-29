import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="bg-[#121016] text-white pt-16 pb-8 border-t border-gray-800">
            <meta name="google-site-verification" content="project-716448996918" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
                    {/* Brand column */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Logo size={36} />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold tracking-tight">Video Editor</span>
                                <span className="text-xs text-primary font-semibold">
                                    Smart Video Enhancement & Utilities
                                </span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm max-w-sm mb-4 leading-relaxed">
                            Compress videos with high visual fidelity, enhance resolution up to 4K with AI, adjust playback speed, extract audio, and manage your media history in one seamless app.
                        </p>
                        <p className="text-xs text-gray-500">
                            Support:{" "}
                            <a
                                href="mailto:supportappnaya@gmail.com"
                                className="text-primary hover:underline transition-colors"
                            >
                                supportappnaya@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Features column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
                            Features
                        </h4>
                        <ul className="text-gray-400 space-y-2.5 text-sm">
                            <li>
                                <Link href="/#features" className="hover:text-primary transition-colors">
                                    Video Compression
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" className="hover:text-primary transition-colors">
                                    AI Video Enhancer
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" className="hover:text-primary transition-colors">
                                    HD to 2K & 4K Upscale
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" className="hover:text-primary transition-colors">
                                    Speed Adjustment
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" className="hover:text-primary transition-colors">
                                    Audio Extractor
                                </Link>
                            </li>
                            <li>
                                <Link href="/#features" className="hover:text-primary transition-colors">
                                    Data Export & History
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
                            Company
                        </h4>
                        <ul className="text-gray-400 space-y-2.5 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary transition-colors">
                                    Contact & Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/#pricing" className="hover:text-primary transition-colors">
                                    Subscription Plans
                                </Link>
                            </li>
                            <li>
                                <Link href="/#download" className="hover:text-primary transition-colors">
                                    Download App
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
                            Legal
                        </h4>
                        <ul className="text-gray-400 space-y-2.5 text-sm">
                            <li>
                                <Link href="/terms" className="hover:text-primary transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/delete-account" className="hover:text-red-400 transition-colors">
                                    Delete Account
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4 text-xs text-gray-500">
                    <p>
                        Copyright © 2026{" "}
                        <a
                            href="http://www.appnayatech.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-300 underline"
                        >
                            AppNaya Technologies
                        </a>
                        . All rights reserved. &middot; Project:{" "}
                        <code className="text-gray-400">project-716448996918</code>
                    </p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-gray-300">
                            Privacy
                        </Link>
                        <span>&middot;</span>
                        <Link href="/terms" className="hover:text-gray-300">
                            Terms
                        </Link>
                        <span>&middot;</span>
                        <a href="mailto:supportappnaya@gmail.com" className="hover:text-gray-300">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
