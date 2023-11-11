import photo from "../../../images/ven.png"
import useFetch from "../../hooks/usefetch";
import "./OtherUserComment.css"
const OtherUserComment = ({item}) => {
    const { data, loading,reFetch }=useFetch(`http://localhost:4000/api/user/${item.userId}`)
    return ( 
        <div className="otherUserCommentBox">
            <div className="otherUserCommentProfileImage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEkveEWaWSZ6ytqtnxs7r3ObfsL07gjHsZg&usqp=CAU"></img>
            </div>
            <div className="otherUserCommentTextPart">
            <span className="otherUserCommentUserName">{data.username}</span>
            <div className="otherUserComment">{item.text}</div>
            </div>
        </div>
     );
}
 
export default OtherUserComment;