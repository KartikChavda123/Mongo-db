const express = require("express");
const router = express.Router();
const ctl = require("../controllers/cateCtl");
const multer = require("../middleware/multer")

router.get("/addCate",ctl.addCate)
router.get("/viewCat", ctl.viewCat)
router.post("/addCategory",multer,ctl.addCategory)

router.get("/editCat",multer,ctl.editCat);
router.post("/updateData",multer,ctl.updateData);

router.get("/deleteData",ctl.deleteData)

module.exports = router;