/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  poweredByHeader: false,
  images: {
    domains: ['i.imgur.com'],
  },
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_ENV: process.env.REACT_APP_ENV,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://193-124-112-51.sslip.io/api/:path*',
      },
      {
        source: '/uploads/:path*',
        destination: 'https://193-124-112-51.sslip.io/uploads/:path*',
      },
    ]
  },
}

module.exports = nextConfig
