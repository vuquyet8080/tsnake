import NextAuth from "next-auth";
import TwitterProviders from "next-auth/providers/twitter";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    TwitterProviders({
      clientId: "Mzs3FFTqhaBD5Peem5m627uvk",
      clientSecret: "u0w4cwgY0gm0rtaN9UGIDzjYf7tW7PJ6BC5wCoyO8xfO3z0OFG",
    }),
  ],
};

export default NextAuth({
  ...authOptions,
  secret: process.env.PUBLIC_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "twitter" && user) {
        account.user = user;
        account.profile = profile;
        account.user = user;
        account.email = email;
        account.credentials = credentials;

        return true;
      }
    },
    // async redirect({ url, baseUrl }) {
    //   console.log(" url, baseUrl", url, baseUrl);
    //   return baseUrl;
    // },
    async jwt({ token, account, user }) {
      if (account) {
        if (account.provider === "twitter") {
          token.twitterData = account;
          token.provider = account.provider;
        }
      }

      return token;
    },
    async session({ session, token }) {
      return { session, token };
    },
  },
});
