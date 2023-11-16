import { useContext, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./userpost.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {storage} from './firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4} from 'uuid'


export default function UserpostShort(params) {
  const [addpost, setaddpost] = useState({
    userId: null,
    video: null,
    desc: "post",
    likes: [],
    tags: [],
  });
  const [inptags, settags] = useState(null);
  const [error, setErr] = useState(null);
  const [success, setsuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scaleOfButtonSelectedShort, setScaleOfButtonSelectedShort] = useState("1.5");
  const [videoUpload, setVideoUpload] = useState(null);
  const [videoList, setVideoList] = useState(null);
  const [reqVideoUrl, setReqVideoUrl] = useState("");
  const [temp, setTemp] = useState(12);
  const videoListRef = ref(storage, "videos/")

  const [continuevideo, setContinueVideo] = useState(false);

  const uploadVideo = async () => {
    try {
      if (videoUpload == null) return;
      if(continuevideo==false) return;

      const videoRef = ref(storage, `videos/${videoUpload.name + v4()}`);
      await uploadBytes(videoRef, videoUpload);

      setTemp((prev) => prev + 1);
      alert("Video Uploaded to firebase");

      const url = await getDownloadURL(videoRef);
      setReqVideoUrl(url);
      
      return url; // Return the URL for further use
    } catch (error) {
      console.error("Error uploading video:", error.message);
      throw error; // Re-throw the error to be caught in the calling function
    }
  };

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const res = await listAll(videoListRef);
        for (const item of res.items) {
          if (videoUpload && item._location.path_.includes(videoUpload.name)) {
            const url = await getDownloadURL(item);
            setReqVideoUrl(url);
           // alert("Got the req URL");
            console.log(url);
            break;
          }
        }
      } catch (error) {
        console.error("Error fetching video URL:", error.message);
      }
    };

    fetchVideoUrl();
  }, [temp, videoListRef, videoUpload]);

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

  const handleshortPost = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      if (!user) {
        Navigate("/login");
        return;
      }
     
      
      const uploadedVideoUrl = await uploadVideo();

      setaddpost({
        ...addpost,
        userId: user.id,
        video: reqVideoUrl,
      });

      const res = await axios.post("http://localhost:4000/api/shorts/", addpost);

      if (res) {
        alert("Video Uploaded to backend");
        setsuccess(true);
      }
    } catch (error) {
      setLoading(false);
      if (addpost.userId) {
        setErr("Can't post");
      } else {
        setsuccess(true);
      }
    }
  };

  const handleChange=(e)=>{
    e.preventDefault();
    setContinueVideo(true);
  }
  
  return (
    <div className="userpostcnt" style={{height:"100vh"}}>
      <Navbar />
      <div className="addcontainer">
      <div className="addcontainerMain">
        <div className="buttonsOnAddPostDiv">
        <button className="button" onClick={()=>Navigate('/userpost')}>Post Image</button>
        <button className="button" style={{scale:scaleOfButtonSelectedShort}}>Post Video</button>
        </div>
        <div style={{borderTop:"0.2rem solid #4066ff", padding: "0 1rem", borderRadius:"4rem 0 0 0"}}>

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

          <button className="userPostButton"type="submit" disabled={loading} onClick={handleshortPost}>
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
