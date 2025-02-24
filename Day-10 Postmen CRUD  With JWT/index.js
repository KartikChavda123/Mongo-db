const express = require("express");
const port = 8007;


const app = express();

const db = require("./config/db");
const schema = require("./model/Adminschema");
app.use(express.urlencoded())
app.use(express.json())

app.use("/",require("./route/adminroute"));

app.listen(port,(err) => {
    err ? console.log(err) : console.log("Server Started On Port "+port);
});

