const express = require("express");
const route = express.Router();
const ctl = require("../controllers/ctl");

route.post("/addAdmin",ctl.addAdmin);
route.get("/viewAdmin",ctl.viewAdmin)
route.delete("/deleteAdmin",ctl.deleteAdmin);
route.put("/updateAdmin",ctl.updateAdmin);

module.exports = route;