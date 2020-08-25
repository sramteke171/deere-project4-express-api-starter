const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;

// GET USERS PROFILE
router.get("/profile/:id", (req, res) => {
  console.log(req.user);
  UserModel.findByPk(req.params.id).then((userProfile) => {
    res.json({
      user: userProfile,
    });
  });
});

module.exports = router;
