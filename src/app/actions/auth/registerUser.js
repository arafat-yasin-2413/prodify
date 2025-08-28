// latest

"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async ({ name, email, password }) => {
	try {
		const usersCollection = await dbConnect(
			collectionNamesObj.usersCollection
		);

		if (!email || !password || !name) {
			return { success: false, message: "Missing fields" };
		}

		const existingUser = await usersCollection.findOne({ email });
		if (existingUser) {
			return { success: false, message: "User already exists" };
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const result = await usersCollection.insertOne({
			name,
			email,
			password: hashedPassword,
		});

		return {
			success: true,
			message: "User registered successfully",
			insertedId: result.insertedId.toString(),
		};
	} catch (err) {
		return { success: false, message: "Server error: " + err.message };
	}
};





// previous

// "use server";
// import bcrypt from "bcrypt";

// import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

// export const registerUser = async (payload) => {
// 	const usersCollection = await dbConnect(collectionNamesObj.usersCollection);

// 	const { email, password } = payload;
// 	if (!email || !password) {
// 		return { success: false, message: "Missing fields" };
// 	}

// 	const user = await usersCollection.findOne({ email });

// 	if (!user) {
// 		const hashedPassword = await bcrypt.hash(password, 10);
// 		payload.password = hashedPassword;
// 		const result = await usersCollection.insertOne(payload);

// 		result.insertedId = result.insertedId.toString();
// 		return result;

// 		// return {
// 		// 	success: true,
// 		// 	insertedId: result.insertedId.toString(),
// 		// 	message: "User registered successfully",
// 		// };
// 	}

//     return null;
// };
