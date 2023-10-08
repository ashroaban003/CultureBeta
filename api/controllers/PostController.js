const mongoose = require('mongoose');
const PostModel = require('../models/Post.js');

// Create a new post
const createPost = async (req, res) => {
  console.log("post started");
  const newPost = new PostModel(req.body);
  //console.log(newPost)
  try {
    const post = await newPost.save();
    console.log("post ended")
    if(!post){
      console.log("cant post");
    }
    res.status(200).json("Post Uploaded");
  } catch (error) {
    res.status(500).json(error);
  }
}

//get all post from database
const getPosts = async (req, res) => {
    try {
        const post = await PostModel.find();
        res.status(200).json(post);
      } catch (error) {
        res.status(500).json(error);
      }
}

// Get a post from the database
const getPost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    if (!post.image) {
      console.log("No image");
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
}

// Update a post
const updatePost = async (req, res) => {
  const postId = req.params.id;       // from the URL
  const { userId } = req.body; // user who is trying to update this post

  try {
    const post = await findById(postId); // Should be PostModel.findById(postId)
    if (post.userId == userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action Forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

// Delete a post
const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    if (post.userId === userId) {
      await post.deleteOne();
      res.status(200).json("Post deleted");
    } else {
      res.status(403).json("Action Forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  createPost,
  getPost,
  updatePost,
  deletePost,
  getPosts,
};
