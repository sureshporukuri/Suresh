//importing dependencies
const express = require("express");
const app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Calling form.js from models
var Form = require("./models/form");
const form = require("./models/form");

const abc = require("./models/inf");

// Connecting to database
mongoose.connect("mongodb://localhost/user", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//middlewares
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//rendering form.ejs
app.get("/form", function (req, res) {
  res.render("form");
});
app.get("/", function (req, res) {
  res.render("login");
});

// form submission
app.get("/result", (req, res) => {
  res.render("result");
});
app.post("/result", (req, res) => {
  res.redirect("/");
});

app.get("/download", function (req, res) {
  const file = `${__dirname}/studentsData.xlsx`;
  res.download(file); // Set disposition and send it.
  //res.send(__dirname);
});

app.post("/excel", (req, res) => {
  res.redirect("/");
});

app.post("/info", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (username === "admin" && password === "admin") {
    Form.find(function (err, docs) {
      if (err) {
      } else {
      }
    });
  }
  Form.findOne({ username: username }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      if (!doc) {
        res.render("error", { m: "invalid username" });
      } else if (doc.password === password) {
        try {
          abc(doc);
        } catch {
          console.log("wrong");
        }
        res.render("info", { doc: doc });
      } else {
        res.render("error", { m: "invalid credentials" });
      }
    }
  });
});
//creating form
app.post("/", function (req, res) {
  var name = req.body.name;
  var username = req.body.username;
  var email = req.body.email;
  var phone = req.body.phone;
  var password = req.body.password;
  var collegeName = req.body.collegeName;
  var gender = req.body.gender;

  var f = {
    name: name,
    username: username,
    email: email,
    phone: phone,
    password: password,
    collegeName: collegeName,
    gender: gender,
  };
  Form.create(f, function (err, newlyCreatedForm) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/result");
    }
  });
});

// Starting the server at port 3000
app.listen(3000, function () {
  console.log("Server running on port 3000");
});
