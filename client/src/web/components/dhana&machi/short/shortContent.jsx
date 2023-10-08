import { useRef, useState } from "react";
import playButton from "../../../../src/images/play.svg"
import pauseButton from "../../../../src/images/pause.svg"

const ShortContent = ({videoRef}) => {
    const [currentTime, setCurrentTime] = useState(0);
    let duration;
    
    const getDurationOfVideo = () => {

        const videoIntervalTime = setInterval(() => {

            setCurrentTime(parseFloat(videoRef.current.currentTime));

            if (parseFloat(videoRef.current.currentTime) >= duration)
            {

                clearVideoInterval();
            }

        }, 1000)



        const clearVideoInterval = () => {
            clearInterval(videoIntervalTime);
        }

    }

    const videoPlay = () => {
        duration = videoRef.current.duration;
        videoRef.current.play();
        getDurationOfVideo();
    }
    const videoPause = ()=>{
        videoRef.current.pause();
        //videoRef.current.pause();
    }
    const handlePausePlay = ()=>{
        
        
        if(videoRef.current.paused){
            videoPlay();
        }
        else{
            videoPause();
        }

    }

    return ( 
        <div className="shortContent" onClick={()=>{handlePausePlay()}}>
            
            <video ref={videoRef} width="100%" height="100%" autoPlay loop style={{objectFit:"fill", borderRadius:"1rem"}}>
                <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
            </video>
            <div id = "videoDurationBar" style={{width:""+((parseFloat(videoRef.current.currentTime).toFixed(6)/parseFloat(videoRef.current.duration))*93.5)+"%", height:"0.2rem", backgroundColor:"red",borderRadius:"0.25rem", translate:"0.5rem -0.6rem 0rem"}}></div>
            
        </div>
     );
}
export default ShortContent;