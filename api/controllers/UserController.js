const mongoose = require("mongoose");
const UserModel = require("../models/User.js");

//to get a user from database
const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);

    //if user exists (ie. if we find id in the database)
    if (user) {
      const { password, ...otherDetails } = user._doc;
      res.status(200).json(otherDetails);
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;

  const { curUserId, curUserAdminStatus, password } = req.body;

  /*
  ****************************************************************
  " IF USER WANTS TO UPDATE PASSWORD ", THEN WE NEED TO ENCRYPT IT
  SO ASHISH DO THE SAME EXCRYPTION WHICH YOU USED IN THE LOGIN ROUTE
  IMPLEMENT IT HERE....
  ****************************************************************
*/

  if (id === curUserId || curUserAdminStatus) {
    try {
      const user = await UserModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      //new true as we'll return the updated user
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(404).json("No can't updated other users");
  }
};

const followUser = async (req, res) => {
  const id = req.params.id;

  const { curUserId } = req.body;

  // curuser want's to follow the user with "id"

  if (curUserId === id) {
    res.status(403).json("bruhh.., you can't follow yourself!");
  } else {
    try {
      const followUser = await UserModel.findById(id); // 1
      const followingUser = await UserModel.findById(curUserId); //2
      // 2 wants to follow 1
      if (!followUser.followers.includes(curUserId)) {
        //if 2 is currently not following 1, then allow him to follow 1
        await followUser.updateOne({ $push: { followers: curUserId } });
        await followingUser.updateOne({ $push: { following: id } });
        res.status(200).json("Follow successful!");
      } else {
        res.status(403).json("You are already following this person");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

const unFollowUser = async (req, res) => {
  const id = req.params.id;

  const { curUserId } = req.body;

  // curuser want's to unfollow the user with "id"

  if (curUserId === id) {
    res.status(403).json("bruhh.., you can't follow/unFollow yourself!");
  } else {
    try {
      const followUser = await UserModel.findById(id); // 1
      const followingUser = await UserModel.findById(curUserId); //2
      // 2 wants to unfollow 1
      if (followUser.followers.includes(curUserId)) {
        //if 2 is currently  following 1, then allow him to unfollow 1
        await followUser.updateOne({ $pull: { followers: curUserId } });
        await followingUser.updateOne({ $pull: { following: id } });
        res.status(200).json("UnFollow successful!");
      } else {
        res.status(403).json("User is not followed by you");
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;

  const { curUserId, curUserAdminStatus } = req.body;
  // both user and admin can delete a user
  if (curUserId === id || curUserAdminStatus) {
    try {
      const user = await UserModel.findByIdAndDelete(id);
      res.status(200).json("User Deleted successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(404).json("No can't delete other users");
  }
};

const getAllUsers = async (req, res) => {
  // console.log("in get all users\n")
  try {
    const users = await UserModel.find();
    const shuffledUsers = users.sort(() => Math.random() - 0.5);
    res.status(200).json(shuffledUsers);
  } catch (error) {
    res.status(500).json(error);
  }
};

const isUserFollowing = async (req, res) => {
  const userId = req.params.id;
  const user2 = req.params.id2;

  try {
    const user1 = await UserModel.findById(userId);
    // console.log("post found (hasuser liked)")
    if(!user1 || !user2){
      res.status(404).json("no such posts");
      return;
    }
    const liked = (user1.following.includes(user2));
    res.status(200).json({isfollow : liked});
  } catch (error) {
    res.status(500).json(error);
  }
}

const getUserInfo = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await UserModel.findById(id);

    //if user exists (ie. if we find id in the database)
    if (user) {
      const { password, followers, following, ...otherDetails } = user._doc;
      const userInfo = {
        name: user.username,
        followers: followers.length,
        following: following.length,
      };
      res.status(200).json(userInfo);
    } else {
      res.status(404).json("User does not exist");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


module.exports = {
  getUser,
  updateUser,
  followUser,
  deleteUser,
  unFollowUser,
  getAllUsers,
  isUserFollowing,
  getUserInfo
};
