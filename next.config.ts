import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained build for the Docker image (see Dockerfile).
  output: "standalone",
};

export default nextConfig;
