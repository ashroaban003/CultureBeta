require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const authroute = require("./routes/auth.js");
const postroute = require("./routes/Post.js");
const userRoute = require("./routes/User.js");
const shortsRoute = require("./routes/Shorts.js");
const ttsroute = require("./routes/tts.js");
const app = express(); //backend framework good for single root, support api requests

// app.use(
//   cors({
//     origin: true,
//   })
// ); //cross origin platform connect backend to frontend

//for data transmission
app.use(express.json()); //to parse json info from http request to frontend

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "x-requested-with, content-type");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,OPTIONS,HEAD"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Max-Age", "1000000000");
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(cookieparser()); //middleware parse cookies like jwt

// Use the bodyParser middleware to parse incoming JSON data and set it max req limit

app.use("/api/auth", authroute);
app.use("/api/post", postroute);
app.use("/api/user", userRoute);
app.use("/api/shorts", shortsRoute);
app.use("/api/tts", ttsroute);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("listening on port 4000,connected to database ");
  } catch (e) {
    console.log("error connecting to database");
  }
};
app.listen(process.env.PORT, () => {
  connect();
  //console.log('error connecting to database');
});
