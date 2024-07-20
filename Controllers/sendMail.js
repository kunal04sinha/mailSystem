import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PASS, SMTP_SERVICE, SMTP_USER } from "../config";
const sendMail = {
  async mail(req, res, next) {
    const transporter = nodemailer.createTransport({
      service: SMTP_SERVICE,
      host: SMTP_HOST,
      secure: true,
      port: 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
    const { firstName, lastName, email, phone, message } = req.body;
    const mailOptions = {
      from: {
        name: "CloudArcOps",
        address: email,
      },
      to: [SMTP_USER],
      subject: `Contact form submission from ${firstName}`,
      text: `Name: ${firstName} ${lastName}\nE-mail: ${email}\nPhone Number:${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send(error.toString());
      }
      res.status(200).json({ message: "success" });
    });
  },
};
export default sendMail;
