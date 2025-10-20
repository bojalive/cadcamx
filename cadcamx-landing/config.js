// Email Configuration for Contact Form
// Update these values with your actual email credentials

export const emailConfig = {
  // SMTP Configuration
  smtp: {
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "leancamsys@gmail.com",
      pass: "your_app_password_here", // Get this from Gmail App Passwords
    },
  },

  // Email Recipients
  recipients: {
    to: "leancamsys@gmail.com",
    from: "leancamsys@gmail.com",
  },

  // Company Information
  company: {
    name: "Talent Scope Consulting Inc.",
    phone: "+1 7155013103",
    email: "leancamsys@gmail.com",
    usAddress: "8th Green Street, Delaware, United States",
    odcAddress: "No. 11/4, Pooja Garden, Kalapatti Main Rd, Indira Nagar, Civil Aerodrome Post, Coimbatore, Tamil Nadu 641014",
  },
};

// Instructions to get Gmail App Password:
// 1. Go to https://myaccount.google.com/security
// 2. Enable 2-Step Verification if not already enabled
// 3. Go to App Passwords
// 4. Generate a new app password for "Mail"
// 5. Copy the 16-character password and update the 'pass' field above
// 6. Remove all spaces from the password
