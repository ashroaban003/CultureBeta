import "./posts.css";
import likeAfter from "../../../../images/likeAfter.svg";
import comment from "../../../../images/comment.svg";
import commentDark from "../../../../images/commentDark.svg";
import likeBefore from "../../../../images/likeBefore.svg";
import likeBeforeDark from "../../../../images/likeBeforeDark.svg";
import { useContext, useState } from "react";
import CommentBox from "../../CommentBox/CommentBox";
import OtherUserComment from "../../CommentBox/OtherUserComment";
import { AuthContext } from "../../../context/AuthContext";
import downarrow from "../../../../images/downarrow.svg";
import axios from "axios";
import useFetch from "../../../hooks/usefetch";
import deleteDark from "../../../../images/deletedark.svg";
import deleteLight from "../../../../images/deletelight.svg";
import { useEffect } from "react";
import useFetch2 from "../../../hooks/usefetch2";
import useFetch1 from "../../../hooks/usefetch1";
import { useNavigate } from "react-router-dom";

export default function Posts({ item, margin, height, reload }) {
  const { user } = useContext(AuthContext);
  const [id, setid] = useState(null);
  
  const [addcomment, setaddcoment] = useState({
    userId: null,
    text: null,
  });
  const [liked, setliked] = useState({
    userId: user.id,
  });

  const [suc, setsuc] = useState("try again");

  const { data, loading, reFetch } = useFetch(
    `http://localhost:4000/api/post/${item._id}/comments`
  );

  const handlecomment = async () => {
    try {
      setaddcoment({
        ...addcomment,
        userId: user.id,
      });
      //console.log(addcomment);
      const res = await axios.post(
        `http://localhost:4000/api/post/${item._id}/comment`,
        addcomment
      );
      setsuc("success");
      reFetch();
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setsuc("try again");
    setaddcoment((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const [imageLink, setImageLink] = useState(
    localStorage.getItem("colorThemeOfCultureHub") == "light"
      ? likeBefore
      : likeBeforeDark
  );
  const [commentIcon, setCommentIcon] = useState(
    localStorage.getItem("colorThemeOfCultureHub") == "light"
      ? comment
      : commentDark
  );
  const [deleteImage, setDeleteImage] = useState(
    localStorage.getItem("colorThemeOfCultureHub") == "light"
      ? deleteLight
      : deleteDark
  );
  const [backgroundOfLikeButton, setBackgroundOfLikeButton] = useState();
  const [backgroundOfTags, setBackgroundOfTags] = useState(
    localStorage.getItem("colorThemeOfCultureHub") == "light" ? "gray" : "white"
  );
  const [displayCommentSection, setDisplayCommentSection] = useState(false);
  const tags = item.tags;
  const { data2, reFetch2 } = useFetch2(
    `http://localhost:4000/api/user/${item.userId}`
  );

  const { data1, reFetch1 } = useFetch1(
    `http://localhost:4000/api/post/${item._id}/like/${user.id}`
  );
  //console.log(data1);
  const [like, setlike] = useState();
  //console.log(like);
  // const [vis,setvis]=useState(true)
  useEffect(() => {
    if (like) {
      setImageLink(likeAfter);
    } else
      setImageLink(
        localStorage.getItem("colorThemeOfCultureHub") == "light"
          ? likeBefore
          : likeBeforeDark
      );

    setCommentIcon(
      localStorage.getItem("colorThemeOfCultureHub") == "light"
        ? comment
        : commentDark
    );
    setDeleteImage(
      localStorage.getItem("colorThemeOfCultureHub") == "light"
        ? deleteLight
        : deleteDark
    );
    setBackgroundOfTags(
      localStorage.getItem("colorThemeOfCultureHub") == "light"
        ? "gray"
        : "white"
    );
  }, [localStorage.getItem("colorThemeOfCultureHub")]);

  const handlelike = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:4000/api/post/${item._id}/like`,
        liked
      );
      if (res) setsuc("liked");
      reFetch1();
    } catch (e) {
      setsuc("failed");
      console.log(e);
    }
  };

  const handldelete = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.delete(
        `http://localhost:4000/api/post/${item._id}`,
        liked
      );
      if (res) reload();
    } catch (e) {
      console.log(e);
    }
  };
  const Navigate=useNavigate();

  const profileclick = async (e) => {
       Navigate(`/profile/${item.userId}`);
  }

  return (
    <section className="post-section" style={{ margin: margin }}>
      {loading && <div className="loadingAnimationDiv"></div>}
      {!loading && (
        <>
          <div className="post-container">
            <div className="post_header">
              <div className="profile-image" onClick={profileclick}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEkveEWaWSZ6ytqtnxs7r3ObfsL07gjHsZg&usqp=CAU"
                  alt="Profile"
                />
              </div>
              <div className="flexColStart">
                <span>{data2.username}</span>
                {/* <span className='smalltext'> followers</span> */}
              </div>

              {user.id === item.userId && height == "20rem" && (
                <div
                onDoubleClick={handldelete}
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    margin: " 0 0 0 auto",
                    alignSelf: "flex-start",
                  }}
                >
                  <button
                    onDoubleClick={handldelete}
                    style={{ background: "none", border: "none" }}
                  >
                    <img
                      style={{
                        width: "1.5rem",
                        height: "1.5rem",
                        objectFit: "contain",
                      }}
                      src={deleteImage}
                    ></img>
                  </button>
                </div>
              )}
            </div>
            <div className="post-comments">
              <span>
                {item.desc}
                <br />
              </span>
            </div>
          </div>
          <div className="post-img-cnt">
            <img
              src={item.image}
              alt=""
              style={{
                width: "90%",
                height: height,
                paddingLeft: "1rem",
                paddingRight: "1rem",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="post-tag-cnt">
            {tags.map((tag) => (
              <span
                className="post-tag"
                style={{
                  backgroundColor: backgroundOfTags,
                  padding: "0.2rem 0.4rem",
                  // "hsl(" + Math.random() * 360 + ", 100%, 60%)"
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <span>{data1.islike}</span>
          <div className="postReactionsBar">
            {!data1.islike && (
              <button
                className="like"
                style={{ backgroundColor: backgroundOfLikeButton }}
                onClick={handlelike}
              >
                <img src={imageLink} alt="LikeButton" />
              </button>
            )}
            {data1.islike && (
              <button
                className="like"
                style={{ backgroundColor: backgroundOfLikeButton }}
                onClick={handlelike}
              >
                <img src={likeAfter} alt="LikeButton" />
              </button>
            )}

            <button
              className="commentButton"
              onClick={() => setDisplayCommentSection((curr) => !curr)}
            >
              <img
                src={commentIcon}
                alt="commentButton"
                style={{
                  margin: "0.1rem 0.4rem 0rem 0.4rem",
                }}
              />
            </button>
          </div>
          {displayCommentSection && (
            <div style={{ width: "96%", margin: "0rem auto" }}>
              {user && (
                <div className="commentBox">
                  <input
                    id="text"
                    className="commentInput"
                    type="text"
                    onChange={handleChange}
                    placeholder="Share your thoughts..."
                  ></input>
                  <button
                    className="commentButton"
                    id="commentButtonOnPosts"
                    onClick={handlecomment}
                  >
                    <img src={downarrow}></img>
                  </button>
                </div>
              )}
              <div className="otherUserCommentsToDisplayInPosts">
                {/* <span>{suc}</span> */}
                {data.map((item) => (
                  <OtherUserComment item={item} key={item._id} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
}
