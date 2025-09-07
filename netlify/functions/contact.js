/**
 * Netlify Function for handling contact form submissions
 * This replaces the Next.js API route for static deployments
 */

// Verify Cloudflare Turnstile token
const verifyTurnstileToken = async (token) => {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  
  if (!secretKey) {
    console.error('TURNSTILE_SECRET_KEY not found in environment variables');
    return false;
  }
  
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });

    const data = await response.json();
    console.log('Turnstile verification result:', data);
    return data.success;
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return false;
  }
};

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { name, email, phone, subject, message, privacy, turnstileToken } = body;

    console.log('Contact form submission received:', {
      name,
      email,
      subject,
      hasPhone: !!phone,
      hasMessage: !!message,
      privacy,
      hasTurnstileToken: !!turnstileToken
    });

    // Validation
    if (!name || !email || !subject || !message || !privacy) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Alle Pflichtfelder müssen ausgefüllt werden.' 
        }),
      };
    }

    // Turnstile CAPTCHA validation
    if (!turnstileToken) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Sicherheitsprüfung fehlgeschlagen. Bitte bestätigen Sie, dass Sie kein Roboter sind.' 
        }),
      };
    }

    // Verify Turnstile token
    const isTurnstileValid = await verifyTurnstileToken(turnstileToken);
    if (!isTurnstileValid) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'CAPTCHA-Überprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.' 
        }),
      };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' 
        }),
      };
    }

    // Create contact form data object
    const contactForm = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone: phone || '',
      subject,
      message,
      privacy,
      submittedAt: new Date().toISOString(),
      userAgent: event.headers['user-agent'] || '',
      ip: event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown'
    };

    // Log the form submission (since we can't save to filesystem)
    console.log('✅ Contact form submitted successfully:', {
      id: contactForm.id,
      name: contactForm.name,
      email: contactForm.email,
      subject: contactForm.subject,
      submittedAt: contactForm.submittedAt,
      ip: contactForm.ip
    });

    // In a production environment, you could:
    // 1. Send to a webhook service like Zapier
    // 2. Save to a database like Supabase/Airtable
    // 3. Send via email service like SendGrid
    // 4. Store in Netlify Forms (requires HTML form with data-netlify attribute)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Ihre Nachricht wurde erfolgreich gesendet.',
        id: contactForm.id 
      }),
    };

  } catch (error) {
    console.error('❌ Error processing contact form:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' 
      }),
    };
  }
};