const express = require("express");
const port = 1082;

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'))

const db = require("./Config/db");

const schema = require("./model/firstSchema");

app.use("/",require("./routes/route"))

app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server strted on port" + port);
});