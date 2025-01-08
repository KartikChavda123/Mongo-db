const schema = require("../model/firstSchema");

module.exports.firstPage = async(req,res) => {
    let data = await schema.find({});
    res.render("index",{ data });
};

module.exports.addData = async (req,res) => {
    req.body.image = req.file.path;
    await schema.create(req.body).than((data)=>{
        res.redirect("/");
    });
}