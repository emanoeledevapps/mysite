/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
      },
      {
        hostname: "user-images.githubusercontent.com",
      },
      {
        hostname: "localhost",
      },
      {
        hostname: "strapi.edevapps.com.br",
      },
    ],
  },
};

export default nextConfig;
