import likeAfter from "../../../../src/images/likeAfter.svg";
import comment from "../../../../src/images/comment.svg";
import likeBefore from "../../../../src/images/likeBefore.svg";
import { useState } from "react";

const ShortReactionsBar = () => {
    const [imageLink, setImageLink] = useState(likeBefore);
    return ( 
        <div className="shortReactionsBar">
            <button className="like" onClick={()=>{
                if(imageLink===likeBefore) setImageLink(likeAfter);
                else setImageLink(likeBefore);
            }}><img src={imageLink} alt="LikeButton"/></button>
            <button className="comment"><img src={comment} alt="commentButton"/></button>
        </div>
     );
}
 
export default ShortReactionsBar;