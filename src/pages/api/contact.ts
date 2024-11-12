import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or the email provider you're using
  auth: {
    user: 'aniffour.dev@gmail.com',
    pass: 'tpqn hppx eope hbam',
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  // Destructure form data from request body
  const { first_name, last_name, address_email, subject, message } = req.body;

  // Validate that all fields are provided
  if (!first_name || !last_name || !address_email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Set up email options
  const mailOptions = {
    from: address_email,
    to: 'hello@foudrecipes.com', // your recipient email
    subject: `Contact Form Submission: ${subject}`,
    text: `
      Name: ${first_name} ${last_name}
      Email: ${address_email}
      Message: ${message}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
