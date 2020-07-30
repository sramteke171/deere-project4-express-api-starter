require("dotenv").config();
const express = require("express");
const app = express();
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// HOMEPAGE
app.get("/", (req, res) => {
  res.render("users/index.ejs");
});

app.use("/auth", require("./controllers/authController.js"));
app.use("/users", require("./controllers/usersController.js"));

app.listen(process.env.PORT, () => {
  console.log("Nodemon listening");
});
