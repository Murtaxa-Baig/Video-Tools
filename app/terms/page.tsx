import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsContent from "@/components/TermsContent";

export const metadata: Metadata = {
    title: "Terms & Conditions - Video Tools",
    description: "Terms and conditions governing the use of Video Tools video editing, compression, AI upscaling, and subscription services.",
};

export default function TermsPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <div className="py-12 md:py-20">
                <TermsContent />
            </div>
            <Footer />
        </main>
    );
}
