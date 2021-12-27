var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const { requireAuth, checkUser } = require("./middleware/authMiddleware");

const authRouter = require("./routes/auth");
const fileRoute = require("./routes/file");

var app = express();

//Set up mongoose connection
var mongoose = require("mongoose");
var mongoDB =
  "mongodb+srv://naac:naac@naac-cluster0.whtkq.mongodb.net/NAAC?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("connection to db established"));

//view engine setup
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "client/build")));

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.get("*", checkUser);
app.get("/", (req, res) => res.render("signup"));
app.get("/home", requireAuth);
app.use(authRouter);
app.use(fileRoute);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

module.exports = app;
