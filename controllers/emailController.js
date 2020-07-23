var nodemailer = require("nodemailer");

// Defining methods for the booksController
module.exports = {
  send: function (req, res) {
    // create reusable transporter object using the default SMTP transport - TAKEN FROM NODEMAILER DOCS
    var transport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, ///defined on Heroku
        pass: process.env.SMTP_PASSWORD,
      },
    });
    // setup email data with unicode symbols
    let mailOptions = {
      to: "ameliajanegoodson@gmail.com", // list of receivers
      subject: "Node Contact Request", // Subject line
      text: "Hello world?", // plain text body
      // html: output, // html body
    };
    // send mail with defined transport object
    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      res.json();
    });
  },
};
