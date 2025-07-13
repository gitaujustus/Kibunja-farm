/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // already default in Next 13+
    compiler: {
      removeConsole: true, // removes console.logs in production
    }
  }
  

export default nextConfig;

// import bundleAnalyzer from '@next/bundle-analyzer';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   swcMinify: true,
//   compiler: {
//     removeConsole: true,
//   },
// };

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// export default withBundleAnalyzer(nextConfig);
