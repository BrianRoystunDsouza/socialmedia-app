const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f5e95594789835",
      pass: "7f0145c2ffac53"
    }
  });
  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
