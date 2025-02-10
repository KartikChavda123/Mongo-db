const express = require("express");
const port = 7780;
const app = express();

const path = require('path')
const db = require("./Config/db");
const schema = require("./model/firstSchema");
const cookie = require("cookie-parser");
const session = require("express-session");
const passport = require("./middleware/passport");
const flash = require("connect-flash");
const flashconnect = require("./middleware/flashconnect");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.static('public'))
app.use('/public',express.static(path.join(__dirname,'public')))
app.use(cookie());
app.use(session({
    name: "local",
    secret: 'Matrix',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 100 * 100 * 60 }
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.AuthenticatedUser);
app.use(flash());
app.use(flashconnect.setflash);

app.use("/", require("./routes/route"));
app.use("/category", require("./routes/catroute"));
app.use("/subcategory", require("./routes/subcatroute"));
app.use("/extracategory", require("./routes/extraCatRoute"));

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server strted on port" + port);
});