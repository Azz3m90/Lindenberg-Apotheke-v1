# Cloudflare Turnstile CAPTCHA Setup Guide

## Overview

The contact form on the website now uses Cloudflare Turnstile for CAPTCHA protection. This provides better security and user experience compared to traditional CAPTCHAs.

## Features Implemented

### 1. **Cloudflare Turnstile Integration**

- Replaced the simple math CAPTCHA with Cloudflare Turnstile
- Automatic verification without user interaction in most cases
- German language support
- Light theme matching website design

### 2. **Modal System for User Feedback**

- **Success Modal**: Green notification when message is sent successfully
- **Error Modal**: Red notification for submission errors
- **Warning Modal**: Yellow notification for validation issues
- **Info Modal**: Blue notification for general information

### 3. **Server-side Verification**

- Token validation on the backend
- Protection against bot submissions
- Secure API endpoint verification

## Setup Instructions for Production

### Step 1: Get Cloudflare Turnstile Keys

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Sign up or log in to your account
3. Navigate to **Turnstile** section in the sidebar
4. Click **"Add site"**
5. Configure your site:
   - **Site name**: Lindenberg-Apotheke
   - **Domains**: Add multiple domains (one per line):
     ```
     localhost
     127.0.0.1
     lindenberg-apotheke.de
     www.lindenberg-apotheke.de
     your-staging-domain.vercel.app
     ```
   - **Widget Mode**: Managed (recommended)
   - **Widget Type**: Visible (shows the checkbox)

**Note**: Adding `localhost` and `127.0.0.1` allows you to test with the same production keys locally!

### Step 2: Update Environment Variables

Replace the test keys in `.env.local` with your production keys:

```bash
# Production keys from Cloudflare
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_actual_site_key_here
TURNSTILE_SECRET_KEY=your_actual_secret_key_here
```

**Important**:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is public and safe to expose in frontend code
- `TURNSTILE_SECRET_KEY` must remain secret and only be used server-side

### Step 3: Deploy Configuration

#### For Vercel:

1. Go to your project settings in Vercel
2. Navigate to Environment Variables
3. Add both keys as production environment variables

#### For Other Hosting Providers:

- Add the environment variables according to your hosting provider's documentation
- Ensure the variables are available during build time

## Testing

### Production Keys Active

The website now uses production Cloudflare Turnstile keys for real CAPTCHA protection.

### Test Keys Reference (For Development Only)

If you need to use test keys during development:

- **Always passes**: `1x00000000000000000000AA` / `1x0000000000000000000000000AA`
- **Always blocks**: `2x00000000000000000000AB` / `2x0000000000000000000000000AB`
- **Always challenges**: `3x00000000000000000000FF` / `3x0000000000000000000000000FF`

### Testing with Production Keys Locally

Production keys are configured and work with `localhost` domain:

1. Update your `.env.local` with production keys
2. Restart your development server
3. Test at http://localhost:3001/kontakt
4. The production CAPTCHA will work locally!

### Testing Checklist:

1. **Navigate to** http://localhost:3001/kontakt or http://127.0.0.1:3001/kontakt
2. **Fill out the form fields**:
   - Name (required)
   - Email (required)
   - Phone (optional)
   - Subject (required)
   - Message (required)
3. **Complete the CAPTCHA challenge**
4. **Check privacy agreement**
5. **Submit the form**
6. **Verify the modal displays**:
   - ✅ Success modal for successful submission
   - ⚠️ Warning modal if CAPTCHA not completed
   - ❌ Error modal for network/server errors

## Modal Messages

The system shows different modals for various scenarios:

- **Success**: "Nachricht erfolgreich gesendet!" - Shows when form is submitted successfully
- **CAPTCHA Required**: "Bitte bestätigen Sie, dass Sie kein Roboter sind" - When CAPTCHA is not completed
- **CAPTCHA Failed**: "CAPTCHA-Überprüfung fehlgeschlagen" - When verification fails
- **Network Error**: "Ein Fehler ist aufgetreten" - For connection issues
- **Validation Error**: "Alle Pflichtfelder müssen ausgefüllt werden" - For missing fields

## Security Benefits

1. **Bot Protection**: Prevents automated spam submissions
2. **No User Friction**: Most legitimate users won't need to solve puzzles
3. **Privacy-Focused**: Cloudflare Turnstile is designed with privacy in mind
4. **Accessibility**: Better accessibility than traditional CAPTCHAs
5. **Mobile-Friendly**: Works seamlessly on all devices

## Troubleshooting

### CAPTCHA Not Showing

- Check if environment variables are loaded correctly
- Verify the site key is correct
- Check browser console for errors

### Verification Always Fails

- Ensure the secret key matches the site key
- Check if the domain is correctly configured in Cloudflare
- Verify the API endpoint is accessible

### Modal Not Appearing

- Check if the Modal component is imported correctly
- Verify state management in the contact form
- Check browser console for JavaScript errors

## Customization Options

You can customize the Turnstile widget in `/src/pages/kontakt.tsx`:

```javascript
<Turnstile
  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
  options={{
    theme: "light", // 'light', 'dark', or 'auto'
    size: "normal", // 'normal' or 'compact'
    language: "de", // Language code
    appearance: "always", // 'always', 'execute', or 'interaction-only'
  }}
/>
```

## Support

For issues with:

- **Cloudflare Turnstile**: Visit [Cloudflare Support](https://developers.cloudflare.com/turnstile/)
- **Implementation**: Check the code in `/src/pages/kontakt.tsx` and `/src/pages/api/contact.ts`
- **Modal Component**: Review `/src/components/Modal.tsx`
