/**
 * Configuration loader for portfolio credentials
 * 
 * PRIORITY:
 * 1. Try API endpoint (for Vercel deployment)
 * 2. Fall back to config.json (for local development)
 * 3. Use defaults (if neither available)
 */

const DEFAULT_CONFIG = {
  email: 'your-email@example.com',
  phone: '+1 000-000-0000',
  linkedin: 'your-linkedin',
  web3formsKey: ''
};

window.PORTFOLIO_CONFIG = DEFAULT_CONFIG;

(async function loadConfig() {
  try {
    // Try API endpoint first (works on Vercel)
    const apiPath = window.location.hostname === 'localhost' 
      ? 'http://localhost:3000/api/config' 
      : '/api/config';
    
    const apiResponse = await fetch(apiPath);
    if (apiResponse.ok) {
      window.PORTFOLIO_CONFIG = await apiResponse.json();
      console.log('✓ Config loaded from API endpoint');
      return;
    }
  } catch (apiError) {
    console.log('ℹ API endpoint not available, trying config.json...');
  }

  try {
    // Fall back to config.json (for local development)
    const jsonResponse = await fetch('./config.json');
    if (jsonResponse.ok) {
      window.PORTFOLIO_CONFIG = await jsonResponse.json();
      console.log('✓ Config loaded from config.json');
      return;
    }
  } catch (jsonError) {
    console.warn('⚠️ config.json not found');
  }

  console.warn('⚠️ Using default configuration - update environment variables in Vercel');
})();

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.PORTFOLIO_CONFIG;
}
