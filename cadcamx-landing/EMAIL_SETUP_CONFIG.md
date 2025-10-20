# Email Setup Guide for Contact Form (config.js)

The contact form sends emails to `leancamsys@gmail.com` using the configuration in `config.js`.

## Setup Steps

### 1. Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/security
2. Enable **2-Step Verification** if not already enabled
3. Go to **App Passwords** (search for it in settings)
4. Select **Mail** as the app
5. Generate the password
6. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)
7. **Remove all spaces** from the password

### 2. Update config.js

Open `config.js` in the root directory and update:

```javascript
export const emailConfig = {
  smtp: {
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "leancamsys@gmail.com",
      pass: "xxxxxxxxxxxxxxxx", // ← Paste your 16-character app password here (no spaces!)
    },
  },
  recipients: {
    to: "leancamsys@gmail.com",
    from: "leancamsys@gmail.com",
  },
  company: {
    name: "Talent Scope Consulting Inc.",
    phone: "+1 7155013103",
    email: "leancamsys@gmail.com",
    usAddress: "8th Green Street, Delaware, United States",
    odcAddress: "No. 11/4, Pooja Garden, Kalapatti Main Rd, Indira Nagar, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014",
  },
};
```

### 3. Restart Development Server

```bash
npm run dev
```

## Testing

1. Navigate to http://localhost:3000/contact
2. Fill out the contact form with:
   - First Name
   - Last Name
   - Email
   - Company
   - Project Type
   - Project Details
3. Click "Submit Project Request"
4. You should see a green success banner at the top
5. Check `leancamsys@gmail.com` for the email

## Email Features

The submitted form will send an email with:
- ✅ Professional HTML template with CADCAMX branding
- ✅ Contact information (name, email, company, phone)
- ✅ Project details (type, budget, timeline)
- ✅ Full project description
- ✅ Company footer with Talent Scope Consulting Inc. info

## Success/Error Messages

### Success
- Green banner appears at top of page
- Message: "Thank You! Your Request Has Been Submitted Successfully"
- Form is cleared
- User's email is shown in confirmation

### Error
- Red banner appears if submission fails
- Provides fallback contact information
- Form data is preserved so user can try again

## Troubleshooting

### Email not sending?

1. **Check App Password**:
   - Must be 16 characters, no spaces
   - From Gmail App Passwords, not regular password

2. **2-Step Verification**:
   - Must be enabled on leancamsys@gmail.com

3. **config.js Updates**:
   - Restart dev server after changing config.js
   - Verify no syntax errors in config.js

4. **Gmail Security**:
   - Check if Gmail blocked the login
   - Go to https://myaccount.google.com/lesssecureapps

5. **Test SMTP Connection**:
   - Email will still show success to user even if SMTP fails
   - Check browser console for errors
   - Check terminal/server logs

### Alternative SMTP Providers

If Gmail doesn't work, update `config.js` with:

**SendGrid:**
```javascript
smtp: {
  host: "smtp.sendgrid.net",
  port: 587,
  auth: {
    user: "apikey",
    pass: "your_sendgrid_api_key",
  },
}
```

**Mailgun:**
```javascript
smtp: {
  host: "smtp.mailgun.org",
  port: 587,
  auth: {
    user: "your_mailgun_smtp_username",
    pass: "your_mailgun_smtp_password",
  },
}
```

## Production Deployment

### Vercel/Netlify:
1. Update `config.js` with production credentials
2. Consider using environment variables for sensitive data
3. Add `config.js` to `.gitignore` if it contains secrets

### Security Best Practices:
- 🔒 Use App Passwords, never main Gmail password
- 🔒 Rotate passwords periodically
- 🔒 Consider moving to environment variables for production
- 🔒 Never commit credentials to public repositories

## Company Information

The email and website display:
- **Company**: Talent Scope Consulting Inc.
- **Phone**: +1 7155013103
- **Email**: leancamsys@gmail.com
- **US Office**: 8th Green Street, Delaware, United States
- **ODC**: No. 11/4, Pooja Garden, Kalapatti Main Rd, Indira Nagar, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014
