import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();
type IUser = {
  name: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
};
export default async function crearUsuarioEnDb(user: IUser) {
  const uri = process.env.MONGODB_URI;
  const dbName = "Cluster0";
  const collectionName = "users";
  const client = new MongoClient(uri);
  try {
    await client.connect();
    //Creamos nuevo usuario
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const newUser = {
      name: user.name,
      email: user.email,
      image: user.image,
      dinero: 10000,
      rol: "user",
    };
    await collection.insertOne(newUser);
  } finally {
    await client.close();
  }
}
