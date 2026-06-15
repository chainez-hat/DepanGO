import { configDotenv } from "dotenv";
import nodemailer from "nodemailer";

configDotenv();

console.log("SMTP_HOST =", process.env.SMTP_HOST);
console.log("SMTP_PORT =", process.env.SMTP_PORT);
console.log("SMTP_USER =", process.env.SMTP_USER);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendEmail(to, subject, html) {
  return await transporter.sendMail({
    from: "DepanGO <chahinez.hatem@laplateforme.io>",
    to,
    subject,
    html,
  });
}