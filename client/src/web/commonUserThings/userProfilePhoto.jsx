import './userProfilePhoto.css'

const UserProfilePhoto = ({imageSource}) => {
    return ( 
        <img className="userProfilePhoto" src={imageSource}/>
     );
}
 
export default UserProfilePhoto;