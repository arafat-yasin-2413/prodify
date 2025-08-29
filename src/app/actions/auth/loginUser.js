"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export const loginUser = async(payload) => {
    const { email, password } = payload;

    const usersCollection = await dbConnect(collectionNamesObj.usersCollection);
    const user = await usersCollection.findOne({ email });

    if(!user) return null;

    const isPasswordOk = await bcrypt.compare(password, user.password);
    if(!isPasswordOk) return null;

    return user;
}










// previous
// "use server";
// import bcrypt from "bcrypt";
// import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

// export const loginUser = async(payload)=>{
//     const {email, password} = payload; 

//     const usersCollection = dbConnect(collectionNamesObj.usersCollection);
//     const user = await usersCollection.findOne({email});


//     if(!user) return null;

//     const isPasswordOk = await bcrypt.compare(user.password, password);
//     if(!isPasswordOk) return null;

//     return user;
// }
