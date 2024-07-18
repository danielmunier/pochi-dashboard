/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.discordapp.com',
            pathname: '**',
          },
        ],
      },
      reactStrictMode: false,
};

export default nextConfig;