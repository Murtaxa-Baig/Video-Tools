import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
    title: "Contact & Support - Video Editor",
    description: "Get in touch with the Video Editor team for product support, subscription inquiries, and data export requests.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <ContactHero />
            <section className="pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ContactForm />
                    <FAQ />
                </div>
            </section>
            <Footer />
        </main>
    );
}
