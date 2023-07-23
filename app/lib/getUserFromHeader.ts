/**
 * Retrieves a User object from the database based on the provided AuthHeader.
 * @param header An object of type AuthHeader ({ authorization: string }).
 * @returns User object or null if it does not find one.
 * If given a valid auth string '<ValidUserID>', it searches for the user ID in the database and returns it,
 * or returns null if it does not find a matching user.
 */
import { AuthHeader } from "../types/order";
import { User } from "../types/user";
import { dbClient } from "./db";
import { ObjectId } from "mongodb";
import CryptoJS from "crypto-js";

export default async function getUserFromHeader(header: AuthHeader) {
  const decryptID = CryptoJS.AES.decrypt(
    header.authorization,
    process.env.ENCRYPTION_KEY
  );
  const stringifiedId = decryptID.toString(CryptoJS.enc.Utf8);
  try {
    const _id = new ObjectId(stringifiedId);
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
