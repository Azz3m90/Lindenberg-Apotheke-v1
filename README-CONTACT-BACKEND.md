# Contact Form Backend Documentation

## Overview

The contact form backend system allows visitors to submit contact forms through the website, and provides an admin interface to manage submitted forms.

## Features

- ✅ Form submission with validation
- ✅ Data storage in JSON format
- ✅ Admin interface to view forms
- ✅ Export forms to CSV
- ✅ Delete individual forms
- ✅ Real-time form submission
- ✅ Error handling and user feedback

## API Endpoints

### POST /api/contact

Submits a new contact form.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+49 123 456789",
  "subject": "beratung",
  "message": "Hello, I need help with...",
  "privacy": true
}
```

**Response:**

```json
{
  "message": "Ihre Nachricht wurde erfolgreich gesendet.",
  "id": "1703123456789abc123"
}
```

### GET /api/admin/contact-forms

Retrieves all submitted contact forms (admin only).

**Headers:**

```
Authorization: Bearer admin-token-2024
```

**Response:**

```json
{
  "forms": [...],
  "count": 5,
  "message": "5 Kontaktformulare gefunden."
}
```

### DELETE /api/admin/contact-forms?id={formId}

Deletes a specific contact form (admin only).

## Admin Interface

Access the admin interface at: `/admin/contact-forms`

**Login Credentials:**

- Password: `lindenberg2024`

**Features:**

- View all submitted forms
- Delete individual forms
- Export forms to CSV
- Refresh forms list
- Secure logout functionality

## Data Storage

Forms are stored in `/data/contact-forms.json` with the following structure:

```json
[
  {
    "id": "1703123456789abc123",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+49 123 456789",
    "subject": "beratung",
    "message": "Hello, I need help with...",
    "privacy": true,
    "submittedAt": "2024-01-15T10:30:00.000Z"
  }
]
```

## Security Notes

⚠️ **Important for Production:**

1. **Authentication**: The current admin authentication is basic. For production, implement proper authentication (JWT, OAuth, etc.)

2. **Data Protection**: The `/data/` directory is added to `.gitignore` to prevent sensitive data from being committed.

3. **HTTPS**: Ensure the website uses HTTPS in production to protect form data in transit.

4. **Rate Limiting**: Consider adding rate limiting to prevent spam submissions.

5. **Email Notifications**: You may want to add email notifications when forms are submitted.

## Email Integration (Optional)

To add email notifications when forms are submitted, you can integrate with services like:

- SendGrid
- Mailgun
- Nodemailer with SMTP
- AWS SES

Example integration point in `/src/pages/api/contact.ts`:

```javascript
// After saving form
await sendEmailNotification(contactForm);
```

## Backup Recommendations

- Regular backups of `/data/contact-forms.json`
- Consider moving to a database for production (PostgreSQL, MongoDB, etc.)
- Log form submissions for audit trails

## Build Configuration

The application supports two build modes:

### Development & Production with API Routes

```bash
npm run dev      # Development server with API routes
npm run build    # Production build with API routes
npm start        # Start production server
```

### Static Export (without API routes)

```bash
npm run build:static  # Build static files for hosting (no backend functionality)
```

**Note**: The contact form backend only works with the regular build mode, not with static export.

## Testing

Test the system:

1. Start the development server: `npm run dev`
2. Go to `http://localhost:3002/kontakt` and submit a form
3. Check `http://localhost:3002/admin/contact-forms` to see the submitted form
4. Try exporting to CSV and deleting forms

## Subject Options

The form includes these subject options:

- `beratung` - Allgemeine Beratung
- `termin` - Termin vereinbaren
- `medikation` - Medikationsfrage
- `reise` - Reiseberatung
- `kompression` - Kompressionsstrümpfe
- `verleih` - Verleih-Service
- `app` - App-Support
- `sonstiges` - Sonstiges
