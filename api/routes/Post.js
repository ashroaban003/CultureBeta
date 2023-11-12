const express = require("express");
const {
  createPost,
  deletePost,
  getPost,
  updatePost,
  getPosts,
  likePost,
  getUserPosts,
  commentOnPost,
  deleteComment,
  getComments,
  getPostByTags,
} = require("../controllers/PostController.js");
const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPostByTags);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete("/:id", deletePost);
router.put('/:id/like', likePost);
router.get('/:id/comments', getComments)
router.get('/:id/userposts', getUserPosts)
router.post('/:id/comment', commentOnPost);
router.delete('/:id/comment', deleteComment);

module.exports = router;
