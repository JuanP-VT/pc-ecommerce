/**
 * @param authHeader is an object of type AuthHeader ({authorization: string})
 * @returns Boolean if the argument is valid or not
 *
 * A correct string is of the form:
 * "<ValidUserID>"
 */
import { dbClient } from "./db";
import { ObjectId } from "mongodb";

import CryptoJS from "crypto-js";
type AuthHeader = {
  authorization: string;
};

export default async function validateAuthHeader(authHeader: AuthHeader) {
  //Extract and decrypt userID
  const userID = authHeader.authorization;
  const decryptedBytes = CryptoJS.AES.decrypt(
    userID,
    process.env.ENCRYPTION_KEY
  );
  const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
  //find the user in database
  const collection = dbClient.db("Cluster0").collection("users");
  try {
    const _id = new ObjectId(decryptedString);
    const find = await collection.findOne({ _id });
    if (find == null) {
      return false;
    }
    return true;
  } catch (err) {
    throw new Error(
      "Failed connection to user database trying to validate header"
    );
  }
}
