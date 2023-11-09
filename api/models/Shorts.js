const mongoose=require('mongoose');

  const shortsSchema = mongoose.Schema(
    {
      userId: { type: String, required: true },
      desc: { type: String, required: true },
      likes: [],
      tags : [],
      image: String,
      video: String,
    },
    {
      timestamps: true,
    }
  );
  

  module.exports = mongoose.model("Shorts", shortsSchema);

