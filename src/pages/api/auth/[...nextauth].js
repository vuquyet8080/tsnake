import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import TwitterProviders from "next-auth/providers/twitter";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    TwitterProviders({
      clientId: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY,
      clientSecret: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET,
    }),

    // ...add more providers here
  ],
};

export default NextAuth({
  ...authOptions,
  secret: process.env.NEXT_PUBLIC_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(
        " user, account, profile, email, credentials ",
        user,
        account,
        profile,
        email,
        credentials,
      );
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        return true;
      } else {
        // Return false to display a default error message
        return false;
        // Or you can return a URL to redirect to:
        // return '/unauthorized'
      }
    },
  },
});
