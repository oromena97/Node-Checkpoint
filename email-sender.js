// 930c4a50b1d027
const nodemailer = require("nodemailer");

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "37fca363d25cc2",
    pass: "",
  },
});

// Define the email options
const mailOptions = {
  from: "your-email@example.com",
  to: "recipient@example.com",
  subject: "Hello from Node.js",
  text: "This is a test email from Node.js ",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error occurred:", error.message);
  } else {
    console.log("Email sent successfully!");
    console.log("Message ID:", info.messageId);
  }
});
