const cateschema = require("../model/cateSchema");
const subcatschema = require("../model/subCatSchema");
const extracatschema = require("../model/extraCatSchema");

module.exports.addextraCat = async (req, res) => {
    const category = await cateschema.find({});
    const subcategory = await subcatschema.find({});
    
    res.render("addextraCat", {category, subcategory});
}

module.exports.addextraCategory = async (req, res) => {
    await extracatschema.create(req.body)
    res.redirect("/extracategory/addextraCat")
}

module.exports.viewSubcat = async(req,res) => {
    await extracatschema.find({})
    .populate("categoryId")
    .populate("subcat")
    .then((data)=> {
        res.render("viewextraCat",{data})
    })
}

module.exports.editData = async (req,res) => {
    const extracategory = await extracatschema.findById(req.query.id);
    const subcategory = await subcatschema.find()
    const category = await cateschema.find()

    res.render("editextraCat", { subcategory , category , extracategory});
}

module.exports.updateData = async (req,res) => {    
    await extracatschema.findByIdAndUpdate(req.body.id, req.body)
    res.redirect("/extracategory/viewsubCat");
}

module.exports.deleteData = async (req,res) => {
    await extracatschema.findByIdAndDelete(req.query.id)
    res.redirect("/extracategory/viewsubCat");
}