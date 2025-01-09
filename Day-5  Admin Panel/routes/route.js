const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

route.get("/",ctl.index);
route.get("/formbasic", ctl.formbasic)
route.get("/table", ctl.table)
route.post("/addData",ctl.addData);

module.exports = route;