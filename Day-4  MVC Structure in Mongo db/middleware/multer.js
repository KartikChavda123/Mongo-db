const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cd(null,"uploads/");
    },

    filename: (req,file,cb) => {
        cb(null, file.fieldname + " " + Date.now());
    },
});

const upload = multer({storage: Storage}).single("image");

module.exports = upload;
