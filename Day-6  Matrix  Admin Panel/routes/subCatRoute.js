const express = require("express")
const route = express.Router()
const ctl = require("../controllers/subCat")
const passport = require("../middleware/passport")
const upload = require("../middleware/multer")

route.get("/addsubCat",passport.checkAuth,ctl.addsubCat);
route.post("/addsubCat",passport.checkAuth,ctl.addsubCategory);
route.get("/viewsubCat",passport.checkAuth,upload,ctl.viewsubCat);

route.get("/editData",ctl.editData);
route.get("/deleteData",ctl.deleteData);

route.post("/updateData",ctl.updateData);

module.exports = route;