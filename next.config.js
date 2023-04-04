/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "10028",
        pathname: "**"
      }
    ]
  }
};

module.exports = nextConfig;
