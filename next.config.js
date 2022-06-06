/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['media.kitsu.io', 'upload.wikimedia.org'],
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}

module.exports = nextConfig
