import { useRef, useState } from "react";
import playButton from "../../../../src/images/play.svg"
import pauseButton from "../../../../src/images/pause.svg"

const ShortContent = ({videoRef}) => {
    const [toDisplay, setToDisplay]=useState(playButton);
   

    


    const videoPlay = () => {
        videoRef.current.play();
    }
    const videoPause = ()=>{
        videoRef.current.pause();
        //videoRef.current.pause();
    }
    const handlePausePlay = ()=>{
        
        
        if(videoRef.current.paused){
            setToDisplay(playButton);
            videoPlay();
        }
        else{
            setToDisplay(pauseButton);
            videoPause();
        }

    }

    return ( 
        <div className="shortContent" onClick={()=>{handlePausePlay()}}>
            
            <video ref={videoRef} width="100%" height="100%" autoPlay loop>
                <source src="http://techslides.com/demos/sample-videos/small.ogv" type="video/ogg" />
            </video>
        </div>
     );
}
 
export default ShortContent;