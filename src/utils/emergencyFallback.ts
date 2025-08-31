/**
 * Fallback emergency pharmacy information for when the API is unavailable
 * This provides static contact information that users can use to find emergency services
 */

export const EMERGENCY_FALLBACK_INFO = {
  hotline: {
    number: "116 117",
    label: "Bundesweite Notdienst-Hotline",
    description: "Kostenlose 24/7 Hotline für den ärztlichen Bereitschaftsdienst"
  },
  localEmergency: {
    number: "03677 888888",
    label: "Lindenberg-Apotheke Ilmenau",
    description: "Direkte Hotline während der Öffnungszeiten"
  },
  alternativeServices: [
    {
      name: "Apotheken-Notdienstfinder",
      url: "https://www.aponet.de/apotheke/notdienstsuche",
      description: "Offizielle Notdienstsuche der deutschen Apotheken"
    },
    {
      name: "LAKT Notdienst",
      url: "https://www.lakt.de/notdienst",
      description: "Landesapothekerkammer Thüringen - Notdienstplan"
    }
  ],
  staticMessage: `
    <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
      <div class="flex">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium text-yellow-800">
            Notdienst-Information temporär nicht verfügbar
          </h3>
          <div class="mt-2 text-sm text-yellow-700">
            <p>Die automatische Notdienstanzeige ist momentan nicht erreichbar.</p>
            <p class="mt-2">Bitte nutzen Sie eine der folgenden Alternativen:</p>
            <ul class="list-disc list-inside mt-2">
              <li><strong>Notdienst-Hotline:</strong> <a href="tel:116117" class="font-bold underline">116 117</a></li>
              <li><strong>Online-Suche:</strong> <a href="https://www.aponet.de/apotheke/notdienstsuche" target="_blank" class="underline">aponet.de</a></li>
              <li><strong>LAKT Thüringen:</strong> <a href="https://www.lakt.de/notdienst" target="_blank" class="underline">lakt.de/notdienst</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
};

/**
 * Returns a user-friendly error message with helpful alternatives
 */
export function getEmergencyFallbackMessage(): string {
  return EMERGENCY_FALLBACK_INFO.staticMessage;
}

/**
 * Checks if we should use fallback data based on multiple failed attempts
 */
export function shouldUseFallback(failedAttempts: number): boolean {
  return failedAttempts >= 2;
}