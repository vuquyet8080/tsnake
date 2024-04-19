/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  env: {
    TWITTER_CLIENT_TOKEN: process.env.NEXT_PUBLIC_TWITTER_CLIENT_TOKEN,
    TWITTER_CONSUMER_SECRET: process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET,
    TWITTER_CLIENT_TOKEN: process.env.NEXT_PUBLIC_TWITTER_CLIENT_TOKEN,
    TWITTER_CLIENT_TOKEN_SECRET:
      process.env.NEXT_PUBLIC_TWITTER_CLIENT_TOKEN_SECRET,
    PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
