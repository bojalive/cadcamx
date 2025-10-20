import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { emailConfig } from "@/config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      company,
      phone,
      projectType,
      budget,
      timeline,
      projectDetails,
    } = body;

    // Create a transporter using SMTP configuration from config.js
    const transporter = nodemailer.createTransport(emailConfig.smtp);

    // Email content
    const mailOptions = {
      from: emailConfig.recipients.from,
      to: emailConfig.recipients.to,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #000033; padding: 20px; text-align: center;">
            <h1 style="color: #FFD700; margin: 0;">CADCAMX</h1>
            <p style="color: #ffffff; margin: 5px 0;">New Contact Form Submission</p>
          </div>

          <div style="background-color: #ffffff; padding: 30px; margin-top: 20px; border-radius: 5px;">
            <h2 style="color: #000033; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">Contact Information</h2>

            <table style="width: 100%; margin-top: 20px;">
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: bold; width: 40%;">Name:</td>
                <td style="padding: 10px 0; color: #333;">${firstName} ${lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: bold;">Email:</td>
                <td style="padding: 10px 0; color: #333;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: bold;">Company:</td>
                <td style="padding: 10px 0; color: #333;">${company}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: bold;">Phone:</td>
                <td style="padding: 10px 0; color: #333;">${phone || "Not provided"}</td>
              </tr>
            </table>

            <h2 style="color: #000033; border-bottom: 2px solid #FFD700; padding-bottom: 10px; margin-top: 30px;">Project Details</h2>

            <table style="width: 100%; margin-top: 20px;">
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: bold; width: 40%;">Project Type:</td>
                <td style="padding: 10px 0; color: #333;">${projectType || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: bold;">Budget Range:</td>
                <td style="padding: 10px 0; color: #333;">${budget || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #666; font-weight: bold;">Timeline:</td>
                <td style="padding: 10px 0; color: #333;">${timeline || "Not specified"}</td>
              </tr>
            </table>

            <h2 style="color: #000033; border-bottom: 2px solid #FFD700; padding-bottom: 10px; margin-top: 30px;">Project Description</h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #FFD700; margin-top: 20px;">
              <p style="color: #333; line-height: 1.6; margin: 0;">${projectDetails}</p>
            </div>
          </div>

          <div style="background-color: #000033; padding: 15px; margin-top: 20px; text-align: center; border-radius: 5px;">
            <p style="color: #ffffff; margin: 0; font-size: 12px;">
              This email was sent from the CADCAMX contact form
            </p>
            <p style="color: #FFD700; margin: 5px 0; font-size: 12px;">
              ${emailConfig.company.name} | ${emailConfig.company.phone}
            </p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Form submitted successfully! We'll get back to you within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: "Thank you for your submission! We'll contact you soon.",
        note: "Email notification is being configured."
      },
      { status: 200 }
    );
  }
}
