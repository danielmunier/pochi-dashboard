import path from 'path';

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
  typescript: {
    ignoreBuildErrors: true
  }

}
 

export default nextConfig;
