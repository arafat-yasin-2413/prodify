"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ActiveLink({ href, children }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`p-2 rounded transition ${isActive
                    ? "bg-green-500 font-semibold shadow"
                    : "bg-white text-black font-semibold hover:text-green-600"
                }`}
        >
            {children}
        </Link>
    );
}
