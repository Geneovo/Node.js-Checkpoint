const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "bodjuvwederhie@gmail.com",
        pass: "ravl umjq lekb hbnc",
    },
});

const mailOptions = {
    from: "bodjuvwederhie@gmail.com",
    to: "bodjuvwederhie@gmail.com",
    subject: "Test Email from Node.js",
    text: "Hello, this is a test email from Node.js!",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Email sent:", info.response);
    }
});
