# Environment Configuration Guide

## Overview
Your credentials are now properly managed through configuration files:
- **`.env`** — Stores your actual credentials (⚠️ **NEVER** commit)
- **`config.json`** — Browser-accessible config generated from `.env` (⚠️ **NEVER** commit)
- **`config.json.example`** — Safe template (✅ **OK** to commit)
- **`.gitignore`** — Prevents accidental exposure of secrets

## Quick Start

### 1. After Cloning or Setting Up
```bash
# Copy the example config
cp config.json.example config.json
```

### 2. Update `config.json` with Your Actual Credentials
Edit `config.json` and replace placeholders:

```json
{
  "email": "venuchandaka513@gmail.com",
  "phone": "+91 8499836938",
  "linkedin": "venu-chandaka-147n513",
  "web3formsKey": "YOUR_ACTUAL_WEB3FORMS_KEY_HERE"
}
```

### 3. Get Your Web3Forms Access Key
1. Go to https://web3forms.com (sign up free)
2. Copy your **Access Key** from the dashboard
3. Paste it in `config.json` as the `web3formsKey` value

### 4. Update `.env` File (Optional - for reference)
For personal reference, you can also keep `.env` updated:
```env
PORTFOLIO_EMAIL=venuchandaka513@gmail.com
PORTFOLIO_PHONE=+91 8499836938
PORTFOLIO_LINKEDIN=venu-chandaka-147n513
WEB3FORMS_KEY=YOUR_WEB3FORMS_KEY
```

## File Structure

```
d:\venu-chandaka-portfolio\
├── portfolio.html           ← Main page (loads from config.json)
├── config.js               ← Loads config.json at runtime
├── config.json             ← YOUR ACTUAL KEYS (⚠️ in .gitignore)
├── config.json.example     ← Safe template (✅ commit this)
├── .env                    ← Reference file (in .gitignore)
├── .env.example            ← Safe template (✅ commit this)
├── .gitignore              ← Prevents committing secrets
└── ENV_SETUP.md            ← This file
```

## How It Works

1. Page loads `config.js`
2. `config.js` fetches `config.json` asynchronously
3. After loading, `window.PORTFOLIO_CONFIG` is populated
4. JavaScript initializes contact info from the config
5. Form uses the Web3Forms access key from config

## Security Checklist

✅ **DO:**
- Keep `config.json` in `.gitignore`
- Keep `.env` in `.gitignore`
- Never commit actual credentials
- Use strong API keys
- Rotate Web3Forms key if exposed

❌ **DON'T:**
- Commit `config.json` with real keys
- Share your Web3Forms key publicly
- Post credentials in issues/PRs
- Include credentials in git history

## Troubleshooting

### Issue: "Contact links not working"
**Fix:** Ensure `config.json` is in the root folder with correct values
```bash
# Verify the file exists
ls config.json

# Check the content
cat config.json
```

### Issue: "Form says access key missing"
**Fix:** Update `config.json` with valid Web3Forms key:
1. Go to web3forms.com
2. Copy your Access Key
3. Update `web3formsKey` in `config.json`

### Issue: "Can't see email/phone/LinkedIn"
**Fix:** Check browser console for errors
```javascript
// In browser console:
console.log(window.PORTFOLIO_CONFIG);
```

Should output:
```javascript
{
  "email": "venuchandaka513@gmail.com",
  "phone": "+91 8499836938", 
  "linkedin": "venu-chandaka-147n513",
  "web3formsKey": "4cdab42a-..."
}
```

## For Deployment

### GitHub Pages / Static Hosting
1. Keep `.env` and `config.json` in `.gitignore`
2. Upload `config.json` manually after pushing
3. Or use environment variables with a build step

### Vercel / Netlify
Set environment variables in project settings:
```
VITE_PORTFOLIO_EMAIL=your@email.com
VITE_PORTFOLIO_PHONE=+91 9876543210
VITE_WEB3FORMS_KEY=your_key_here
```

### Docker / Server Deployment
Mount `config.json` at runtime:
```bash
docker run -v ./config.json:/app/config.json portfolio-image
```

## Git Workflow Example

```bash
# Clone the repo
git clone <repo>
cd venu-chandaka-portfolio

# Copy and configure
cp config.json.example config.json
# Edit config.json with your credentials

# Verify .gitignore protects secrets
cat .gitignore  # Should include config.json and .env

# Start using
npm start  # or open in browser

# When pushing, verify no secrets leak
git diff --cached  # Should not show credentials
```

## Need Help?

1. **Web3Forms:** https://web3forms.com/docs
2. **Environment Variables:** https://12factor.net/config
3. **GitHub Secrets:** https://docs.github.com/en/actions/security-guides/encrypted-secrets

