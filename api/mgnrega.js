// Vercel Serverless Function - API Proxy
// This hides your API key from the client

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow GET requests
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        // Get API key from environment variable (set in Vercel dashboard as "govapi")
        const API_KEY = process.env.govapi;
        
        if (!API_KEY) {
            res.status(500).json({ error: 'API key not configured' });
            return;
        }

        // Get query parameters from client request
        const { state, district, limit, offset } = req.query;

        // Build API URL
        const baseURL = 'https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722';
        const params = new URLSearchParams({
            'api-key': API_KEY,
            'format': 'json',
            'limit': limit || '100',
            'offset': offset || '0'
        });

        // Add filters if provided
        if (state) {
            params.append('filters[state_name]', state);
        }
        if (district) {
            params.append('filters[district_name]', district);
        }

        // Fetch from government API
        const apiURL = `${baseURL}?${params.toString()}`;
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error(`API returned status ${response.status}`);
        }

        const data = await response.json();

        // Cache for 1 hour
        res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
        
        // Return data to client
        res.status(200).json(data);

    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ 
            error: 'Failed to fetch data',
            message: error.message 
        });
    }
}
