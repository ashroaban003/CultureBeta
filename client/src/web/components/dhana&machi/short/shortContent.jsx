import { useEffect, useRef, useState } from "react";
import playButton from "../../../../images/play.svg";
import pauseButton from "../../../../images/pause.svg";

import { Waypoint } from "react-waypoint";

const ShortContent = ({ videoRef, link }) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [video, setVideo] = useState("");
  // const [temp, setTemp] = useState(false);//observed that the video progress bar was coming full due to 0/0 => current/duration
  //                                         // to prevent that setTimeout to 2 sec that is until we have video and then
  //                                         // we can have 0/something

  let duration;

  const getDurationOfVideo = () => {
    const videoIntervalTime = setInterval(() => {
      setCurrentTime(parseFloat(videoRef.current.currentTime));

      if (parseFloat(videoRef.current.currentTime) >= duration) {
        clearVideoInterval();
      }
    }, 1000);

    const clearVideoInterval = () => {
      clearInterval(videoIntervalTime);
    };
  };

  const videoPlay = () => {
    duration = videoRef.current.duration;
    videoRef.current.play();
    getDurationOfVideo();
  };
  const videoPause = () => {
    videoRef.current.pause();
    //videoRef.current.pause();
  };
  const handlePausePlay = () => {
    if (videoRef.current.paused) {
      videoPlay();
    } else {
      videoPause();
    }
  };
  const tryToPause = () => {
    if (!videoRef.current.paused) {
      videoPause();
    }
  };

  const tryToPlay = () => {
    if (videoRef.current.paused) {
      videoPlay();
    }
  };

  useEffect(() => {
    const getVideo = async () => {
      await setVideo(link);
    };
    getVideo();
  }, []);

  return (
    <div
      className="shortContent"
      onClick={() => {
        handlePausePlay();
      }}
    >
      {!video && <div style={{ backgroundColor: "red" }}>LOADING</div>}
      <video
        ref={videoRef}
        width="100%"
        height="100%"
        //autoPlay
        loop
        style={{ objectFit: "fill", borderRadius: "1rem" }}
      >
        {video && <source src={video} type="video/ogg" />}
      </video>
      {video && (
        <div
          id="videoDurationBar"
          style={{
            width:
              "" +
              (parseFloat(videoRef.current.currentTime).toFixed(6) /
                parseFloat(videoRef.current.duration)) *
                92 +
              "%",
            height: "0.2rem",
            backgroundColor: "red",
            borderRadius: "0.25rem",
            translate: "0.5rem -0.6rem 0rem",
          }}
        ></div>
      )}
      <Waypoint onEnter={tryToPlay} onLeave={tryToPause}></Waypoint>
    </div>
  );
};
export default ShortContent;
