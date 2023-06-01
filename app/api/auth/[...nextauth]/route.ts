import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/mongoClient";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import { config } from "dotenv";
import { AuthOptions } from "next-auth/core/types";

config();
export const options: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "database",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
};

const handler = NextAuth(options);
export { handler as GET, handler as POST };
