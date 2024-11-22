const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  basePath: isProd ? '/br-web.me' : '',
  output: 'export',
  env: {
    ASSET_PREFIX: isProd ? '/<br-web.me>' : '',
  }
};

export default nextConfig;