import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/patientView_registroMedico',
  images: {
    unoptimized: true,
  },
   eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
