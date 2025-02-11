const nodemailer = require("nodemailer");
const transport = nodemailer.createTransport
({
    service: "gmail",
    auth: {
        user: "kartikchavda2005@gmail.com",
        pass: "wvwdxgouyjdcvnvz",
    },
});

module.exports.sendOtp = (to,Otp) => {
    let mailoptions = {
        from : "kartikchavda2005@gmail.com",
        to : to,
        subject : "Your Password Reset OTP",
        text: `Your OTP is ${Otp}`,
    };

    transport.sendMail(mailoptions,(err)=> {
        err ? console.log(err) : console.log("OTP sended SUcessfully");
    });
};