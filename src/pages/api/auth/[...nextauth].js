import NextAuth from "next-auth";
import TwitterProviders from "next-auth/providers/twitter";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    TwitterProviders({
      // from Consumer Keys
      clientId: "kGRf2bwqTfpUDSx6bExHRuTz4",
      clientSecret: "zVumVPn3t7TNkZjvOFUv1Txc1DjtQLN01lYkZiHsdtEWSMd0XQ",
    }),
  ],
};

export default NextAuth({
  ...authOptions,
  secret: process.env.PUBLIC_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("profile", profile);
      console.log("account", account);
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
      console.log("user", user);
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
