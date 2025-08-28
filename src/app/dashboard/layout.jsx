
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
// import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="grid grid-cols-12 min-h-screen">
            {/* Sidebar */}
            <aside className="col-span-3 bg-gray-100 p-6 border-r">
                <h2 className="text-xl font-semibold mb-6">Dashboard Menu</h2>
                <nav className="flex flex-col gap-4">
                    <Link href="/dashboard" className="hover:text-blue-600">Home</Link>
                    <Link href="/dashboard/addProduct" className="hover:text-blue-600">Add Product</Link>
                    {/* <Link href="/dashboard/orders" className="hover:text-blue-600">Orders</Link> */}
                    {/* <Link href="/dashboard/users" className="hover:text-blue-600">Users</Link> */}
                </nav>
            </aside>

            {/* Main content */}
            <main className="col-span-9 p-6">
                {children}
            </main>
        </div>
    );
}               
