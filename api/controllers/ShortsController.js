const mongoose = require("mongoose");
const ShortsModel = require("../models/Shorts.js");

const createShort = async (req, res) => {
    const newShort = new ShortsModel(req.body);

    try {
        const short = await newShort.save();
        console.log("Short saved to db");
        if(!short) console.log("error uploding shorts")
        res.status(200).json("Shorts uploaded");
    } catch (error) {
        res.status(500).json(error);
    }
}

const getShorts = async (req, res) => {
    try {
      const short = await ShortsModel.find();
      console.log("Short");
      res.status(200).json(short);
    } catch (error) {
      res.status(500).json(error);
    }
};

const likeShort = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
  
    try {
      const short = await ShortsModel.findById(id);
      console.log("found short");
      if (short.likes.includes(userId)) {
        //then he's trying to remove the like
        console.log("removed like");
        await short.updateOne({ $pull: { likes: userId } });
        res.status(200).json("removed the like");
      } else {
        // he's liking the post
        await short.updateOne({ $push: { likes: userId } });
        res.status(200).json("short liked");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

  const deleteShort = async (req, res) => {
    const id = req.params.id;
    const { userId } = req.body;
    try {
      const short = await ShortsModel.findById(id);
      if (short.userId === userId) {
        await short.deleteOne();
        console.log("short deleted");
        res.status(200).json("short deleted");
      } else {
        console.log("not possible to delete short, it not same");
        res.status(403).json("Action Forbidden");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  };

module.exports ={
    createShort,
    getShorts,
    likeShort,
    deleteShort
};