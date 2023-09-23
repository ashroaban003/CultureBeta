import './userProfilePhoto.css'

const UserProfilePhoto = ({imageSource}) => {
    return ( 
        <img className="userProfilePhoto" src={imageSource} alt="profilephoto"/>
     );
}
 
export default UserProfilePhoto;