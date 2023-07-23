/**
 * Create Authenticated Header
 *
 * This function generates a valid authenticated header with the encrypted user ID as the authorization token.
 * The encrypted ID is passed as the authorization in the header for secure authentication.
 *
 * @function
 * @param {string} userID - A unique string representing the user's ID in the database (e.g., MongoDB _id).
 * @returns {AuthHeader} An object containing the authenticated header with the encrypted user ID.
 *
 * @typedef {Object} AuthHeader - An object representing an authenticated header.
 * @property {string} authorization - The encrypted user ID used as the authorization token.
 *
 * @example
 * const userID = "user123"; 
 * const authHeader = createAuthHeader(userID);
 * console.log(authHeader);
 * // Output: { authorization: "encrypted_user_id_here" }
 */
type AuthHeader = {
  authorization: string;
};

import { config } from "dotenv";
import CryptoJS from "crypto-js";
export default function createAuthHeader(userID: string): AuthHeader {
  config();
  const key = process.env.ENCRYPTION_KEY;
  const encryptedID = CryptoJS.AES.encrypt(userID, key);
  const stringifiedEncrypted = encryptedID.toString();
  const headers = {
    authorization: stringifiedEncrypted,
  };
  return headers;
}
