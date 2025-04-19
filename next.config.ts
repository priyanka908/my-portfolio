import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    domains:["assets.aceternity.com", "raw.githubusercontent.com"],
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
};
 module.exports= nextConfig

export default nextConfig;
