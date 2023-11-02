import UserProfilePhoto from "../commonUserThings/userProfilePhoto"
import profilePhoto from "../../../../images/l.png"
import UserName from "../commonUserThings/userName";

const ShortFooter = () => {
    return ( 
        <div className="shortFooter">
        <div className="shortProfileInfo">   
            <UserProfilePhoto imageSource={profilePhoto}></UserProfilePhoto>
            <UserName Name="Sai Pallavi"></UserName>
        </div>
        <span style={{fontSize:"0.8rem"}}>fewlines of content that's it we will restrict the user with no of characters..</span>
        </div>
     );
}
 
export default ShortFooter;
