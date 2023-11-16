import likeAfter from "../../../../images/likeAfter.svg";
import comment from "../../../../images/comment.svg";
import likeBefore from "../../../../images/likeBefore.svg";
import likeBeforeDark from "../../../../images/likeBeforeDark.svg";
import { useState, useEffect } from "react";

const ShortReactionsBar = () => {
  const [like, setlike] = useState();
  const [imageLink, setImageLink] = useState(
    localStorage.getItem("colorThemeOfCultureHub") == "light"
      ? likeBefore
      : likeBeforeDark
  );

  useEffect(() => {
    setImageLink(
      localStorage.getItem("colorThemeOfCultureHub") == "light"
        ? likeBefore
        : likeBeforeDark
    );
  }, [localStorage.getItem("colorThemeOfCultureHub")]);

  // const [imageLink, setImageLink] = useState(likeBefore);
  return (
    <div className="shortReactionsBar">
      <button
        className="like"
        onClick={() => {
          if (imageLink === likeBefore || imageLink === likeBeforeDark)
            setImageLink(likeAfter);
          else
            setImageLink(
              localStorage.getItem("colorThemeOfCultureHub") == "light"
                ? likeBefore
                : likeBeforeDark
            );
        }}
      >
        <img src={imageLink} alt="LikeButton" />
      </button>
    </div>
  );
};

export default ShortReactionsBar;
