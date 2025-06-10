// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // ✅ 꼭 빈 문자열
  assetPrefix: './', // ✅ 상대 경로 지정 (중요)
  images: {
    unoptimized: true, // ✅ export 시 필수
  },
  reactStrictMode: true,
};

export default nextConfig;
