import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
export default async function searchUserInDb(gitId: string | undefined | null) {
  const uri = process.env.MONGODB_URI;
  const dbName = "Cluster0";
  const collectionName = "users";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //Buscar usuario en db
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const user = await collection.findOne({ gitId });
    return user;
  } finally {
    await client.close();
  }
}
