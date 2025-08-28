import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import { authOptions } from "@/lib/authOptions";
// import { authOptions } from "@/lib/authOptions";



export async function GET(req) {
  try {
    const productsCollection = dbConnect(collectionNamesObj.productsCollection);

    // top 4 product
    const products = await productsCollection.find().limit(4).toArray();

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("API GET /api/products error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
	try {
		const session = await getServerSession(authOptions);
		if (!session) {
			return NextResponse.json(
				{ error: "Unauthorized" },
				{ status: 401 }
			);
		}

		const data = await req.json();
		const {
			name,
			brand,
			description,
			author,
			price,
			status,
			model,
			warranty,
			color,
			material,
			photoURL,
		} = data;

		if (
			!name ||
			!brand ||
			!description ||
			!author ||
			price == null ||
			!status
		) {
			return NextResponse.json(
				{ error: "Missing required fields" },
				{ status: 400 }
			);
		}

		const priceInt = parseInt(price, 10);
		if (Number.isNaN(priceInt)) {
			return NextResponse.json(
				{ error: "Price must be an integer" },
				{ status: 400 }
			);
		}

		const allowedStatus = ["in-stock", "stock-out"];
		if (!allowedStatus.includes(status)) {
			return NextResponse.json(
				{ error: "Invalid status" },
				{ status: 400 }
			);
		}

		
		const productsCollection = await dbConnect(
			collectionNamesObj.productsCollection
		);

		const productDoc = {
			name,
			brand,
			description,
			author,
			price: priceInt,
			status,
			model: model || "",
			warranty: warranty || "",
			color: color || "",
			material: material || "",
			photoURL: photoURL || "",
			createdAt: new Date(),
		};

		const result = await productsCollection.insertOne(productDoc);

		return NextResponse.json(
			{ success: true, insertedId: result.insertedId },
			{ status: 201 }
		);
	} catch (err) {
		console.error("API /api/products error:", err);
		return NextResponse.json({ error: "Server error" }, { status: 500 });
	}
}
