const mongoose=require('mongoose');

  const shortsSchema = mongoose.Schema(
    {
      userId: { type: String, required: true },
      desc: String,
      likes: [],
      tags : [],
      image: String,
      video: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  

  module.exports = mongoose.model("Shorts", shortsSchema);

