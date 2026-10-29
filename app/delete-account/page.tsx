import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeleteAccount from "@/components/DeleteAccount";

export const metadata: Metadata = {
    title: "Delete Account - Video Editor",
    description: "Request the permanent deletion of your Video Editor account and associated media history.",
};

export default function DeleteAccountPage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <DeleteAccount />
            <Footer />
        </main>
    );
}
