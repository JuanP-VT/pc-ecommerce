/**
 * Searches for a product in the database based on the provided product ID.
 * @param id The ID of the product to search for.
 * @returns A Promise that resolves to a ProductWithId object if found, or null if not found.
 * This function makes a POST request to the specified API endpoint with the given product ID to retrieve the product information.
 */
import { Collection, MongoClient } from "mongodb";
import { config } from "dotenv";
import { User } from "../types/user";
config();
type Search = {
  email?: string | null;
  gitID?: string | null;
};
export default async function searchUserInDb({ email, gitID }: Search) {
  const uri = process.env.MONGODB_URI;
  const dbName = "Cluster0";
  const collectionName = "users";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //Buscar usuario en db
    const db = client.db(dbName);
    const collection = db.collection(collectionName) as Collection<User>;
    //Find by email, if email is not provided find by gitID
    if (email) {
      const user = (await collection.findOne({ email })) as User | null;
      return user;
    }
    if (gitID) {
      const user = (await collection.findOne({ gitID })) as User | null;
      return user;
    }
    return null;
  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
}
