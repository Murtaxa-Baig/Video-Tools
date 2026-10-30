"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`sticky top-0 z-50 bg-white/85 dark:bg-background-dark/85 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${
                scrolled ? "shadow-md" : ""
            }`}
        >
            <meta name="google-site-verification" content="project-716448996918" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group min-w-0">
                        <Image
                            src="/images/logo.png"
                            alt="Video Tools Logo"
                            width={36}
                            height={36}
                            className="object-contain rounded-xl transition-transform group-hover:scale-105"
                            priority
                        />
                        <span className="text-[#131118] dark:text-white text-xl font-black tracking-tight truncate">
                            Video Tools
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavLinks />
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-gray-700 dark:text-gray-200 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 shadow-xl">
                    <div className="flex flex-col gap-4 px-6 py-6">
                        <NavLinks mobile onClick={() => setIsOpen(false)} />
                    </div>
                </div>
            )}
        </nav>
    );
}

type NavLinksProps = {
    mobile?: boolean;
    onClick?: () => void;
};

function NavLinks({ mobile = false, onClick }: NavLinksProps) {
    const pathname = usePathname();

    const base = "text-sm font-semibold transition-colors";

    const isActive = (path: string) => pathname === path;

    const linkClass = (path: string) =>
        `${base} ${
            isActive(path)
                ? "text-primary"
                : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
        }`;

    const handleAnchorClick = (id: string) => (e: React.MouseEvent) => {
        if (pathname === "/") {
            e.preventDefault();
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
        onClick?.();
    };

    return (
        <>
            <Link href="/" onClick={onClick} className={linkClass("/")}>
                Home
            </Link>

            <Link href="/contact" onClick={onClick} className={linkClass("/contact")}>
                Contact
            </Link>

            <Link href="/privacy" onClick={onClick} className={linkClass("/privacy")}>
                Privacy
            </Link>

            <Link href="/terms" onClick={onClick} className={linkClass("/terms")}>
                Terms
            </Link>

            <Link
                href="/#download"
                onClick={handleAnchorClick("download")}
                className={`${
                    mobile ? "mt-2 text-center" : ""
                } text-sm font-bold px-6 py-2.5 rounded-xl transition-all brand-gradient text-white hover:opacity-95 shadow-md hover:shadow-lg`}
            >
                Get App
            </Link>
        </>
    );
}
