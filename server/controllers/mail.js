import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    type: "login",
    user: process.env.MAIL,
    pass: process.env.MAILMDP,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const contactForm = async (req, res) => {
  console.log(req.body);
  const { name, first_name, email, message, subject } = req.body;
  let mailOptions = {
    from: "studiecfhypnos@gmail.com",
    to: "studiecfhypnos@gmail.com",
    subject: subject,
    text:
      "Nom :" +
      name +
      "\r\n " +
      "Prenom :" +
      first_name +
      "\r\n " +
      "Email :" +
      email +
      "\r\n " +
      "Message :" +
      message,
  };
  try {
    const mail = await transporter.sendMail(mailOptions);
    res.status(200).json({
      status: "success",
      data: {
        mail: mail,
      },
    });
    console.log("mail send");
  } catch (error) {
    res.status(400).json({
      status: "error",
    }),
      console.error(error);
  }
};
