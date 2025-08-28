// import { getProductById } from "@/lib/getProductById";
import Container from "@/components/Container";
import { getProductById } from "@/lib/getProductsById";
import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
    const { id } = params;
    const product = await getProductById(id);

    if (!product) return <div>Product not found</div>;

    return (
        <Container>


            <main className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">{product.name}</h1>

                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/3 relative h-96">
                        <Image
                            src={product.photoURL}
                            alt={product.name}
                            fill
                            className="object-cover rounded-2xl"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col gap-3">
                        <p className="text-2xl font-semibold text-green-600">{product.name}</p>

                        <div className="flex flex-wrap gap-2 my-4 items-center">
                            <p className="text-base font-semibold bg-gray-100 w-fit px-3 py-1 rounded-full"><span className="font-normal">Price:</span> ${product.price}</p>
                            <p className="text-base font-semibold bg-gray-100 w-fit px-3 py-1 rounded-full"><span className="font-normal">Status:</span> {product.status}</p>
                            <p className="text-base font-semibold bg-gray-100 w-fit px-3 py-1 rounded-full"><span className="font-normal">Brand:</span> {product.brand}</p>
                        </div>


                        <div>

                            <div className="border-b-2 border-gray-200">
                                <h4 className="text-xl font-medium mb-1">Key Features</h4>
                            </div>

                            <div className="my-3">
                                <p>Model: {product.model}</p>
                                <p>Color: {product.color}</p>
                                <p>Material: {product.material}</p>
                                <p>Warranty: {product.warranty}</p>
                            </div>

                        </div>


                        <div className="flex items-center gap-2">
                            <p>
                                Color:
                            </p>

                            <button className="p-2 border border-green-400 rounded hover:bg-gray-100">
                                {product.color}
                            </button>
                        </div>

                        <div className="border-b-2 border-gray-200">
                            <h4 className="text-2xl mt-2 mb-2">Detailed Specifications</h4>
                        </div>
                        <p>{product.description}</p>


                    </div>
                </div>
            </main>

        </Container>
    );
}
