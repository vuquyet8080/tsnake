/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  env: {
    NEXT_PUBLIC_TWITTER_CONSUMER_KEY:
      process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY,
    NEXT_PUBLIC_TWITTER_CONSUMER_SECRET:
      process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET,
    NEXT_PUBLIC_SECRET: process.env.NEXT_PUBLIC_SECRET,
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
