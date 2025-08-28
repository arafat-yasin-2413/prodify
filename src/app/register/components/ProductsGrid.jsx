"use client";

import ProductCard from "@/app/products/components/ProductCard";


export default function ProductsGrid({ products }) {
    if (!products || products.length === 0) {
        return <p className="text-gray-500">No products available right now.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCard key={product._id} product={product} />
            ))}
        </div>
    );
}
