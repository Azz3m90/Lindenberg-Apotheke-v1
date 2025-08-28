import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
  submittedAt: string;
  id: string;
}

interface TurnstileResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
  action?: string;
  cdata?: string;
}

const DATA_FILE = path.join(process.cwd(), 'data', 'contact-forms.json');

// Ensure data directory exists
const ensureDataDirectory = () => {
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
};

// Read existing forms
const readForms = (): ContactFormData[] => {
  ensureDataDirectory();
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
};

// Save form data
const saveForm = (formData: ContactFormData) => {
  const forms = readForms();
  forms.push(formData);
  fs.writeFileSync(DATA_FILE, JSON.stringify(forms, null, 2));
};

// Generate unique ID
const generateId = () => {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
};

// Verify Cloudflare Turnstile token
const verifyTurnstileToken = async (token: string): Promise<boolean> => {
  const secretKey = process.env.TURNSTILE_SECRET_KEY!;
  
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
    });

    const data: TurnstileResponse = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return false;
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, subject, message, privacy, turnstileToken } = req.body;

      // Validation
      if (!name || !email || !subject || !message || !privacy) {
        return res.status(400).json({ 
          error: 'Alle Pflichtfelder müssen ausgefüllt werden.' 
        });
      }

      // Turnstile CAPTCHA validation
      if (!turnstileToken) {
        return res.status(400).json({ 
          error: 'Sicherheitsprüfung fehlgeschlagen. Bitte bestätigen Sie, dass Sie kein Roboter sind.' 
        });
      }

      // Verify Turnstile token
      const isTurnstileValid = await verifyTurnstileToken(turnstileToken);
      if (!isTurnstileValid) {
        return res.status(400).json({ 
          error: 'CAPTCHA-Überprüfung fehlgeschlagen. Bitte versuchen Sie es erneut.' 
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ 
          error: 'Bitte geben Sie eine gültige E-Mail-Adresse ein.' 
        });
      }

      const contactForm: ContactFormData = {
        id: generateId(),
        name,
        email,
        phone: phone || '',
        subject,
        message,
        privacy,
        submittedAt: new Date().toISOString(),
      };

      saveForm(contactForm);

      // In a real application, you might want to send an email notification here
      // await sendEmailNotification(contactForm);

      res.status(200).json({ 
        message: 'Ihre Nachricht wurde erfolgreich gesendet.',
        id: contactForm.id 
      });
    } catch (error) {
      console.error('Error saving contact form:', error);
      res.status(500).json({ 
        error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.' 
      });
    }
  } else if (req.method === 'GET') {
    // For admin purposes - get all forms
    try {
      const forms = readForms();
      res.status(200).json(forms);
    } catch (error) {
      console.error('Error reading contact forms:', error);
      res.status(500).json({ error: 'Fehler beim Laden der Formulare.' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}