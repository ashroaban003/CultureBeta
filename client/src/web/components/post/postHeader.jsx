import UserProfilePhoto from "../../commonUserThings/userProfilePhoto"
import profilePhoto from "../../../images/l.png"
import UserName from "../../commonUserThings/userName";
import '../post/post.css';

const PosterHeader = () => {
    return ( 
        <div className="posterHeader">   
            <UserProfilePhoto imageSource={profilePhoto}></UserProfilePhoto>
            <UserName Name="Sai Pallavi"></UserName>
            <button className="more">More!!!</button>
        </div>
     );
}
 
export default PosterHeader;