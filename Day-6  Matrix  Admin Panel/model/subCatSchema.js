const mongoose = require("mongoose");

const schema = mongoose.Schema({
    subcatName:{
        type : String,
        required : true
    },
    categoryId:{
        type : mongoose.Schema.Types.ObjectId,
        ref:"Admin-panel-cate",
        required : true
    }
})

const firstSchema = mongoose.model("SubCategorie",schema);

module.exports = firstSchema;