import ShortFooter from "./shortFooter"
import "../short/short.css"
import ShortReactionsBar from "./shortReactionsBar"
import ShortContent from "./shortContent"
import ShortsTagBar from "./shortTagsBar"
import { useState, useRef } from "react"

import mute from "../../../../src/images/mute.svg"
import unmute from "../../../../src/images/unmute.svg"

const Short = () => {
    const videoRef = useRef();
    const [state, setState] = useState('paused');
    const [muteIcon, setMuteIcon] = useState(unmute);

    

    
    const videoMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
    }
   
    return ( 
        <div className="short">
            
            <ShortsTagBar></ShortsTagBar>
            <div className="contentReactionsContainer">
            <ShortContent videoRef={videoRef}></ShortContent>
            <ShortReactionsBar></ShortReactionsBar>
            <div className="controlsOfVideo">
                {/* <button onClick={()=>{
                    handlePausePlay();
                }}><img src = {state==='paused' ? playButton:pauseButton}/></button> */}
                <button onClick={()=>{
                    videoMute();
                    if(muteIcon===mute){
                        setMuteIcon(unmute);
                    }
                    else{
                        setMuteIcon(mute);
                    }
                }}><img src = {muteIcon}/></button>
                
            </div>
            </div>
            
            
            <ShortFooter></ShortFooter>
        </div>
     );
}
 
export default Short;
