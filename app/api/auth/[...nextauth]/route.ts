import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { config } from "dotenv";
import { AuthOptions } from "next-auth/core/types";
import buscarEmailEnDb from "../../../lib/buscarEmailEnDb";
import crearUsuarioEnDb from "../../../lib/crearUsuarioEnDb";
import { JWT } from "next-auth/jwt";
import searchUserInDb from "../../../lib/searchUserInDb";

config();
export const dynamic = "force-dynamic";
export const OPTIONS: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
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
    async signIn({ user, credentials }) {
      //Google users are going to be identified by their email, since github does not always provide an email
      //Github users are going to be identified by their github id
      if (user.email) {
        const emailEnDb = await buscarEmailEnDb(user.email);
        if (emailEnDb === null) {
          const newUser = {
            name: user.name,
            email: user.email,
            image: user.image,
            cash: 10000,
          };
          await crearUsuarioEnDb(newUser);
        }
        return true;
      }
      //If no email provided it means the user is logging form github
      const searchUser = await searchUserInDb(user.id);

      if (searchUser == null) {
        const newUser = {
          name: user.name,
          email: user.email,
          image: user.image,
          cash: 10000,
          gitId: user.id,
        };
        await crearUsuarioEnDb(newUser);
      }
      return true;
    },
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.rol = token.rol;
        session.user.image = token.picture;
        session.user.cash = token.cash;
        session.user.items = token.items;
      }
      return session;
    },
    async jwt({ token, user }) {
      const usuarioEnDb = await buscarEmailEnDb(token.email);
      if (!usuarioEnDb) {
        return token;
      }
      const newToken: JWT = {
        id: usuarioEnDb._id.toString(),
        name: usuarioEnDb.name,
        email: usuarioEnDb.email,
        picture: usuarioEnDb.image,
        rol: usuarioEnDb.rol,
        cash: usuarioEnDb.cash,
        items: usuarioEnDb.items,
      };
      return newToken;
    },
  },
};

const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };
