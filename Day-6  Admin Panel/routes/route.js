const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

route.get("/",ctl.login);
route.post("/userLogin",ctl.userLogin)
route.get("/logOut",ctl.logOut);
route.get("/dashboard",ctl.index);
route.get("/formbasic", ctl.formbasic)
route.get("/table", ctl.table)
route.post("/addData",ctl.addData)
route.get("/deleteData",ctl.deleteData)
route.get("/editData",ctl.editData)
route.post("/updateData",ctl.updateData)

module.exports = route;