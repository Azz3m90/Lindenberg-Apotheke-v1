import { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layout';
// Import icons individually to avoid webpack issues
import { Mail, Phone, User, MessageCircle, Calendar } from 'lucide-react';

// Define custom icons for problematic imports to avoid webpack issues
const Trash2 = ({ className, ...props }: any) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

const RefreshCw = ({ className, ...props }: any) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

const Download = ({ className, ...props }: any) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const LogOut = ({ className, ...props }: any) => (
  <svg className={className} {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
);

interface ContactForm {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
  submittedAt: string;
}

export default function AdminContactForms() {
  const [forms, setForms] = useState<ContactForm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const ADMIN_PASSWORD = 'lindenberg2024'; // In production, use proper authentication

  const authenticate = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      localStorage.setItem('admin-auth', 'true');
      loadForms();
    } else {
      alert('Falsches Passwort');
    }
  };

  const logout = () => {
    if (confirm('Möchten Sie sich wirklich abmelden?')) {
      setIsAuthenticated(false);
      localStorage.removeItem('admin-auth');
      setForms([]);
      setPassword('');
    }
  };

  const loadForms = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/contact-forms', {
        headers: {
          'Authorization': 'Bearer admin-token-2024'
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setForms(data.forms);
      } else {
        setError('Fehler beim Laden der Formulare');
      }
    } catch (err) {
      setError('Verbindungsfehler');
    } finally {
      setLoading(false);
    }
  };

  const deleteForm = async (id: string) => {
    if (!confirm('Sind Sie sicher, dass Sie dieses Formular löschen möchten?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/contact-forms?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer admin-token-2024'
        }
      });

      if (response.ok) {
        setForms(forms.filter(form => form.id !== id));
      } else {
        alert('Fehler beim Löschen');
      }
    } catch (err) {
      alert('Verbindungsfehler');
    }
  };

  const exportToCSV = () => {
    const headers = ['Datum', 'Name', 'E-Mail', 'Telefon', 'Betreff', 'Nachricht'];
    const rows = forms.map(form => [
      new Date(form.submittedAt).toLocaleString('de-DE'),
      form.name,
      form.email,
      form.phone,
      form.subject,
      form.message.replace(/\n/g, ' ').replace(/,/g, ';')
    ]);

    const csvContent = [headers, ...rows]
      .map(row => row.map(field => `"${field}"`).join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `kontaktformulare-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (localStorage.getItem('admin-auth') === 'true') {
      setIsAuthenticated(true);
      loadForms();
    } else {
      setLoading(false);
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <Layout>
        <NextSeo title="Admin Login" noindex={true} />
        <section className="py-16 lg:py-24">
          <div className="container-custom max-w-md mx-auto">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8">
              <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Admin Login
              </h1>
              <div className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Admin Passwort"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  onKeyPress={(e) => e.key === 'Enter' && authenticate()}
                />
                <button
                  onClick={authenticate}
                  className="w-full btn btn-primary"
                >
                  Anmelden
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <NextSeo title="Kontaktformulare - Admin" noindex={true} />
      
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h1 className="heading-xl">Kontaktformulare ({forms.length})</h1>
            <div className="flex space-x-4">
              <button
                onClick={exportToCSV}
                className="btn btn-secondary flex items-center"
                disabled={forms.length === 0}
              >
                <Download className="w-4 h-4 mr-2" />
                CSV Export
              </button>
              <button
                onClick={loadForms}
                className="btn btn-primary flex items-center"
                disabled={loading}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Aktualisieren
              </button>
              <button
                onClick={logout}
                className="btn bg-red-600 hover:bg-red-700 text-white flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Abmelden
              </button>
            </div>
          </div>

          {loading && (
            <div className="text-center py-8">
              <div className="inline-block w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600">Lade Formulare...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {!loading && forms.length === 0 && !error && (
            <div className="text-center py-16">
              <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-xl text-gray-600">Keine Kontaktformulare vorhanden</p>
            </div>
          )}

          <div className="space-y-6">
            {forms.map((form) => (
              <div key={form.id} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{form.name}</h3>
                      <p className="text-sm text-gray-500 flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(form.submittedAt).toLocaleString('de-DE')}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => deleteForm(form.id)}
                    className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">{form.email}</span>
                  </div>
                  {form.phone && (
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="text-sm">{form.phone}</span>
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-1">Betreff:</div>
                  <div className="text-sm text-gray-900">{form.subject}</div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-700 mb-1">Nachricht:</div>
                  <div className="text-sm text-gray-900 bg-gray-50 rounded-lg p-3 whitespace-pre-wrap">
                    {form.message}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}