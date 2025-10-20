// Netlify Function to handle contact form submissions
// This runs separately from Next.js bundle - no size issues!

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    const data = JSON.parse(event.body);
    const { firstName, lastName, email, company, phone, projectType, budget, timeline, projectDetails } = data;

    // Create email body
    const emailBody = `
New Contact Form Submission from CADCAMX

Contact Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Company: ${company}
- Phone: ${phone || 'Not provided'}

Project Details:
- Project Type: ${projectType}
- Budget: ${budget || 'Not specified'}
- Timeline: ${timeline || 'Not specified'}
- Description: ${projectDetails}

---
This submission was sent from cadcamx-landing contact form.
    `.trim();

    // Use Netlify's built-in form handling by making a submission
    // This way we get email notifications without any dependencies
    const formData = new URLSearchParams();
    formData.append('form-name', 'contact');
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('company', company);
    formData.append('phone', phone || '');
    formData.append('projectType', projectType);
    formData.append('budget', budget || '');
    formData.append('timeline', timeline || '');
    formData.append('projectDetails', projectDetails);
    formData.append('message', emailBody);

    // Submit to Netlify Forms
    await fetch('https://cadcamx-landing.netlify.app/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString()
    });

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        message: 'Form submitted successfully! We will contact you within 24 hours.'
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to submit form. Please try again.' })
    };
  }
};
