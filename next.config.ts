import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Включает статическую сборку
  trailingSlash: true,
  images: { unoptimized: true }, // Отключает оптимизацию изображений (иначе нужна CDN)
};

export default nextConfig;
