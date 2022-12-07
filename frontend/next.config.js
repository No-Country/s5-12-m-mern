/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'walkncare-api.s3.sa-east-1.amazonaws.com'
      },
    ],
  },
}

module.exports = nextConfig
