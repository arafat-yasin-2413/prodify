import Container from "@/components/Container";
import ProductCard from "../products/components/ProductCard";


async function getProducts() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export default async function Home() {
    const products = await getProducts();

    return (
        <Container>
            <section className="py-10">
                <h2 className="text-2xl text-green-600 font-bold mb-6">Featured Products</h2>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </section>
        </Container>
    );
}
