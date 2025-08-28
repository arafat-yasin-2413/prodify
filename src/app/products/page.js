import { getAllProducts } from "@/lib/getProducts";
import ProductCard from "./components/ProductCard";
// import ProductCard from "@/components/ProductCard";

export default async function ProductsPage() {
	const products = await getAllProducts();

	return (
		<main className="container mx-auto p-4">
			<h1 className="text-2xl font-semibold mb-6">All Products</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{products.map((product) => (
					<ProductCard key={product._id} product={product} />
				))}
			</div>
		</main>
	);
}
