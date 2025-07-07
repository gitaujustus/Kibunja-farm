/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true, // already default in Next 13+
    compiler: {
      removeConsole: true, // removes console.logs in production
    }
  }
  

export default nextConfig;
