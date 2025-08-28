"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
    return (
        <article className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
            <div className="relative w-full h-48">
                {product.photoURL ? (
                    <Image
                        src={product.photoURL}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        No image
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-lg font-medium line-clamp-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{product.description || ""}</p>

                <div className="mt-3 flex items-center justify-between">
                    <span className="text-lg font-semibold">${product.price ?? "0.00"}</span>
                    <Link href={`/products/details/${product._id}`} className="btn btn-sm btn-primary">
                        See Details
                    </Link>
                </div>
            </div>
        </article>
    );
}
