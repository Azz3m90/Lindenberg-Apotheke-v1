import { NextApiRequest, NextApiResponse } from 'next';

/**
 * API Proxy for LAKT (Landesapothekerkammer Thüringen) Emergency Pharmacy Service
 * 
 * This endpoint acts as a proxy to fetch emergency pharmacy data from the LAKT API
 * and handles CORS, error responses, and timeout scenarios.
 * 
 * URL: https://www.lakt.de/api
 * Expected parameters: begin, end, token
 */

const LAKT_API_BASE_URL = 'https://www.lakt.de/api';
const API_TIMEOUT = 15000; // 15 seconds

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { begin, end, token } = req.query;

  // Validate required parameters
  if (!begin || !end || !token) {
    return res.status(400).json({ 
      error: 'Missing required parameters: begin, end, token' 
    });
  }

  // Construct LAKT API URL
  const laktApiUrl = `${LAKT_API_BASE_URL}?begin=${begin}&end=${end}&token=${token}`;
  
  console.log('🌐 Proxying request to LAKT API:', {
    url: laktApiUrl,
    begin,
    end,
    currentDate: new Date().toISOString()
  });

  try {
    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

    // Fetch data from LAKT API
    const response = await fetch(laktApiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/xml, text/xml',
        'User-Agent': 'Lindenberg-Apotheke-Website/1.0'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`❌ LAKT API error: HTTP ${response.status} ${response.statusText}`, {
        url: laktApiUrl,
        begin,
        end
      });
      
      // Provide more specific error messages
      if (response.status === 404) {
        return res.status(404).json({
          error: `LAKT API endpoint not found. The service might be temporarily unavailable or the date range (${begin} to ${end}) might be invalid.`
        });
      }
      
      return res.status(response.status).json({
        error: `LAKT API error: ${response.status} ${response.statusText}`
      });
    }

    // Get XML response text
    const xmlData = await response.text();
    
    // Set appropriate headers for XML response
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400'); // Cache for 1 hour
    
    console.log('✅ Successfully fetched data from LAKT API');
    
    // Return the XML data directly
    return res.status(200).send(xmlData);

  } catch (error) {
    console.error('❌ Error fetching from LAKT API:', error);
    
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        return res.status(408).json({ 
          error: 'Timeout: LAKT API did not respond within 15 seconds' 
        });
      }
      
      return res.status(500).json({
        error: `Network error: ${error.message}`
      });
    }
    
    return res.status(500).json({
      error: 'Unknown error occurred while fetching pharmacy data'
    });
  }
}