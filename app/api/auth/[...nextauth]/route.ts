import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { config } from "dotenv";
import { AuthOptions } from "next-auth/core/types";
import buscarEmailEnDb from "@/lib/buscarEmailEnDb";
import crearUsuarioEnDb from "@/lib/crearUsuarioEnDb";
config();
export const OPTIONS: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  callbacks: {
    async signIn({ user }) {
      //Verificamos email en base de datos, si el usuario autentificado no existe lo registramos
      const email =
        typeof user.email === "string"
          ? user.email
          : user.email === undefined
          ? "undefined"
          : "null";
      const emailEnDb = await buscarEmailEnDb(email);
      if (emailEnDb === null) {
        const newUser = {
          name: user.name,
          email: user.email,
          image: user.image,
          dinero: 100,
        };
        await crearUsuarioEnDb(newUser);
      }
      return true;
    },
  },
};

const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };
