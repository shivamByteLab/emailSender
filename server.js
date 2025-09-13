import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  let transporter = nodemailer.createTransport({
    service: "gmail", // or SMTP config
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  if (!process.env.ADMIN_EMAIL) {
    return res.status(500).json({
      success: false,
      msg: "❌ Server misconfigured: admin email not set.",
    });
  }

  const mailOptions = {
  from: `"${name}" <${process.env.EMAIL_USER}>`,
  to: process.env.ADMIN_EMAIL,
  subject: `💼 Portfolio Inquiry from ${name}`,
  html: `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: auto; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #0d6efd, #6610f2); color: white; padding: 20px; text-align: center;">
      <h1 style="margin: 0; font-size: 22px;">📩 New Portfolio Message</h1>
    </div>
    
    <!-- Body -->
    <div style="background: #ffffff; padding: 20px; line-height: 1.6; color: #333;">
      <p style="font-size: 16px;">You have received a new message from your portfolio website:</p>
      
      <div style="margin: 20px 0; padding: 15px; background: #f9f9f9; border-left: 4px solid #0d6efd; border-radius: 5px;">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p style="margin-top: 10px; padding: 10px; background: #fff; border-radius: 5px; border: 1px solid #eee;">${message}</p>
      </div>
      
      <p style="font-size: 14px; color: #555;">Reply directly to this email to contact <strong>${name}</strong>.</p>
    </div>
    
    <!-- Footer -->
    <div style="background: #f1f1f1; text-align: center; padding: 15px; font-size: 13px; color: #777;">
      <p>🌐 Sent from <strong>Your Portfolio Website</strong></p>
      <p style="margin: 5px 0;">© ${new Date().getFullYear()} Uni-Creator | All rights reserved</p>
    </div>
  </div>
  `,
};


  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, msg: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("Email send failed:", error.message);
    res.status(500).json({ success: false, msg: "❌ Failed to send email." });
  }
});

const PORT = process.env.PORT || 5000; // use Render's PORT
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

