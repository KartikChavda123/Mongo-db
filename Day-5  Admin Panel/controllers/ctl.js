const schema = require("../model/firstSchema");

module.exports.index = (req,res) =>{
    res.render("index");
}
module.exports.formbasic = (req,res) =>{
    res.render("formbasic");
}
module.exports.table = async (req,res) =>{
    await schema.find({})
    .then((data)=>{
        res.render("table",{data})
    });
};

module.exports.addData = async (req,res) => {
    await schema.create(req.body)
    .then((data)=> {
        res.redirect("/formbasic");
    });
}
