import "./CommentBox.css"

const CommentBox = () => {
    return (
    <div className="commentBox">
        <input className="commentInput" type="text" placeholder="Share your thoughts..."></input>
        <button className="commentButton">Comment</button>
    </div>
    );
}
 
export default CommentBox;