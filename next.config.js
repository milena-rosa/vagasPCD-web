/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  redirects: async () => [
    {
      source: '/',
      destination: '/candidate',
      permanent: true,
    },
  ],
}

module.exports = nextConfig
