import ShortFooter from "./shortFooter";
import "../short/short.css";
import ShortReactionsBar from "./shortReactionsBar";
import ShortContent from "./shortContent";
//import ShortsTagBar from "./shortTagsBar"
import { useState, useRef } from "react";
import Navbar from "../../navbar/Navbar";
import mute from "../../../../images/mute.svg";
import unmute from "../../../../images//unmute.svg";
import CommentBox from "../../CommentBox/CommentBox";

const Short = ({ item }) => {
  const videoRef = useRef();
  const [state, setState] = useState("paused");
  const [muteIcon, setMuteIcon] = useState(unmute);

  const videoMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  //console.log("ITEM", item);

  return (
    <div className="shortContainer" style={{ height: "100vh" }}>
      <Navbar />
      <div className="short">
        <div className="shortMain">
          {/* <ShortsTagBar></ShortsTagBar> */}
          <div className="contentReactionsContainer">
            {item && (
              <ShortContent
                videoRef={videoRef}
                link={item.video}
              ></ShortContent>
            )}
            <ShortReactionsBar></ShortReactionsBar>
            <div className="controlsOfVideo">
              {/* <button onClick={()=>{
                    handlePausePlay();
                }}><img src = {state==='paused' ? playButton:pauseButton}/></button> */}
              <button
                className="muteIcon"
                onClick={() => {
                  videoMute();
                  if (muteIcon === mute) {
                    setMuteIcon(unmute);
                  } else {
                    setMuteIcon(mute);
                  }
                }}
              >
                <img src={muteIcon} />
              </button>
            </div>
          </div>

          {/* <ShortFooter></ShortFooter> */}
        </div>
      </div>
    </div>
  );
};

export default Short;
