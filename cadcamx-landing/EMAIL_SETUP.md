# Email Setup Guide for Contact Form

The contact form sends emails to `leancamsys@gmail.com` when users submit their project inquiries.

## Setup Steps

### 1. Create Environment File

Copy the example environment file:
```bash
cp .env.local.example .env.local
```

### 2. Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/security
2. Enable **2-Step Verification** if not already enabled
3. Go to **App Passwords** (search for it in settings)
4. Select **Mail** as the app
5. Generate the password
6. Copy the 16-character password (format: xxxx xxxx xxxx xxxx)

### 3. Configure Environment Variables

Edit `.env.local` and add your configuration:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=leancamsys@gmail.com
SMTP_PASSWORD=your_16_character_app_password_here
```

**Important:** Remove all spaces from the app password!

### 4. Restart Development Server

```bash
npm run dev
```

## Testing

1. Navigate to http://localhost:3000/contact
2. Fill out the contact form
3. Submit the form
4. Check `leancamsys@gmail.com` for the email

## Email Template

The email includes:
- Contact information (name, email, company, phone)
- Project details (type, budget, timeline)
- Full project description
- Professional formatting with CADCAMX branding

## Troubleshooting

### Email not sending?

1. **Check App Password**: Make sure you're using an App Password, not your regular Gmail password
2. **2-Step Verification**: Ensure 2-Step Verification is enabled on the Gmail account
3. **Environment Variables**: Verify `.env.local` has correct values
4. **Server Restart**: Restart the development server after changing `.env.local`
5. **Gmail Security**: Check if Gmail has blocked the login attempt

### Alternative SMTP Providers

If Gmail doesn't work, you can use:
- **SendGrid**: Free tier available
- **Mailgun**: Free tier available
- **AWS SES**: Pay as you go

Just update the SMTP settings in `.env.local` accordingly.

## Production Deployment

When deploying to production (Vercel, etc.):

1. Add environment variables in your hosting platform's dashboard
2. Use the same variable names: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`
3. Never commit `.env.local` to version control!

## Security Notes

- ✅ `.env.local` is in `.gitignore`
- ✅ Never commit sensitive credentials
- ✅ Use App Passwords instead of main Gmail password
- ✅ Rotate App Passwords periodically
