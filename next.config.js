/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "m.media-amazon.com",
    ],
  },
  env: {
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
    SESSION_CART_KEY: process.env.SESSION_CART_KEY,
    AUTH_HEADER_SECRET: process.env.AUTH_HEADER_SECRET,
  },
};
