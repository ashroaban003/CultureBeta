import likeAfter from "../../../../src/images/likeAfter.svg";
import comment from "../../../../src/images/comment.svg";
import likeBefore from "../../../../src/images/likeBefore.svg";
import { useState } from "react";
const PostReactionsBar = () => {
    const [imageLink, setImageLink] = useState(likeBefore);
    return ( 
        <div className="postReactionsBar">
            <button className="like" onClick={()=>{
                if(imageLink==likeBefore) setImageLink(likeAfter);
                else setImageLink(likeBefore);
            }}><img src={imageLink}/></button>
            <button className="comment"><img src={comment}/></button>
        </div>
     );
}
 
export default PostReactionsBar;