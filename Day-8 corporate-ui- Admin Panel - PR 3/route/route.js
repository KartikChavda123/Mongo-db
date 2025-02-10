const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

route.get("/", ctl.dashboard);
route.get("/dashboard", ctl.dashboard);
route.get("/addadmin", ctl.addadmin);
route.post("/addData", ctl.addData);
route.get("/viewAdmin", ctl.viewAdmin);
route.get("/editData", ctl.editData);
route.post("/updateData",ctl.updateData)
route.get("/deleteData",ctl.deleteData);

module.exports = route;