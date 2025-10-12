/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Allow external images if you reference any; adjust as needed
      { protocol: 'https', hostname: '**' }
    ]
  }
};

export default nextConfig;
