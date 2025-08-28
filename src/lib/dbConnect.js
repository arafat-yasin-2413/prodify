

import { MongoClient } from "mongodb";

export const collectionNamesObj = {
	usersCollection: "users",
	productsCollection: "products",
};

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

let client;
let clientPromise;

if (!clientPromise) {
	client = new MongoClient(uri);
	clientPromise = client.connect();
}

export default async function dbConnect(collectionName) {
	const client = await clientPromise;
	return client.db(process.env.DB_NAME).collection(collectionName);
}



















// final

// import { MongoClient, ServerApiVersion } from "mongodb";

// export const collectionNamesObj = {
// 	usersCollection: "users",
// 	productsCollection: "products",
// };

// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

// if (!uri) throw new Error("Please add your Mongo URI to .env.local");

// let cachedClient = global.mongoClient;
// let cachedDb = global.mongoDb;

// if (!cachedClient) {
// 	cachedClient = new MongoClient(uri, {
// 		serverApi: {
// 			version: ServerApiVersion.v1,
// 			strict: true,
// 			deprecationErrors: true,
// 		},
// 	});
// 	cachedDb = cachedClient.db(process.env.DB_NAME);

// 	// store in global for reuse
// 	global.mongoClient = cachedClient;
// 	global.mongoDb = cachedDb;
// }

// export default async function dbConnect(collectionName) {
// 	// connect once
// 	if (!cachedClient.isConnected?.()) await cachedClient.connect();
// 	return cachedDb.collection(collectionName);
// }

// latest

// import { MongoClient, ServerApiVersion } from "mongodb";

// export const collectionNamesObj = {
// 	usersCollection: "users",
// 	productsCollection: "products",
// };

// let client;
// let clientPromise;

// const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

// if (!uri) throw new Error("Please add your Mongo URI to .env.local");

// if (!client) {
// 	client = new MongoClient(uri, {
// 		serverApi: {
// 			version: ServerApiVersion.v1,
// 			strict: true,
// 			deprecationErrors: true,
// 		},
// 	});
// 	clientPromise = client.connect();
// }

// export default async function dbConnect(collectionName) {
// 	await clientPromise;
// 	return client.db(process.env.DB_NAME).collection(collectionName);
// }

// previous

// import { MongoClient, ServerApiVersion } from "mongodb"

// export const collectionNamesObj = {
//     usersCollection : "users", productsCollection: "products",
// }

// export default function dbConnect(collectionName) {

//     const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

//     // Create a MongoClient with a MongoClientOptions object to set the Stable API version
//     const client = new MongoClient(uri, {
//       serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//       }
//     });

//     return client.db(process.env.DB_NAME).collection(collectionName)

// }
