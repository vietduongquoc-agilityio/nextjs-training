import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/ui/dashboard/auth",
  //       permanent: false,
  //     },
  //   ];
  // },
};

export default nextConfig;
