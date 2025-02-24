const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/PostMen-RestApi-Demo");

const db  = mongoose.connection

db.once("open",(err) => {
    err ? console.log(err) : console.log("DataBase Connected");
});

module.exports = db;