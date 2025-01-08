const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{
        type: String,
        require: true
    }
})


const firstSchema = mongoose.model("Admin-panel", schema);

module.exports = firstSchema;