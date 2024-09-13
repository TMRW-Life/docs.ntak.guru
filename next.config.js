/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/terminology/ntak-objects',
        destination: '/ntak-objects',
        permanent: true,
      },
      {
        source: '/terminology/constants',
        destination: '/constants',
        permanent: true,
      },
    ]
  },
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx'
})

module.exports = withNextra(nextConfig)