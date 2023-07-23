/**
 * Validates the authenticity of the provided authentication header.
 * @param {object} authHeader - An object of type AuthHeader ({ authorization: string }).
 * @returns {boolean} - A boolean indicating whether the authentication header is valid or not.
 *
 * A valid authentication header should be of the form: "<ValidUserID>"
 * This function extracts and decrypts the userID from the authentication header.
 * It then searches for the user in the "users" collection of the "Cluster0" database using the decrypted userID.
 * If the user is found, it returns true, indicating that the authentication header is valid.
 * If the user is not found or any error occurs during the process, it returns false.
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
