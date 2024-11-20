const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  basePath: isProd ? '/portfolio-v7' : '',
  output: 'export',
  env: {
    ASSET_PREFIX: isProd ? '/<portfolio-v7>' : '',
  }
};

export default nextConfig;