
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <section className="max-w-6xl mx-auto p-6">
            {children}
        </section>
    );
}               
