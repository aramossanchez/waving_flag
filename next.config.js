/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  reactStrictMode: false,
  swcMinify: true,
  basePath: isProduction ? '/waving_flag' : '',
};

module.exports = nextConfig;