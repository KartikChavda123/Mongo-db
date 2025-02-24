const express = require("express");
const port = 3004;

const app = express();
const db = require("./config/db");
const schema = require("./model/adminschema");

app.use(express.urlencoded())
app.use(express.json());

app.use("/",require("./routes/adminRoute"));

app.listen(port,(err)=> {
    err ? console.log(err) : console.log("server started on port : " + port);
});

