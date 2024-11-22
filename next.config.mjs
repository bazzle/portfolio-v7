const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  basePath: isProd ? '' : '',
  output: 'export',
  env: {
    ASSET_PREFIX: isProd ? '' : '',
  }
};

export default nextConfig;