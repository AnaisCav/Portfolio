const express = require("express");
const router = require("./router");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "anais.cav@outlook.com",
    pass: "Nicolas06121995!?",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: firstname,
    to: "anais.cav@outlook.com",
    subject: "Contact Form submission",
    html: `<p>Firstname: ${firstname}</p>
    <p>Lastname: ${lastname}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Votre message a été envoyé" });
    }
  });
});

module.exports = app;
