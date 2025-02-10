const schema = require("../model/cateSchema");
const fs = require("fs")
const path = require("path")

module.exports.addCate = (req, res) => {
    res.render("addCate");
};

module.exports.addCategory = async (req, res) => {
    req.body.catimage = req.file.path;
    await schema.create(req.body)
        .then((data) => {
            res.redirect("/category/addCate")
        })
}

module.exports.viewCat = async (req, res) => {
    await schema.find({})
        .then((data) => {
            res.render("viewCat", { data })
        })
}

module.exports.deleteData = async(req,res) => {
    await schema.findByIdAndDelete(req.query.id)
    res.redirect("/category/viewCat")
}


module.exports.editCat = async (req, res) => {
    let data = await schema.findById(req.query.id)
    res.render("editcate", { data })
}

module.exports.updateData = async (req,res) => {
    let img = ""
    let singleData = await schema.findById(req.body.id);

    if(singleData){
        img = req.file ? req.file.path : singleData.catimage;
        if(req.file && singleData.catimage)
        {
            fs.unlinkSync(singleData.catimage);
        }

        req.body.catimage = img;
        await schema.findByIdAndUpdate(req.body.id, req.body);
    }
    res.redirect("/category/viewCat");
}