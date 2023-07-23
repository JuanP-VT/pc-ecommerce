/**
 * Searches for a user in the MongoDB database based on the provided email.
 *
 * @param {string | undefined | null} email - The email to search for in the database.
 * @returns {object | null} The user object if found, otherwise returns null.
 */
import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
export default async function buscarEmailEnDb(
  email: string | undefined | null
) {
  if (typeof email === undefined || typeof email === null) {
    return null;
  }
  const uri = process.env.MONGODB_URI;
  const dbName = "Cluster0";
  const collectionName = "users";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //Buscar usuario en db
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const user = await collection.findOne({ email });
    return user;
  } finally {
    await client.close();
  }
}
