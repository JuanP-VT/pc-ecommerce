/**
 * Creates a new user in the MongoDB database with the provided user information.
 *
 * @param {IUser} user - The user object containing name, email, image, and optional gitID.
 */
import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
type IUser = {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
  gitID?: string;
};
export default async function crearUsuarioEnDb(user: IUser) {
  const uri = process.env.MONGODB_URI;
  const dbName = "Cluster0";
  const collectionName = "users";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //Create new user
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const newUser = {
      name: user.name,
      email: user.email,
      image: user.image,
      cash: 10000, // Free cash so new users can test my app
      rol: "user",
      gitID: user.gitID ?? null,
      items: [],
    };
    await collection.insertOne(newUser);
  } finally {
    await client.close();
  }
}
