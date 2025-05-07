import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Adiciona suporte para exportação estática
  trailingSlash: true, // Garante que os caminhos terminem com "/"
  images: {
    unoptimized: true, // Desabilita otimização de imagens para exportação estática
  },
};

export default nextConfig;
