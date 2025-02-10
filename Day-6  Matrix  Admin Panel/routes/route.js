const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");
const passport = require("../middleware/passport");


route.get("/",ctl.login);
route.post("/userLogin" ,passport.authenticate("local",{failureRedirect: "/"}),
    ctl.userLogin
)
route.get("/logOut",passport.checkAuth,ctl.logOut);
route.get("/dashboard",passport.checkAuth,ctl.index);
route.get("/formbasic", passport.checkAuth,ctl.formbasic)
route.get("/table", passport.checkAuth,ctl.table)
route.post("/addData",passport.checkAuth,ctl.addData)
route.get("/deleteData",ctl.deleteData)
route.get("/editData",passport.checkAuth,ctl.editData)
route.post("/updateData",ctl.updateData)
route.get("/profile",passport.checkAuth,ctl.profile)
route.get("/ChangePass",ctl.ChangePass);
route.post("/changePass",ctl.changePass);

route.post("/recoverpass",ctl.recoverpass);
route.post("/verifypass",ctl.verifyPass);


module.exports = route;