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
  },
  async redirects() {
    return [
      {
        source: '/', // A rota que será acessada
        destination: '/home', // A rota para onde será redirecionado
        permanent: false, // Se for permanente (301) ou temporário (302)
      },
    ];
  },

}
 

export default nextConfig;
