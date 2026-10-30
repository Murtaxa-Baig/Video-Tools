import Image from "next/image";

interface LogoProps {
    className?: string;
    size?: number;
}

export default function Logo({ className = "", size = 36 }: LogoProps) {
    return (
        <Image
            src="/images/logo.png"
            alt="Video Tools Logo"
            width={size}
            height={size}
            className={`object-contain ${className}`}
            priority
        />
    );
}
