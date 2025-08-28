import Container from "@/components/Container";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import Link from "next/link";


async function getProducts() {
    const productsCollection = await dbConnect(collectionNamesObj.productsCollection);
    const products = await productsCollection.find().limit(4).toArray();
    return products;
}

export default async function TopProducts() {
    const products = await getProducts();

    return (

        
        <Container>
            <section className="py-10">
                <h2 className="text-2xl text-green-600 font-bold mb-6">Featured Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map(product => (
                        <article key={product._id} className="card bg-base-100 shadow-md rounded-2xl overflow-hidden">
                            <div className="relative w-56 h-56">
                                {/* <Image
                    src={imgSrc}
                    alt={product.name || "Product"}
                    fill
                    className="object-cover rounded-lg"
                /> */}

                                <img src={product.photoURL} alt={product.name || "product"} className="object-cover rounded-lg" />
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
                    ))}
                </div>
            </section>
        </Container>
    );
}
