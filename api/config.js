/**
 * Vercel API endpoint to serve portfolio config
 * Uses environment variables instead of config.json
 * 
 * Environment variables to set in Vercel:
 * - PORTFOLIO_EMAIL
 * - PORTFOLIO_PHONE
 * - PORTFOLIO_LINKEDIN
 * - WEB3FORMS_KEY
 */

export default function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Allow CORS for frontend
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');

  const config = {
    email: process.env.PORTFOLIO_EMAIL || 'your-email@example.com',
    phone: process.env.PORTFOLIO_PHONE || '+1 000-000-0000',
    linkedin: process.env.PORTFOLIO_LINKEDIN || 'your-linkedin',
    web3formsKey: process.env.WEB3FORMS_KEY || '',
  };

  res.status(200).json(config);
}
