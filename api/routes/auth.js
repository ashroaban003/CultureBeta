const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  try {
    const user = await User.create({
      username: username,
      email: email,
      password: hash,
    });

    //jwt forms token in 3sets
    jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT,
      {},
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: user._id,
          followers: user.followers.length,
          followings: user.following.length,
          username,
          isAdmin: user.isAdmin,
        });
      }
    );
  } catch (e) {
    res.status(409).json(e);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      const valid = await bcrypt.compare(password, user.password);
      if (valid) {
        jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT,
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json({
              id: user._id,
              followers: user.followers.length,
              followings: user.following.length,
              username,
              isAdmin: user.isAdmin,
            });
          }
        );
      } else res.send("login failed");
    } else res.send("Incorrect email");
  } catch (e) {
    res.status(404).json(e);
  }
});

router.post("/logout", async (req, res) => {
  res.cookie("token", "").json("logedout");
});

module.exports = router;
