"use client";

import { Toaster } from "react-hot-toast";
import NextAuthProvider from "./NextAuthProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Providers({ children }) {
    return (
        <NextAuthProvider>
            <Navbar />
            <Toaster />
            {children}
            <Footer></Footer>
        </NextAuthProvider>
    );
}
