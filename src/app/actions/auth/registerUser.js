"use server";
import bcrypt from "bcrypt";

import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
	const usersCollection = await dbConnect(collectionNamesObj.usersCollection);

	const { email, password } = payload;
	if (!email || !password) {
		return { success: false, message: "Missing fields" };
	}

	const user = await usersCollection.findOne({ email });

	if (!user) {
		const hashedPassword = await bcrypt.hash(password, 10);
		payload.password = hashedPassword;
		const result = await usersCollection.insertOne(payload);

		result.insertedId = result.insertedId.toString();
		return result;

		// return {
		// 	success: true,
		// 	insertedId: result.insertedId.toString(),
		// 	message: "User registered successfully",
		// };
	}

    return null;
};
