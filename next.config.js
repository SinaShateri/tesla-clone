/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals: false,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
};

module.exports = nextConfig;
