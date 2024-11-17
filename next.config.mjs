const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/portfolio-v7/' : '',
  basePath: isProd ? '/portfolio-v7' : '',
  output: 'export'
};

export default nextConfig;