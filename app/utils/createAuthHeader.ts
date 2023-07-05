/**
 * @param userID unique string for every user in the database, is the _ID prop for MongoDB
 * @return a valid  authenticated header with encrypted ID
 * Encrypted ID is passed as authorization in the header
 */
type AuthHeader = {
  authorization: string;
};

import { config } from "dotenv";
import { AES } from "crypto-js";
export default function createAuthHeader(userID: string): AuthHeader {
  config();
  const key = process.env.ENCRYPTION_KEY;
  const encryptedID = AES.encrypt(userID, key);
  const stringifiedEncrypted = encryptedID.toString();
  const headers = {
    authorization: stringifiedEncrypted,
  };
  return headers;
}
