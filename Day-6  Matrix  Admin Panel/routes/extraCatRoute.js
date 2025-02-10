const exprees = require("express");
const route = exprees.Router();
const ctl = require("../controllers/extraCatCtl");

route.get("/addextraCat", ctl.addextraCat);

route.post("/addextraCat", ctl.addextraCategory);
route.get("/viewSubcat",ctl.viewSubcat);
route.get("/editData", ctl.editData);
route.post("/updateData", ctl.updateData);
route.get("/deleteData", ctl.deleteData);


module.exports = route