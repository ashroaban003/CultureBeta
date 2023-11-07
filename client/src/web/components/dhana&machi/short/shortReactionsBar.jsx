import likeAfter from "../../../../images/likeAfter.svg";
import comment from "../../../../images/comment.svg";
import likeBefore from "../../../../images/likeBefore.svg";
import { useState } from "react";

const ShortReactionsBar = () => {
    const [imageLink, setImageLink] = useState(likeBefore);
    return ( 
        <div className="shortReactionsBar">
            <button className="like" onClick={()=>{
                if(imageLink===likeBefore) setImageLink(likeAfter);
                else setImageLink(likeBefore);
            }}><img src={imageLink} alt="LikeButton"/></button>
            <button className="commentButton"><img src={comment} alt="commentButton"/></button>
        </div>
     );
}
 
export default ShortReactionsBar;