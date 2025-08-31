/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization for better SEO (only for production builds)
  // API routes are needed for contact form functionality
  ...(process.env.BUILD_STATIC === 'true' ? { output: 'export' } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Note: With 'output: export', rewrites don't work automatically
  // These paths should be handled by your hosting platform's redirects
  // or by creating actual static pages at these paths
  
  // For non-static builds, we need rewrites for legacy URLs
  ...(process.env.BUILD_STATIC !== 'true' ? {
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
        // Note: Removed the /api rewrite to let our API proxy handle it
      ]
    }
  } : {})
}

module.exports = nextConfig