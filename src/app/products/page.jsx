import Container from "@/components/Container";
import ProductsGrid from "@/components/ProductsGrid";
import { getAllProducts } from "@/lib/getProducts";

export default async function ProductsPage() {
    let products = [];
    try {
        products = await getAllProducts();
    } catch (err) {
        console.error("Failed to fetch products:", err);
        products = [];
    }

    return (
        <Container>
            <main className="container mx-auto p-4">
                <h1 className="text-2xl text-green-600 font-semibold mb-6">
                    All Products
                </h1>

                <ProductsGrid products={products} />
            </main>
        </Container>
    );
}
