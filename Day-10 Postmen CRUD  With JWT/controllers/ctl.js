const schema = require("../model/Adminschema");

module.exports.addAdmin = async (req, res) => {
    await schema.create(req.body)
    res.status(200).json({msg: "Admin Added Successfully"})
}

module.exports.viewAdmin = async (req, res) => {
    let data = await schema.find({})
    console.log(data)
    res.status(200).json({msg: "Admin Viewed Successfully"})
}

module.exports.deleteAdmin = async (req,res) => {
    await schema.findByIdAndDelete(req.query.id);
    res.status(200).json({msg: "Admin Deleted Successfully"})
}

module.exports.updateAdmin = async (req,res) => {
    await schema.findByIdAndUpdate(req.query.id,req.body)
    .then((data)=>{
        res.status(200).json({msg: "Admin Update Successfully !"})
    })
}