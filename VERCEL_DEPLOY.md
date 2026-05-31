# 🚀 Deploying to Vercel

Your portfolio is ready to deploy on Vercel with secure credential management!

## Quick Setup (5 minutes)

### 1. **Add Environment Variables to Vercel**

Go to your Vercel project:
- https://vercel.com/dashboard
- Select your portfolio project
- Go to **Settings** → **Environment Variables**

Add these 4 variables:

| Variable Name | Value |
|---------------|-------|
| `PORTFOLIO_EMAIL` | `venuchandaka513@gmail.com` |
| `PORTFOLIO_PHONE` | `+91 8499836938` |
| `PORTFOLIO_LINKEDIN` | `venu-chandaka-147n513` |
| `WEB3FORMS_KEY` | `4cdab42a-a546-4221-a7b7-160023d79f5a` |

**For each variable:**
1. Click **Add New**
2. Enter the name and value
3. Set scope to **Production**
4. Click **Save**

### 2. **Redeploy Your Project**

After adding environment variables:
1. Go to **Deployments** tab
2. Find your latest deployment
3. Click **...** (three dots)
4. Select **Redeploy**
5. Confirm **Redeploy**

That's it! Your portfolio will now use the credentials from Vercel's environment variables. ✅

---

## How It Works

1. **`config.js`** loads on the page
2. It tries to fetch from `/api/config` (Vercel API endpoint)
3. The **API endpoint** reads from Vercel's environment variables
4. Your contact info and form are populated dynamically

**Fallback:** If API is unavailable, it tries to load `config.json` locally

---

## File Structure

```
your-portfolio/
├── portfolio.html          ← Main page
├── config.js              ← Smart config loader
├── config.json            ← Local dev (in .gitignore)
├── config.json.example    ← Safe template
├── api/
│   └── config.js          ← Vercel API endpoint ⭐
├── .env                   ← Local reference
├── .env.example           ← Safe template
└── vercel.json            ← Vercel configuration
```

---

## Security Checklist

✅ **For GitHub Repository:**
- `config.json` is in `.gitignore` (not pushed)
- `.env` is in `.gitignore` (not pushed)
- Only `config.json.example` and `.env.example` are committed

✅ **For Vercel Deployment:**
- Environment variables are stored securely in Vercel
- Never exposed in code or logs
- Can be updated anytime in Vercel dashboard

❌ **Never:**
- Commit `config.json` with real credentials
- Push `.env` with real credentials
- Share environment variable values in chat/email

---

## Testing

### Local Development
Your portfolio still works locally:
1. Update `config.json` with your credentials
2. Open `portfolio.html` in browser
3. Everything loads from local `config.json`

### Production (Vercel)
After redeploy:
1. Visit your Vercel domain
2. Check contact info loads correctly
3. Try sending a test message
4. Verify all links work

### Debug
In browser console (F12), check:
```javascript
console.log(window.PORTFOLIO_CONFIG)
```

Should show your actual values, not defaults.

---

## Updating Credentials

To update your Web3Forms key or contact info:

1. Go to https://vercel.com/dashboard
2. Select your project → **Settings** → **Environment Variables**
3. Edit the variable
4. Click **Save**
5. **Redeploy** your project

Changes take effect on next deployment! 

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Contact info not showing | Redeploy the project |
| Form error "access key missing" | Check `WEB3FORMS_KEY` is set in Vercel |
| Old values still showing | Hard refresh browser (Ctrl+Shift+R) |
| Links not working | Verify values in Vercel env vars are correct |

---

## Advanced: Using Vercel CLI

If you want to test locally with Vercel environment variables:

```bash
# Install Vercel CLI
npm i -g vercel

# Link your project
vercel link

# Run locally with environment variables
vercel dev
```

This loads environment variables from Vercel and runs on http://localhost:3000

---

## Environment Variables Explained

| Variable | Purpose | Example |
|----------|---------|---------|
| `PORTFOLIO_EMAIL` | Your email in contact section | `your@email.com` |
| `PORTFOLIO_PHONE` | Your phone in contact section | `+91 9876543210` |
| `PORTFOLIO_LINKEDIN` | LinkedIn profile ID | `your-profile-id` |
| `WEB3FORMS_KEY` | Web3Forms API key | `4cdab42a-...` |

---

## Next Steps

✅ Add environment variables to Vercel  
✅ Redeploy your project  
✅ Test your live portfolio  
✅ Share your portfolio URL! 🎉

Your portfolio is now production-ready with secure credential management!
