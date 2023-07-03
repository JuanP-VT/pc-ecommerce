import { AuthHeader } from "../types/order";
import { User } from "../types/user";
import { dbClient } from "./db";
import { Collection, ObjectId, WithId } from "mongodb";

export default async function getUserFromHeader(header: AuthHeader) {
  const cut = header.authorization.replace("Bearer ", "");
  // Extract the numbers before and after the colon
  try {
    const _id = new ObjectId(cut.split(":")[0]);
    const collection = dbClient.db("Cluster0").collection("users");
    const user = (await collection.findOne({
      _id: _id,
    })) as User | null;
    if (user) return user;
    return null;
  } catch (err) {
    throw new Error("Error getting user from headers");
  }
}
