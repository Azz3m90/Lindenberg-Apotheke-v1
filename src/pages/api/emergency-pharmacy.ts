import type { NextApiRequest, NextApiResponse } from 'next';
import { getApiDateRange } from '../../utils/apiUtils';
import { config, getLaktApiToken } from '../../utils/config';

interface PharmacyData {
  id: string;
  name: string;
  address: string;
  phone: string;
  date: string;
  timeStart: string;
  timeEnd: string;
  status: 'current' | 'upcoming';
  lat?: string;
  lng?: string;
  city?: string;
  postalCode?: string;
  fax?: string;
  website?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get date range for API request
    const dateRange = getApiDateRange(14, true);
    const token = getLaktApiToken();

    const LAKT_API_BASE_URL = 'https://www.lakt.de/api';
    const apiUrl = `${LAKT_API_BASE_URL}?token=${token}&begin=${dateRange.begin}&end=${dateRange.end}`;
    
    console.log(`Fetching emergency pharmacy data from LAKT API...`);
    
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/xml',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      signal: AbortSignal.timeout(15000) // 15 seconds timeout
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const xmlText = await response.text();
    
    // Parse XML response using regex (Node.js compatible)
    const pharmacies: PharmacyData[] = [];
    const now = new Date();
    const currentDateStr = now.toLocaleDateString("de-DE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    // Extract each VEVENT element (LAKT API returns VEVENT format)
    const eventMatches = xmlText.match(/<VEVENT[^>]*>[\s\S]*?<\/VEVENT>/g) || [];
    
    eventMatches.forEach((eventXml, index) => {
      const extractValue = (tag: string): string => {
        const match = eventXml.match(new RegExp(`<${tag}>([^<]*)<\/${tag}>`));
        return match ? match[1].trim() : '';
      };

      const name = extractValue('NAME');
      const street = extractValue('STREET');
      const zip = extractValue('ZIP');
      const city = extractValue('CITY');
      const phone = extractValue('PHONE');
      const lat = extractValue('LAT');
      const lng = extractValue('LNG');
      const dtstart = extractValue('DTSTART');
      const dtend = extractValue('DTEND');

      if (name && dtstart) {
        // Parse dates (format: YYYYMMDDTHHMMSS or YYYY-MM-DDTHH:MM:SS)
        const parseDateTime = (dateStr: string) => {
          // Handle format: 20241201T080000
          if (dateStr.includes('T') && !dateStr.includes('-')) {
            const year = dateStr.substring(0, 4);
            const month = dateStr.substring(4, 6);
            const day = dateStr.substring(6, 8);
            const hour = dateStr.substring(9, 11);
            const minute = dateStr.substring(11, 13);
            return new Date(`${year}-${month}-${day}T${hour}:${minute}:00`);
          }
          return new Date(dateStr);
        };

        const startTime = parseDateTime(dtstart);
        const endTime = parseDateTime(dtend);
        
        // Format date to DD.MM.YYYY
        const formattedDate = startTime.toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });
        
        // Determine if this is the current emergency service
        const isCurrent = now >= startTime && now <= endTime;
        const status: 'current' | 'upcoming' = isCurrent ? 'current' : 'upcoming';

        pharmacies.push({
          id: `pharmacy-${index}-${Date.now()}`,
          name,
          address: `${street}, ${zip} ${city}`.trim(),
          phone: phone || '',
          date: formattedDate,
          timeStart: startTime.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          timeEnd: endTime.toLocaleTimeString("de-DE", {
            hour: "2-digit",
            minute: "2-digit",
          }),
          status,
          lat,
          lng,
          city,
          postalCode: zip,
          fax: '',
          website: ''
        });
      }
    });

    return res.status(200).json({
      success: true,
      pharmacies,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error fetching emergency pharmacy data:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch emergency pharmacy data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}