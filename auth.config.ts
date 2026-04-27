import type { NextAuthConfig } from "next-auth";

const AUTH_SECRET = "tagotha-demo-auth-secret-2026";

export const authConfig = {
  providers: [],
  secret: AUTH_SECRET,
  trustHost: true,
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      if (nextUrl.pathname.startsWith("/admin")) {
        return !!auth?.user;
      }

      return true;
    },
    jwt: async ({ token, user }) => {
      if (user) {
        token.sub = user.id;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }

      return session;
    }
  }
} satisfies NextAuthConfig;
