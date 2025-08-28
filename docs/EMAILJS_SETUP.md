# EmailJS Setup Guide for Lindenberg Apotheke

## Overview

EmailJS is now integrated with your contact form to send email notifications when someone submits a message. Here's how to complete the setup.

## Current Status

✅ **Service Created**: service_lw7cpra (Gmail)
⏳ **Template**: Needs to be created
⏳ **Public Key**: Needs to be obtained

## Step-by-Step Setup

### Step 1: Create an Email Template

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/
2. **Navigate to "Email Templates"**
3. **Click "Create new template"**
4. **Configure the template** as follows:

#### Template Settings:

- **Name**: Contact Form
- **Template ID**: Will be auto-generated (copy this!)

#### Email Subject:

```
Neue Kontaktanfrage: {{subject}}
```

#### Email Content (HTML):

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background-color: #006b3f;
        color: white;
        padding: 20px;
        text-align: center;
      }
      .content {
        background-color: #f9f9f9;
        padding: 20px;
        margin-top: 20px;
        border-radius: 5px;
      }
      .field {
        margin-bottom: 15px;
      }
      .label {
        font-weight: bold;
        color: #006b3f;
      }
      .value {
        margin-top: 5px;
        padding: 10px;
        background-color: white;
        border-left: 3px solid #006b3f;
      }
      .footer {
        margin-top: 20px;
        padding: 15px;
        background-color: #f0f0f0;
        text-align: center;
        font-size: 12px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Neue Kontaktanfrage über die Website</h2>
      </div>

      <div class="content">
        <div class="field">
          <div class="label">Name:</div>
          <div class="value">{{from_name}}</div>
        </div>

        <div class="field">
          <div class="label">E-Mail:</div>
          <div class="value">
            <a href="mailto:{{from_email}}">{{from_email}}</a>
          </div>
        </div>

        <div class="field">
          <div class="label">Telefon:</div>
          <div class="value">{{from_phone}}</div>
        </div>

        <div class="field">
          <div class="label">Betreff:</div>
          <div class="value">{{subject}}</div>
        </div>

        <div class="field">
          <div class="label">Nachricht:</div>
          <div class="value" style="white-space: pre-wrap;">{{message}}</div>
        </div>
      </div>

      <div class="footer">
        Diese E-Mail wurde automatisch über das Kontaktformular der
        Lindenberg-Apotheke Website generiert.
      </div>
    </div>
  </body>
</html>
```

#### To Email Settings:

- **To Email**: {{to_email}}
- **To Name**: Lindenberg Apotheke
- **From Email**: {{from_email}}
- **From Name**: {{from_name}}
- **Reply To**: {{reply_to}}

### Step 2: Configure Auto-Reply (Optional)

You can also create an auto-reply template to send confirmation to users:

1. **Create another template** called "Auto Reply"
2. **Email Subject**:

```
Vielen Dank für Ihre Nachricht - Lindenberg-Apotheke
```

3. **Email Content**:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #333;
      }
      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }
      .header {
        background-color: #006b3f;
        color: white;
        padding: 30px;
        text-align: center;
      }
      .content {
        padding: 30px;
      }
      .message {
        background-color: #f0f9f4;
        padding: 20px;
        border-radius: 5px;
        margin: 20px 0;
      }
      .contact-info {
        background-color: #f9f9f9;
        padding: 20px;
        margin: 20px 0;
        border-radius: 5px;
      }
      .footer {
        text-align: center;
        color: #666;
        font-size: 12px;
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #ddd;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Lindenberg-Apotheke Ilmenau</h1>
        <p>Ihre Gesundheit ist unser Anliegen</p>
      </div>

      <div class="content">
        <h2>Vielen Dank für Ihre Nachricht!</h2>

        <p>Sehr geehrte/r {{from_name}},</p>

        <p>
          wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei
          Ihnen melden - in der Regel innerhalb von 24 Stunden während unserer
          Geschäftszeiten.
        </p>

        <div class="message">
          <h3>Ihre Anfrage:</h3>
          <p><strong>Betreff:</strong> {{subject}}</p>
          <p><strong>Nachricht:</strong><br />{{message}}</p>
        </div>

        <div class="contact-info">
          <h3>Bei dringenden Anliegen erreichen Sie uns:</h3>
          <p>📞 <strong>Telefon:</strong> 03677 888888</p>
          <p>📧 <strong>E-Mail:</strong> kontakt@lindenberg-apotheke.de</p>
          <p>📍 <strong>Adresse:</strong> Mühlstraße 1, 98693 Ilmenau</p>

          <h4>Öffnungszeiten:</h4>
          <p>
            Mo-Fr: 7:00 - 18:00 Uhr<br />
            Sa: 9:00 - 12:00 Uhr
          </p>
        </div>

        <p>
          Mit freundlichen Grüßen<br />
          Ihr Team der Lindenberg-Apotheke
        </p>
      </div>

      <div class="footer">
        <p>
          Dies ist eine automatisch generierte E-Mail. Bitte antworten Sie nicht
          direkt auf diese Nachricht.
        </p>
        <p>© 2024 Lindenberg-Apotheke Ilmenau | www.lindenberg-apotheke.de</p>
      </div>
    </div>
  </body>
</html>
```

### Step 3: Get Your Public Key

1. Go to **Account** → **API Keys** in EmailJS Dashboard
2. Copy your **Public Key**
3. Keep your **Private Key** secure (don't use it in frontend code!)

### Step 4: Update Environment Variables

Update your `.env.local` file:

```bash
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_lw7cpra
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here  # From Step 1
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here    # From Step 3

# Email recipient for contact form
CONTACT_EMAIL_TO=kontakt@lindenberg-apotheke.de        # Change to your email
```

### Step 5: Test Your Setup

1. **Save your template** in EmailJS
2. **Update** `.env.local` with your actual values
3. **Restart** the development server:
   ```bash
   npm run dev
   ```
4. **Test** the contact form at http://localhost:3001/kontakt

## Features Implemented

### ✅ What's Working:

- **Email sending** integrated with contact form
- **Fallback handling** if EmailJS is not configured
- **Template variables** for all form fields
- **Error handling** that doesn't block form submission
- **Console logging** for debugging

### 📧 Email Template Variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{from_phone}}` - Sender's phone (optional)
- `{{subject}}` - Selected subject
- `{{message}}` - Message content
- `{{to_email}}` - Recipient email
- `{{reply_to}}` - Reply-to address

## Testing Checklist

1. ✅ EmailJS service is created (service_lw7cpra)
2. ⏳ Email template is created and saved
3. ⏳ Template ID is added to `.env.local`
4. ⏳ Public key is added to `.env.local`
5. ⏳ Recipient email is configured
6. ⏳ Form sends test email successfully
7. ⏳ Email is received in inbox

## Troubleshooting

### Email Not Sending:

1. **Check browser console** for errors
2. **Verify all environment variables** are set correctly
3. **Check EmailJS dashboard** for quota/limits
4. **Ensure template is active** in EmailJS

### Common Issues:

- **"Template not found"**: Check template ID is correct
- **"Unauthorized"**: Verify public key is correct
- **No email received**: Check spam folder, verify recipient email
- **Gmail blocking**: May need to use app-specific password

### EmailJS Limits (Free Plan):

- 200 emails per month
- 2 templates
- Limited to 50KB per request

## Security Notes

⚠️ **Important Security Considerations:**

- ✅ Public key is safe to use in frontend
- ❌ Never expose private key in frontend code
- ✅ Form data is validated server-side first
- ✅ EmailJS calls are non-blocking (won't break form)

## Production Deployment

When deploying to production:

1. **Add environment variables** to your hosting platform:

   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables

2. **Use production email**:

   - Update `CONTACT_EMAIL_TO` to real pharmacy email

3. **Consider upgrading EmailJS plan** for more emails/month

## Support Links

- **EmailJS Documentation**: https://www.emailjs.com/docs/
- **EmailJS Dashboard**: https://dashboard.emailjs.com/
- **Template Examples**: https://www.emailjs.com/docs/examples/
- **API Reference**: https://www.emailjs.com/docs/sdk/
