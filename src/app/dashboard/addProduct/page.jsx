"use client";

import { useSession } from "next-auth/react";
import AddProductForm from "../components/AddProductForm";

export default function AddProductPage() {
    
    const { data: session } = useSession();

    return (
        <div>
            <h2 className="text-xl font-semibold">Add Product</h2>

            {/* add product form here */}
            <AddProductForm></AddProductForm>

        </div>
    );
}
