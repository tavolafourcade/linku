/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    unoptimized: true
  },
  output         : 'export',
  reactStrictMode: true,
  webpack        : (config, { isServer }) => {
    if(!isServer)
      // Replace 'fs' module with an empty object in client-side bundles
      config.resolve.fallback = { fs: false }

    return config
  }
}
export default nextConfig
