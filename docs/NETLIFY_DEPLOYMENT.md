# Netlify Deployment Configuration

## Overview

This document explains how the Lindenberg-Apotheke website is configured for deployment on Netlify, specifically focusing on the emergency pharmacy API integration.

## API Endpoint Configuration

### Development vs Production

The application automatically detects the environment and uses the appropriate API endpoint:

- **Development (localhost)**: `/api` - Uses Next.js API routes
- **Production (Netlify)**: `/.netlify/functions/api` - Uses Netlify Functions

### Automatic Environment Detection

The `EmergencyPharmacyService.tsx` component detects the environment:

```javascript
const isNetlify =
  typeof window !== "undefined" &&
  (window.location.hostname.includes("netlify") ||
    window.location.hostname.includes(".app"));

const apiUrl = isNetlify
  ? `/.netlify/functions/api?begin=${beginParam}&end=${endParam}&token=${token}`
  : `/api?begin=${beginParam}&end=${endParam}&token=${token}`;
```

## Netlify Function Setup

### Function Location

- **Path**: `netlify/functions/api.js`
- **Endpoint**: `/.netlify/functions/api`

### Function Configuration

The Netlify function proxies requests to the LAKT API:

1. Validates required parameters (begin, end, token)
2. Makes HTTPS request to `https://www.lakt.de/api`
3. Returns XML data with appropriate headers
4. Handles errors and timeouts

### Headers Configuration

CORS headers are configured in `netlify.toml`:

```toml
[[headers]]
  for = "/.netlify/functions/*"
  [headers.values]
    Access-Control-Allow-Origin = "*"
    Access-Control-Allow-Headers = "Content-Type"
    Access-Control-Allow-Methods = "GET, POST, OPTIONS"
```

## Build Configuration

### netlify.toml Settings

```toml
[build]
  command = "npm run build"
  publish = "out"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "18"
```

### Static Export

The site is built as a static export using Next.js:

```json
"scripts": {
  "build": "next build",
  "build:netlify": "next build"
}
```

## Environment Variables

### Required Variables for Netlify

Add these to your Netlify environment variables:

```
# LAKT API Token
NEXT_PUBLIC_LAKT_API_TOKEN=0075e630f7ea1c1900a8bb186ccc7382b0f48608

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key
TURNSTILE_SECRET_KEY=your_secret_key

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Contact Email
CONTACT_EMAIL_TO=your_email@example.com
```

## Date Range Configuration

The API always uses a fixed date range:

- **Start**: 13th of the current month
- **End**: 27th of the next month

Example: `?begin=2025-08-13&end=2025-09-27`

## Retry Logic

The system implements a 3-attempt retry mechanism:

1. First attempt
2. If failed, wait 2 seconds, then retry
3. If failed again, wait 2 seconds, then final retry
4. Show error message if all attempts fail

## Session Storage

- Data is stored in `sessionStorage` instead of `localStorage`
- Cache automatically clears when browser is closed
- Prevents stale data across browser sessions

## Deployment Steps

1. **Push to GitHub**: Commit and push your changes
2. **Netlify Auto-Deploy**: Netlify automatically builds and deploys
3. **Environment Variables**: Ensure all environment variables are set in Netlify dashboard
4. **Test Function**: Visit `https://your-site.netlify.app/.netlify/functions/api?begin=2025-08-13&end=2025-09-27&token=YOUR_TOKEN`

## Troubleshooting

### 404 Error on API Endpoint

If you get a 404 error:

1. Check that `netlify/functions/api.js` exists
2. Verify the function is deployed (check Netlify Functions tab)
3. Ensure you're using `/.netlify/functions/api` not `/api` in production

### CORS Issues

If you encounter CORS errors:

1. Check `netlify.toml` headers configuration
2. Verify the Netlify function returns proper CORS headers
3. Test with browser DevTools Network tab

### Date Range Issues

If the date range is incorrect:

1. Check `getApiDateRange()` function in `src/utils/apiUtils.ts`
2. Verify it returns 13th of current month to 27th of next month
3. Check console logs for date calculation

## Testing

### Local Testing

```bash
npm run dev
# Visit http://localhost:3000/notdienst
```

### Production Testing

```bash
# After deployment to Netlify
# Visit https://your-site.netlify.app/notdienst
```

### Direct API Testing

```bash
# Test Netlify Function directly
curl "https://your-site.netlify.app/.netlify/functions/api?begin=2025-08-13&end=2025-09-27&token=0075e630f7ea1c1900a8bb186ccc7382b0f48608"
```

## Monitoring

Check Netlify Functions logs:

1. Go to Netlify Dashboard
2. Navigate to Functions tab
3. Click on `api` function
4. View real-time logs

## Support

For issues with:

- **LAKT API**: Contact LAKT support
- **Netlify Deployment**: Check Netlify documentation
- **Application Code**: Review this documentation and code comments
