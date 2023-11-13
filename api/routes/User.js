const express = require("express");
const { getUser, updateUser, deleteUser, followUser, unFollowUser, getAllUsers, isUserFollowing } = require("../controllers/UserController");

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser)
router.put('/:id', updateUser)  
router.put('/:id/follow', followUser)  
router.put('/:id/unfollow', unFollowUser)  
router.delete('/:id', deleteUser)
router.get('/:id/follow/:id2', isUserFollowing)

module.exports = router;
