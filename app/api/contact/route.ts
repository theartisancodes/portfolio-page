import { OAuth2Client } from 'google-auth-library';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const oauth2Client = new OAuth2Client(
  process.env.EMAIL_CLIENT_ID,
  process.env.EMAIL_CLIENT_SECRET,
  process.env.EMAIL_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.EMAIL_REFRESH_TOKEN
});


export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const { token } = await oauth2Client.getAccessToken();

    if (!token) {
      throw new Error('Failed to generate OAuth access token');
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN,
        accessToken: token
      }
    });

    // Email details
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL, // Your receiving email
      subject: subject,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Subject:</strong> ${subject}</p>
             <p>${message}</p>`
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
