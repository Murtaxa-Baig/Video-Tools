import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteConfirmForm from "@/components/DeleteConfirmForm";

export const metadata: Metadata = {
    title: "Confirm Account Deletion - Video Tools",
    description: "Verify your identity and confirm deletion of your Video Tools account.",
};

export default function DeleteAccountConfirmPage() {
    return (
        <main className="min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="flex-grow flex items-center justify-center">
                <DeleteConfirmForm />
            </div>
            <Footer />
        </main>
    );
}
