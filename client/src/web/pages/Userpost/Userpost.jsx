import { useContext, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./userpost.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Userpost(params) {
  const [addpost, setaddpost] = useState({
    userId: null,
    image: null,
    desc: undefined,
    tags: [],
  });
  const [img, setImg] = useState();
  const [inptags, settags] = useState(null);
  const [error, setErr] = useState(null);
  const [success, setsuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageReady, setImageReady] = useState(false);

  function parseTags(input) {
    const tags = input.split(",").map((tag) => tag.trim());
    return tags;
  }

  const handleChange = (e) => {
    setLoading(false);
    setErr(null);

    if (e.target.id === "image") {
      // setaddpost({ ...addpost, image: e.target.files[0] });
      setImg(e.target.files[0]);
    } else {
      setaddpost((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  const handletags = (e) => {
    setLoading(false);
    setErr(null);
    settags(e.target.value);
  };

  useEffect(() => {
    if (addpost.image && imageReady) {
      const makeApiCall = async () => {
        try {
          const res = await axios.post("http://localhost:4000/api/post/", addpost);

          if (res.data === "Post Uploaded") {
            setsuccess(true);
            Navigate("/");
          } else {
            setErr("Error posting post");
          }
        } catch (e) {
          setLoading(false);
          if (addpost.userId) {
            setErr("Can't post");
          } else {
            setsuccess(true);
          }
        }
      };

      makeApiCall();
    }
  }, [addpost.image, imageReady]);

  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  const uploadImageToCloudinary = async () => {
    try {
      const formData = new FormData();
      formData.append("file", img);
      formData.append("upload_preset", "qag0fy0w"); // Replace with your Cloudinary upload preset

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dtap12gmt/image/upload",
        formData
      );

      if (res.data.secure_url) {
        console.log("got image url");
        return res.data.secure_url;
      } else {
        throw new Error("Image upload to Cloudinary failed");
      }
    } catch (error) {
      throw error;
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!user) {
        Navigate("/login");
      }

      const tagsList = await parseTags(inptags);
      setaddpost({
        ...addpost,
        userId: user.id,
        tags: tagsList,
      });

      // Uploading image file to Cloudinary to get img link
      const imageUrl = await uploadImageToCloudinary();
      console.log(imageUrl);

      // Set the image URL in the state and mark imageReady as true
      setaddpost((prev) => ({ ...prev, image: imageUrl }));
      setImageReady(true);

      console.log("DB URL : ");
      console.log(addpost.image);
      console.log(imageUrl, " actual url");
    } catch (e) {
      setLoading(false);
      if (addpost.userId) {
        setErr("Can't post");
      } else {
        setsuccess(true);
      }
    }
  };

  return (
    <div className="userpostcnt">
      <Navbar />
      <div className="addcontainer">
      <h2>Share your culture around the globe!</h2>
        <form>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />

          <label htmlFor="desc">Description:</label>
          <textarea
            id="desc"
            name="desc"
            rows="4"
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="tags">Tags:</label>
          <input
            type="text"
            id="tags"
            name="tags"
            className="tags-input"
            placeholder="Enter tags separated by commas"
            onChange={handletags}
          />
          <div className="tags" id="tag-container"></div>

          <button type="submit" disabled={loading} onClick={handleClick}>
            Submit
          </button>
          {error && <span className="rederr"> {error}</span>}
          {success && <span className="greensuc">Click again to post</span>}
        </form>
      </div>
    </div>
  );
}
