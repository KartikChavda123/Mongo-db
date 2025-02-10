const schema = require("../model/firstSchema");
const mailer = require("../middleware/mailer");

module.exports.login = (req, res) => {
    res.render("login")
}

module.exports.userLogin = async (req, res) => {
    req.flash("success", "login successfully !");
    res.redirect("/dashboard");
};

module.exports.logOut = (req, res) => {
    req.session.destroy();
    res.redirect("/");
}

module.exports.index = (req, res) => {
    res.render("index")
}

module.exports.formbasic = (req, res) => {
    res.render("formbasic")
}

module.exports.table = async (req, res) => {
    await schema.find({})
        .then((data) => {
            res.render("table", { data })
        })
};

module.exports.addData = async (req, res) => {
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/formbasic");
        });
}

module.exports.deleteData = async (req, res) => {
    console.log(req.query.id);
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/table");
}

module.exports.editData = async (req, res) => {
    await schema.findById(req.query.id)
        .then((data) => {
            res.render("editData", { data })
        })
}

module.exports.updateData = async (req, res) => {
    await schema.findByIdAndUpdate(req.body.id, req.body)
        .then((data) => {
            res.redirect("/table");
        })
}

module.exports.profile = (req, res) => {
    res.render("profile");
}

module.exports.ChangePass = (req, res) => {
    res.render("changepass");
}
module.exports.changePass = async (req, res) => {
    let user = req.user

    if (user.password == req.body.OldPass) {
        if (req.body.OldPass != req.body.NewPass) {
            if (req.body.NewPass == req.body.ConPass) {
                let admin = await schema.findByIdAndUpdate(user.id, { password: req.body.NewPass })
                admin && res.redirect("/logOut");
            }

            else {
                console.log("new Password and confirm password are not same");
            }
        }

        else {
            console.log("old and new password are same");
        }
    }
    else {
        console.log("old password is not correct");
    }
}


module.exports.recoverpass = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email });

    if (!admin) {
        return res.redirect("/");
    }

    let otp = Math.floor(Math.random() * 100000 + 900000)
    mailer.sendOtp(req.body.email, otp);

    req.session.otp = otp;
    req.session.adminData = admin

    res.render("verifyOtp")
}


module.exports.verifyPass = async (req, res) => {
    let otp = req.session.otp;
    let admin = req.session.adminData

    if (req.body.otp == otp) {
        if (req.body.newPass == req.body.conPass) {
            let adminData = await schema.findByIdAndUpdate(admin._id, { password: req.body.newPass })
            adminData && res.redirect("/logout")
        }
        else {
            console.log("new password and conform pass in not match");

        }
    }
    else {
        res.redirect("/logout")
    }
}