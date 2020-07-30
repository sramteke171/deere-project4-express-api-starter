const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  UserModel.findByPk(req.params.id).then((userProfile) => {
    console.log(userProfile);
    res.render("users/profile.ejs", {
      user: userProfile,
    });
  });
});

module.exports = router;
