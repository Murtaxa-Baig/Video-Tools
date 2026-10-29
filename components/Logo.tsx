import React from "react";

interface LogoProps {
    className?: string;
    size?: number;
}

export default function Logo({ className = "", size = 32 }: LogoProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="vt_gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6600" />
                    <stop offset="100%" stopColor="#FF8533" />
                </linearGradient>
                <linearGradient id="vt_sparkle" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#FFE0B2" />
                </linearGradient>
            </defs>
            {/* Background rounded rect */}
            <rect width="100" height="100" rx="24" fill="url(#vt_gradient)" />
            {/* Subtle inner border */}
            <rect
                x="3"
                y="3"
                width="94"
                height="94"
                rx="21"
                stroke="white"
                strokeOpacity="0.25"
                strokeWidth="2"
            />
            {/* Film/Video Frame motif */}
            <path
                d="M26 30C26 26.6863 28.6863 24 32 24H68C71.3137 24 74 26.6863 74 30V70C74 73.3137 71.3137 76 68 76H32C28.6863 76 26 73.3137 26 70V30Z"
                fill="white"
                fillOpacity="0.16"
            />
            {/* Play Symbol */}
            <path
                d="M42 36.5C42 34.887 43.805 33.9317 45.143 34.8306L63.5682 47.3306C64.7108 48.1009 64.7108 49.8991 63.5682 50.6694L45.143 63.1694C43.805 64.0683 42 63.113 42 61.5V36.5Z"
                fill="white"
            />
            {/* AI Sparkle Star top right */}
            <path
                d="M74 18L75.5 22.5L80 24L75.5 25.5L74 30L72.5 25.5L68 24L72.5 22.5L74 18Z"
                fill="url(#vt_sparkle)"
            />
            {/* Secondary tiny sparkle */}
            <path
                d="M26 72L27 75L30 76L27 77L26 80L25 77L22 76L25 75L26 72Z"
                fill="url(#vt_sparkle)"
            />
        </svg>
    );
}
