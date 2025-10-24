// API Configuration
// API key is now securely stored in Vercel environment variables
// Accessed via serverless function at /api/mgnrega

const API_CONFIG = {
    // Use Vercel serverless function (no API key exposed to client)
    BASE_URL: '/api/mgnrega',
    
    // Fallback: For local development, you can use direct API
    // Comment this out before deploying to production
    // DIRECT_API_URL: 'https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722',
    // DIRECT_API_KEY: 'YOUR_KEY_HERE', // Only for local testing
    
    FORMAT: 'json'
};
