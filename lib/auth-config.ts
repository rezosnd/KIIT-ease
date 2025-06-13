import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db"; // Your MongoDB clientPromise
import { generateReferralCode } from "@/lib/auth";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: "free",
          referralCode: generateReferralCode(profile.name),
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      },
    }),
  ],
  callbacks: {
    // Use token for session fields, not user (user is only present on sign-in)
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string || "free";
        session.user.referralCode = token.referralCode as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      // On sign-in, user is defined
      if (user) {
        token.id = user.id;
        token.role = user.role || "free";
        token.referralCode = user.referralCode;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};


