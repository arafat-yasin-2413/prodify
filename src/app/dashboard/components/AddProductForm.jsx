"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

export default function AddProductForm() {
    const { data: session } = useSession();
    const userEmail = session?.user?.email || "";
    const [loading, setLoading] = useState(false);


    const [form, setForm] = useState({
        name: "",
        brand: "",
        description: "",
        author: userEmail,
        price: "",
        status: "in-stock",
        model: "",
        warranty: "",
        color: "",
        material: "",
        photoURL: "",
    });


    useEffect(() => {
        if (userEmail) {
            setForm(f => ({ ...f, author: userEmail }));
        }
    }, [userEmail]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        if (!form.name || !form.brand || !form.description || !form.price) {
            toast.error("Please fill required fields");
            return;
        }

        const payload = { ...form };
        // ensure price is integer
        payload.price = parseInt(payload.price, 10);

        ////////////////// TODO : CONNECT POST API HERE
        try {
            setLoading(true);
            const res = await fetch("/api/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Failed to add product");
            }

            toast.success("Product added successfully!");
            // clear form (keep author)
            setForm({
                name: "",
                brand: "",
                description: "",
                author: userEmail,
                price: "",
                status: "in-stock",
                model: "",
                warranty: "",
                color: "",
                material: "",
                photoURL: "",
            });
        } catch (err) {
            console.error(err);
            toast.error(err.message || "Server error");
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <div className="w-full px-8 py-4">
            <Toaster />
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block">Brand *</label>
                    <input name="brand" value={form.brand} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block">Description *</label>
                    <textarea name="description" value={form.description} onChange={handleChange} className="textarea textarea-bordered w-full" />
                </div>

                <div>
                    <label className="block">Author (email) *</label>
                    <input name="author" value={form.author} readOnly className="input input-bordered w-full bg-gray-100" />
                </div>

                <div>
                    <label className="block">Price (integer) *</label>
                    <input name="price" value={form.price} onChange={handleChange} type="number" step="1" className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block">Status *</label>
                    <select name="status" value={form.status} onChange={handleChange} className="select select-bordered w-full">
                        <option value="in-stock">in-stock</option>
                        <option value="stock-out">stock-out</option>
                    </select>
                </div>

                <div>
                    <label className="block">Model</label>
                    <input name="model" value={form.model} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block">Warranty</label>
                    <input name="warranty" value={form.warranty} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block">Color</label>
                    <input name="color" value={form.color} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block">Material</label>
                    <input name="material" value={form.material} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="block">Photo URL</label>
                    <input name="photoURL" value={form.photoURL} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div className="flex justify-center items-center">
                    {loading ? (
                        <ClipLoader color="#16A34A" size={30} /> 
                    ) : (
                    <button type="submit" className="btn bg-green-600 hover:bg-green-600/90 rounded">
                        Add Product
                    </button>
    )}
                </div>
            </form>
        </div>
    );
}
