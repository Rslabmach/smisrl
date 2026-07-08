import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración necesaria para exportación estática
  output: 'export',
  assetPrefix: './',

  images: {
    // Necesario para exportación estática (no puedes usar el optimizador de imágenes de Next.js)
    unoptimized: true,
    
    // Tus configuraciones de seguridad
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;