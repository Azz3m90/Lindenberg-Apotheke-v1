/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization for better SEO
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // SEO-friendly URL structure
  async rewrites() {
    return [
      {
        source: '/uber-uns/unsere-apotheke/',
        destination: '/about/pharmacy'
      },
      {
        source: '/uber-uns/unsere-leistungen/',
        destination: '/about/services'
      },
      {
        source: '/notdienst/kalender/',
        destination: '/emergency/calendar'
      },
      {
        source: '/kontakt/',
        destination: '/contact'
      }
    ]
  }
}

module.exports = nextConfig