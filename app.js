require("dotenv/config");
var express = require("express");
var cookieParser = require("cookie-parser");
var morgan = require("morgan");
var rfs = require("rotating-file-stream");
var path = require("path");
// var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var PORT = process.env.PORT || 3000;

var accessLogStream = rfs.createStream("access.log", {
  interval: "1d",
  path: path.join(__dirname, "log"),
});

var app = express();
// app.use(cors({ credentials: true, origin: /example\.com$/ }));
app.use(morgan("combined", { stream: accessLogStream }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
