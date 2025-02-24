const schema = require("../model/adminschema");

module.exports.AddAdmin = async (req,res) =>{
    await schema.create(req.body)
    res.status(200).json({"msg": "Admin Added Successfully !"});
}

module.exports.viewAdmin = async (req,res) => {
    let data = await schema.find({})
    console.log(data)
    res.status(200).json({"msg": "Admin View Successfully !"});
}

module.exports.deleteAdmin = async (req,res) => {
    await schema.findByIdAndDelete(req.query.id)
    res.status(200).json({"msg": "Admin Delete Successfully"})
}

module.exports.updateAdmin = async (req,res) => {
    await schema.findByIdAndUpdate(req.query.id , req.body)
    .then((data)=>{
        res.status(200).json({"msg": "Admin Update Successfully !"});
    })
}