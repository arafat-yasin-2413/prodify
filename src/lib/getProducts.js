// // import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

// import dbConnect, { collectionNamesObj } from "./dbConnect";

// export async function getAllProducts() {
// 	const collection = dbConnect(collectionNamesObj.productsCollection);
// 	const products = await collection.find({}).toArray();

// 	// Convert _id to string for frontend
// 	return products.map((p) => ({
// 		...p,
// 		_id: p._id.toString(),
// 	}));
// }

import dbConnect, { collectionNamesObj } from "./dbConnect";

export async function getAllProducts() {
	try {
		const collection = await dbConnect(
			collectionNamesObj.productsCollection
		);
		const products = await collection.find({}).toArray();

		// Convert _id to string for frontend
		return products.map((p) => ({
			...p,
			_id: p._id.toString(),
		}));
	} catch (error) {
		console.error("Failed to fetch products:", error);
		return [];
	}
}
