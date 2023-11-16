import { useContext, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./userpost.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

export default function UserpostShort(params) {
  const [addpost, setaddpost] = useState({
    userId: null,
    video: null,
    desc: undefined,
    likes: [],
    tags: [],
  });
  const [inptags, settags] = useState(null);
  const [error, setErr] = useState(null);
  const [success, setsuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scaleOfButtonSelectedShort, setScaleOfButtonSelectedShort] =
    useState("1.5");
  const [videoUpload, setVideoUpload] = useState(null);
  const [videoList, setVideoList] = useState(null);
  const [reqVideoUrl, setReqVideoUrl] = useState("");
  const [temp, setTemp] = useState(12);
  const videoListRef = ref(storage, "videos/");

  const uploadVideo = () => {
    // event.preventDefault();

    if (videoUpload == null) return;

    const videoRef = ref(storage, `videos/${videoUpload.name + v4()}`);
    uploadBytes(videoRef, videoUpload).then(() => {
      alert("Video Uploaded");
      setTemp(123123);
    });
  };

  useEffect(() => {
    listAll(videoListRef).then((res) => {
      console.log(res);
      res.items.forEach((item) => {
        // console.log("cur item : ",item)
        if (videoUpload) {
          console.log("video upload : ", videoUpload.name);
          if (item._location.path_.includes(videoUpload.name)) {
            console.log("got the same file from fb");
            getDownloadURL(item).then((url) => {
              setReqVideoUrl(url);
              alert("got the req URL");
              console.log(url);
              return;
            });
          }
        }
      });
    });
  }, [temp]);
  function parseTags(input) {
    const tags = input.split(",").map((tag) => tag.trim());
    return tags;
  }

  const handletags = (e) => {
    setLoading(false);
    setErr(null);
    settags(e.target.value);
  };

  const { user } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleChange = (e) => {
    setLoading(false);
    setErr(null);
  };

  const handleshortPost = async (e) => {
    e.preventDefault();

    uploadVideo();
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

      setaddpost((prev) => ({ ...prev, video: reqVideoUrl }));

      const res = await axios.post(
        "http://localhost:4000/api/shorts/",
        addpost
      );

      if (res) setsuccess(true);
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
    <div className="userpostcnt" style={{ height: "100vh" }}>
      <Navbar />
      <div className="addcontainer">
        <div className="addcontainerMain">
          <div className="buttonsOnAddPostDiv">
            <button className="button" onClick={() => Navigate("/userpost")}>
              Post Image
            </button>
            <button
              className="button"
              style={{ scale: scaleOfButtonSelectedShort }}
            >
              Post Video
            </button>
          </div>
          <div
            style={{
              borderTop: "0.2rem solid #4066ff",
              padding: "0 1rem",
              borderRadius: "4rem 0 0 0",
            }}
          >
            <h2>Share your culture around the globe!</h2>

            <form>
              <label htmlFor="video">Short:</label>
              <input
                type="file"
                onChange={(event) => {
                  setVideoUpload(event.target.files[0]);
                }}
              />

              <label htmlFor="desc">Description:</label>
              <textarea
                id="desc"
                name="desc"
                rows="4"
                // onChange={handleChange}
                required
                maxLength="70"
              ></textarea>

              <label htmlFor="tags">Tags:</label>
              <input
                type="text"
                id="tags"
                name="tags"
                className="tags-input"
                placeholder="Enter tags separated by commas"
                // onChange={handletags}
              />
              <div className="tags" id="tag-container"></div>

              <button
                className="userPostButton"
                type="submit"
                disabled={loading}
                onClick={handleshortPost}
              >
                Upload
              </button>
              {error && <span className="rederr"> {error}</span>}
              {success && <span className="greensuc">Click again to post</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
