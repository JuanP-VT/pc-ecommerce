import { MongoClient, ServerApiVersion } from "mongodb";
import { config } from "dotenv";
config();
// Database connection module
const uri = process.env.MONGODB_URI;
const dbClient = new MongoClient(uri, {
  maxPoolSize: 10,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function dbConnect() {
  try {
    await dbClient.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}
async function dbClose() {
  try {
    await dbClient.close();
    console.log("Closed MongoDB connection");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
}

export { dbClient, dbConnect, dbClose };
