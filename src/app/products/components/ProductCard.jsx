"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {

    const imgSrc = product.photoURL
        ? product.photoURL
        : "/assets/logofav.png";

    return (
        <article className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
            <div className="relative w-56 h-56">
                {/* <Image
                    src={imgSrc}
                    alt={product.name || "Product"}
                    fill
                    className="object-cover rounded-lg"
                /> */}

                <img src={imgSrc} alt={product.name || "product"} className="object-cover rounded-lg" />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-medium line-clamp-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description || ""}</p>

                <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-semibold">${product.price ?? "0.00"}</span>
                    <Link href={`/products/details/${product._id}`} className="btn btn-sm bg-green-600 text-white tracking-wider rounded">
                        See Details
                    </Link>
                </div>
            </div>
        </article>
    );
}
