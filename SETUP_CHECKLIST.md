# ⚙️ Setup Checklist

Complete these steps to get your portfolio working with proper credential management:

## ✅ Step-by-Step Setup

### 1. **Verify Files Created**
Ensure these files exist in your project folder:
- `config.json` ← Contains your actual credentials
- `config.json.example` ← Template (safe to share)
- `config.js` ← Loads config.json
- `.env` ← Your reference file
- `.env.example` ← Template
- `.gitignore` ← Protects secrets

### 2. **Update `config.json` with Your Credentials**

Edit `config.json` and update these values:

```json
{
  "email": "venuchandaka513@gmail.com",           ← Your actual email
  "phone": "+91 8499836938",                      ← Your actual phone
  "linkedin": "venu-chandaka-147n513",            ← Your LinkedIn profile ID
  "web3formsKey": "4cdab42a-a546-4221-a7b7-160023d79f5a"  ← Your Web3Forms key
}
```

**How to get Web3Forms key:**
1. Visit https://web3forms.com
2. Sign up (free)
3. Go to your dashboard
4. Copy the **Access Key**
5. Paste it in `config.json` as `web3formsKey`

### 3. **Verify Configuration**

Open `config-check.html` in your browser to test:
```
file:///d:/venu-chandaka-portfolio/config-check.html
```

You should see ✅ for all items:
- ✅ Email Configured
- ✅ Phone Configured  
- ✅ LinkedIn Configured
- ✅ Web3Forms Key Configured

### 4. **Test Your Portfolio**

Open `portfolio.html` and check:
- [ ] Email, phone, LinkedIn show in "Contact" section
- [ ] Footer links work (email, phone, LinkedIn)
- [ ] Contact form can be submitted
- [ ] Links are clickable

### 5. **Security: Verify Git Ignore**

Make sure credentials won't leak:
```bash
# Check .gitignore
cat .gitignore
```

Should include:
```
.env
config.json
```

### 6. **Before Pushing to Git**

```bash
# Verify files are ignored
git status

# Should NOT show:
# - config.json
# - .env
```

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Links not working | Check `config.json` has correct values |
| Form error: "access key missing" | Update `web3formsKey` in `config.json` with real key from web3forms.com |
| Config check shows ❌ | Reload browser (Ctrl+F5 to clear cache) |
| Can't find Web3Forms key | Go to https://web3forms.com dashboard and look for "Access Key" |

## 📝 Files Reference

| File | Purpose | Commit? |
|------|---------|---------|
| `portfolio.html` | Main page | ✅ Yes |
| `config.js` | Config loader | ✅ Yes |
| `config.json` | **Actual keys** | ❌ **NO** |
| `config.json.example` | Template | ✅ Yes |
| `.env` | Reference | ❌ **NO** |
| `.env.example` | Template | ✅ Yes |
| `.gitignore` | Protection rules | ✅ Yes |

## 🚀 Ready?

After completing these steps, your portfolio:
- ✅ Loads credentials from `config.json`
- ✅ Shows your email, phone, LinkedIn
- ✅ Has a working contact form
- ✅ Keeps secrets safe from git

That's it! 🎉
