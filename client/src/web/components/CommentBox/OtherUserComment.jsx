import photo from "../../../images/ven.png"
import "./OtherUserComment.css"
const OtherUserComment = () => {
    return ( 
        <div className="otherUserCommentBox">
            <div className="otherUserCommentProfileImage">
            <img src={photo}></img>
            </div>
            <div className="otherUserCommentTextPart">
            <span className="otherUserCommentUserName">Username</span>
            <div className="otherUserComment">comment commentcomment commentcomme  ntcomm entcomment</div>
            </div>
        </div>
     );
}
 
export default OtherUserComment;