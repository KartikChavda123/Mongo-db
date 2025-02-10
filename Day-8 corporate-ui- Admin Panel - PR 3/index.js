const express = require("express");
const port = 9099;

const app = express();
const path = require('path')
const db = require("./config/db")
const schema = require("./model/firstSchema");

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use(express.static('public'));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use("/", require("./route/route"));


app.listen(port,(err)=> {
    err ? console.log(err) : console.log("server started on port :" + port);
});
