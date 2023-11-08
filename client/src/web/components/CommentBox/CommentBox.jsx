import "./CommentBox.css"
import downarrow from "../../../images/downarrow.svg"
const CommentBox = () => {
    return (
    <div className="commentBox">
        <input id="commentInput" type="text" placeholder="Share your thoughts..."></input>
        <button className="commentButton" id="commentButtonOnPosts"><img src={downarrow}></img></button>
    </div>
    );
}
 
export default CommentBox;