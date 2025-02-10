const mongoose = require("mongoose");

const schema = mongoose.Schema({
    catName:{
        type: String,
        require: true
    },
    catimage:{
        type: String,
        require: true
    },
})


const firstSchema = mongoose.model("Admin-panel-cate", schema);

module.exports = firstSchema;