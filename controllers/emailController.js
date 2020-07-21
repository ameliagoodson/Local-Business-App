var nodemailer = require("nodemailer");

// Defining methods for the booksController
module.exports = {
  send: function (req, res) {
    // create reusable transporter object using the default SMTP transport - TAKEN FROM NODEMAILER DOCS
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "finalproject2020sydneybootcamp@gmail.com",
        pass: "finalprojecttest30",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Nodemailer Contact" <finalproject2020sydneybootcamp@gmail.com>', // sender address
      to: "ameliajanegoodson@gmail.com", // list of receivers
      subject: "Node Contact Request", // Subject line
      text: "Hello world?", // plain text body
      html: output, // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.json();
    });
  },
};
