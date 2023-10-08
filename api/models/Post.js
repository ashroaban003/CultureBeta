const mongoose=require('mongoose');


const commentSchema = mongoose.Schema(
    {
      userId: { type: String, required: true },
      text: String,
    },
    { timestamps: true }
  );
  
  const postSchema = mongoose.Schema(
    {
      userId: { type: String, required: true },
      desc: { type: String, required: true },
      likes: [],
      tags : [],
      image: String,
      video: String,
      comments: [commentSchema],
    },
    {
      timestamps: true,
    }
  );
  

  module.exports = mongoose.model("Posts", postSchema);

