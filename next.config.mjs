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
        hostname: "192.168.10.205",
      },
    ],
  },
};

export default nextConfig;
