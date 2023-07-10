import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { config } from "dotenv";
import { AuthOptions } from "next-auth/core/types";
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

      const findUser = await searchUserInDb({
        email: user.email,
        gitID: user.id,
      });
      if (findUser === null) {
        const newUser = {
          name: user.name,
          email: user.email,
          gitID: user.id,
          image: user.image,
          cash: 10000,
        };
        await crearUsuarioEnDb(newUser);
      }
      return true;
    },
    async session({ token, session }) {
      if (token) {
        session.user._id = token._id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.rol = token.rol;
        session.user.image = token.picture;
        session.user.cash = token.cash;
      }

      return session;
    },
    async jwt({ token }) {
      const userDB = await searchUserInDb({
        email: token.email,
        gitID: token.sub,
      });
      if (!userDB) {
        return token;
      }
      const newToken: JWT = {
        _id: userDB._id.toString(),
        name: userDB.name,
        email: userDB.email,
        picture: userDB.image,
        rol: userDB.rol,
        cash: userDB.cash,
        items: userDB.items,
      };
      return newToken;
    },
  },
};

const handler = NextAuth(OPTIONS);
export { handler as GET, handler as POST };
