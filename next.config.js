/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.kitsu.io', 'upload.wikimedia.org'],
  },
}

module.exports = nextConfig
