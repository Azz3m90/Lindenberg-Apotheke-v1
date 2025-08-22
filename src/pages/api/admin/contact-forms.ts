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

const DATA_FILE = path.join(process.cwd(), 'data', 'contact-forms.json');

// Read existing forms
const readForms = (): ContactFormData[] => {
  if (!fs.existsSync(DATA_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DATA_FILE, 'utf8');
  return JSON.parse(data);
};

// Delete a form by ID
const deleteForm = (id: string): boolean => {
  const forms = readForms();
  const filteredForms = forms.filter(form => form.id !== id);
  if (filteredForms.length === forms.length) {
    return false; // Form not found
  }
  fs.writeFileSync(DATA_FILE, JSON.stringify(filteredForms, null, 2));
  return true;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Simple authentication check - in production, use proper authentication
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== 'Bearer admin-token-2024') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'GET') {
    try {
      const forms = readForms();
      // Sort by submission date, newest first
      forms.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
      
      res.status(200).json({
        forms,
        count: forms.length,
        message: `${forms.length} Kontaktformulare gefunden.`
      });
    } catch (error) {
      console.error('Error reading contact forms:', error);
      res.status(500).json({ error: 'Fehler beim Laden der Formulare.' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const { id } = req.query;
      if (!id || typeof id !== 'string') {
        return res.status(400).json({ error: 'Form ID ist erforderlich.' });
      }

      const success = deleteForm(id);
      if (!success) {
        return res.status(404).json({ error: 'Formular nicht gefunden.' });
      }

      res.status(200).json({ message: 'Formular erfolgreich gelöscht.' });
    } catch (error) {
      console.error('Error deleting contact form:', error);
      res.status(500).json({ error: 'Fehler beim Löschen des Formulars.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}