const mongoose = require("mongoose");
const PostModel = require("../models/Post.js");

// Create a new post
const createPost = async (req, res) => {
  console.log("post started");
  const newPost = new PostModel(req.body);
  //console.log(newPost)
  try {
    const post = await newPost.save();
    console.log("post ended");
    if (!post) {
      console.log("cant post");
    }
    res.status(200).json("Post Uploaded");
  } catch (error) {
    res.status(500).json(error);
  }
};

//get all post from database
const getPosts = async (req, res) => {
  try {
    const post = await PostModel.find();
    post.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get a specific post from the database
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
};

// Update a post
const updatePost = async (req, res) => {
  const postId = req.params.id; // from the URL
  const { userId } = req.body; // user who is trying to update this post

  try {
    const post = await PostModel.findById(postId); // Should be PostModel.findById(postId)
    if (post.userId === userId) {
      console.log("found post");
      await post.updateOne({ $set: req.body });
      console.log("updated successfully");
      res.status(200).json("Post Updated");
    } else {
      res.status(403).json("Action Forbidden");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a post
const deletePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(id);
    
      await post.deleteOne();
      console.log("post deleted");
      res.status(200).json("Post deleted");
    // } else {
    //   console.log("not possible to delete post, it not same");
    //   res.status(403).json("Action Forbidden");
    //}
  } catch (error) {
    res.status(500).json(error);
  }
};

// the SAME is used for dislike also
// if you already liked a post, then if you click like it'll become dislike(no like)
const likePost = async (req, res) => {
  const id = req.params.id;
  const { userId } = req.body;

  try {
    const post = await PostModel.findById(id);
    console.log("found post");
    if (post.likes.includes(userId)) {
      //then he's trying to remove the like
      console.log("removed like");
      await post.updateOne({ $pull: { likes: userId } });
      res.status(200).json("removed the like");
    } else {
      // he's liking the post
      await post.updateOne({ $push: { likes: userId } });
      res.status(200).json("post liked");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// If a user page is created and he wants to see his/her post
// in the order in which he posted, then this can be used

const getUserPosts = async (req, res) => {
  const userId = req.params.id;

  try {
    const curUserPosts = await PostModel.find({ userId: userId });

    // Sort the array before sending it as a JSON response
    curUserPosts.sort((a, b) => b.createdAt - a.createdAt);

    res.status(200).json(curUserPosts);
  } catch (error) {
    res.status(500).json(error);
  }
};

//checks if user has alredy comment
// if yes, it just updates the comment
// else creates a new comment

const commentOnPost = async (req, res) => {
  const postId = req.params.id;
  const { userId, text } = req.body;

  try {
    const post = await PostModel.findById(postId);
    if (!post) {
      res.status(404).json("Post not found");
    } else {
      const newComment = {
        userId,
        text,
      };
      const existingComment = post.comments.find(
        (comment) => comment.userId === userId
      );

      if (existingComment) {
        console.log(existingComment, " is already present\n");
        const filter = {
          _id: postId,
          "comments.userId": userId,
        };

        const update = {
          $set: {
            "comments.$.text": text,
          },
        };

        const updatedPost = await PostModel.findOneAndUpdate(filter, update, {
          new: true,
        });
        res.status(200).json(updatedPost);
        console.log("updated old comment");
        return;
      }
      post.comments.push(newComment);
      const updatedPost = await post.save();
      res.status(200).json(updatedPost);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteComment = async (req, res) => {
  const postId = req.params.id;
  const { userId } = req.body;
  try {
    const post = await PostModel.findById(postId);

    if (!post) {
      res.status(404).json("no such post found");
      return;
    }

    const commentIdx = post.comments.findIndex(
      (comment) => comment.userId === userId
    );
    if (commentIdx === -1) {
      res.status(404).json("first comment, then delete ");
      console.log("no such comment");
      return;
    }
    post.comments.splice(commentIdx, 1);
    await post.save();
    res.status(200).json("Comment Deleted Successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};

const getComments = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await PostModel.findById(id);
    if (!post) {
      console.log("No such post");
      return;
    }
    res.status(200).json(post.comments);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getPostByTags = async (req, res) => {
   console.log(" inside getostbytags");
  const tag = req.params.id;
  console.log(tag, " is the tag requested\n");
  try {
    const posts = await PostModel.find();
    const filteredPosts = posts.filter(post => post.tags.some(postTag => postTag.includes(tag)));
    res.status(200).json(filteredPosts);
  } catch (error) {
    res.status(500).json(error);
  }
}

const hasUserLikedPost = async (req, res) => {
  const id = req.params.id;
  const userId = req.params.id2;

  try {
    const post = await PostModel.findById(id);
    //console.log("post found (hasuser liked)")
    if(!post){
      res.status(404).json("no such posts");
      return;
    }
    const liked = (post.likes.includes(userId));
    if(liked){
      res.status(200).json({islike:true})
    }
    else res.status(200).json({islike:false});
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
  likePost,
  getUserPosts,
  commentOnPost,
  deleteComment,
  getComments,
  getPostByTags,
  hasUserLikedPost
};
