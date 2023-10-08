const express = require("express");
const {
  createPost,
  deletePost,
  getPost,
  updatePost,
  getPosts,
} = require("../controllers/PostController.js");
const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete("/:id", deletePost);

// Like a post is left to do

module.exports = router;