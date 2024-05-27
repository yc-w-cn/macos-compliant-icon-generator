const isProduction = process.env.NODE_ENV === "production";
const baseUrl = "/macos-compliant-icon-generator"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProduction ? baseUrl : undefined,
  assetPrefix: isProduction ? baseUrl : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
