const express = require("express");
const port = 7780;

const app = express();

const db = require("./Config/db");
const schema = require("./model/firstSchema");
const cookie = require("cookie-parser");

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(cookie());
app.use(express.static('public'))

app.use("/",require("./routes/route"))


app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server strted on port" + port);
});