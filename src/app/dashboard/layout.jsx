
import ProdifyLogo from "@/components/ProdifyLogo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ActiveLink from "./components/ActiveLink";

export default async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="grid grid-cols-12 min-h-screen">
            {/* Sidebar */}
            <aside className="col-span-3 bg-gray-100 p-6 border-r border-green-200">
                <ProdifyLogo></ProdifyLogo>
                <h2 className="text-xl font-semibold mt-4 mb-3">Dashboard Menu</h2>
                <div className="border-b-2 border-gray-200"></div>
                <nav className="flex flex-col gap-4 mt-3">
                    <ActiveLink href="/dashboard">Home</ActiveLink>
                    <ActiveLink href="/dashboard/addProduct">Add Product</ActiveLink>
                </nav>
            </aside>

            {/* Main content */}
            <main className="col-span-9 p-6">
                {children}
            </main>
        </div>
    );
}               
