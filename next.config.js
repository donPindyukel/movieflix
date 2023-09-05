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
        destination: 'http://193.124.112.51:4200/api/:path*',
      },
      {
        source: '/uploads/:path*',
        destination: 'http://193.124.112.51:4200/uploads/:path*',
      },
    ]
  },
}

module.exports = nextConfig
