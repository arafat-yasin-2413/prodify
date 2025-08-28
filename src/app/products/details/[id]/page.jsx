// import { getProductById } from "@/lib/getProductById";
import { getProductById } from "@/lib/getProductsById";
import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
    const { id } = params;
    const product = await getProductById(id);

    if (!product) return <div>Product not found</div>;

    return (
        <main className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 relative h-96">
                    <Image
                        src={product.photoURL}
                        alt={product.name}
                        fill
                        className="object-cover rounded-2xl"
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p><strong>Brand:</strong> {product.brand}</p>
                    <p><strong>Model:</strong> {product.model}</p>
                    <p><strong>Color:</strong> {product.color}</p>
                    <p><strong>Material:</strong> {product.material}</p>
                    <p><strong>Warranty:</strong> {product.warranty}</p>
                    <p><strong>Status:</strong> {product.status}</p>
                    <p className="text-xl font-semibold mt-3">${product.price}</p>
                </div>
            </div>
        </main>
    );
}
