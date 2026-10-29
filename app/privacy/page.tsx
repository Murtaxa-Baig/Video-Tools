import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyContent from "@/components/PrivacyContent";

export const metadata: Metadata = {
    title: "Privacy Policy - Video Editor",
    description: "Learn how Video Editor handles video processing, protects user media, retains history, and ensures data privacy.",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="py-12 md:py-20">
                <PrivacyContent />
            </div>
            <Footer />
        </main>
    );
}
