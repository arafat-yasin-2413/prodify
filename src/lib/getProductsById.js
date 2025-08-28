// import dbConnect, { collectionNamesObj } from "./dbConnect";
import { ObjectId } from "mongodb";
import dbConnect, { collectionNamesObj } from "./dbConnect";

export async function getProductById(id) {
  const collection = dbConnect(collectionNamesObj.productsCollection);

  const product = await collection.findOne({ _id: new ObjectId(id) });
  if (!product) return null;

  return {
    ...product,
    _id: product._id.toString(),
  };
}