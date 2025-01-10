const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstname:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    }
})


const firstSchema = mongoose.model("Admin-panel", schema);

module.exports = firstSchema;