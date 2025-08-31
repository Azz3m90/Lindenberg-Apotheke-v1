/**
 * Netlify Function to proxy LAKT API requests
 * This handles the API calls when deployed to Netlify
 */

const https = require('https');

const LAKT_API_BASE_URL = 'https://www.lakt.de/api';
const API_TIMEOUT = 15000; // 15 seconds

exports.handler = async (event, context) => {
  // Only allow GET requests
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Extract query parameters
  const params = event.queryStringParameters || {};
  const { begin, end, token } = params;

  // Validate required parameters
  if (!begin || !end || !token) {
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: 'Missing required parameters: begin, end, token' 
      })
    };
  }

  // Construct LAKT API URL
  const laktApiUrl = `${LAKT_API_BASE_URL}?begin=${begin}&end=${end}&token=${token}`;
  
  console.log('🌐 Proxying request to LAKT API:', {
    url: laktApiUrl,
    begin,
    end,
    currentDate: new Date().toISOString()
  });

  return new Promise((resolve) => {
    const request = https.get(laktApiUrl, {
      headers: {
        'Accept': 'application/xml, text/xml',
        'User-Agent': 'Lindenberg-Apotheke-Website/1.0'
      },
      timeout: API_TIMEOUT
    }, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        if (response.statusCode === 200) {
          console.log('✅ Successfully fetched data from LAKT API');
          resolve({
            statusCode: 200,
            headers: {
              'Content-Type': 'application/xml; charset=utf-8',
              'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Headers': 'Content-Type'
            },
            body: data
          });
        } else {
          console.error(`❌ LAKT API error: HTTP ${response.statusCode}`);
          resolve({
            statusCode: response.statusCode,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
              error: `LAKT API error: ${response.statusCode} ${response.statusMessage}`
            })
          });
        }
      });
    });

    request.on('error', (error) => {
      console.error('❌ Error fetching from LAKT API:', error);
      resolve({
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          error: `Network error: ${error.message}`
        })
      });
    });

    request.on('timeout', () => {
      request.destroy();
      console.error('❌ Request timeout');
      resolve({
        statusCode: 408,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          error: 'Timeout: LAKT API did not respond within 15 seconds'
        })
      });
    });
  });
};