/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'firebasestorage.googleapis.com'
            },
            {
                hostname: 'user-images.githubusercontent.com'
            }
        ]
    }
};

export default nextConfig;
