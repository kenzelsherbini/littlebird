// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-feedback', async (req, res) => {
  const { name, message } = req.body;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yourgmail@gmail.com',
      pass: 'yourapppassword'  // use an app-specific password
    }
  });

  await transporter.sendMail({
    from: 'yourgmail@gmail.com',
    to: 'businessowner@example.com',
    subject: 'Feedback Form',
    text: `Name: ${name}\nMessage: ${message}`
  });

  res.redirect('/thankyou.html');
});

app.listen(3000, () => console.log("Server running on port 3000"));
