/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "muskansindhu.tech",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
