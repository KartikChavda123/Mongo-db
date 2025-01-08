const express = require("express");
const port = 2024;

const app = express();
const path = require("path");
const db = require("./config/db");

app.use(express.urlencoded());
app.set("view engine", "ejs");
app.use("/uploads",express.static(path.join(__dirname, "uploads")));

app.use("/",require("./routes/route"));

app.listen(port,(err)=> {
    err ? console.log(err) : console.log("server started on port " + port);
});

