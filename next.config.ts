import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/patientView_registroMedico', // reemplaza con el nombre real
  images: {
    unoptimized: true,
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
