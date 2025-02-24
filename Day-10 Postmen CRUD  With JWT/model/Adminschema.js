const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }
})

const firstschema = mongoose.model("MERN Stack", schema);

module.exports = firstschema;