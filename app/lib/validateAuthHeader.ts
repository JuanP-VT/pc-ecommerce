/**
 * Authorization header is composed of three strings
 * Bearer + userId + auth header secret in the form
 * Bearer userId:authSecret
 * First validate the auth secret, then connect to the database to check if
 * the provided id is valid
 */
import { AuthHeader } from "../types/order";
import { dbClient, dbConnect, dbClose } from "./db";
import { ObjectId } from "mongodb";
export default async function validateAuthHeader(authHeader: AuthHeader) {
  const [userId, authSecret] = authHeader.authorization.split(":");

  if (authSecret !== process.env.AUTH_HEADER_SECRET) {
    return false;
  }
  const collection = dbClient.db("Cluster0").collection("users");
  try {
    await dbConnect();
    const _id = new ObjectId(userId);
    const find = collection.findOne({ _id });
    if (find == null) {
      return false;
    }
    return true;
  } catch (err) {
    throw new Error(
      "Failed connection to user database trying to validate header"
    );
  } finally {
    await dbClose();
  }
}
