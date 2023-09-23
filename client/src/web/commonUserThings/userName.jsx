import '../commonUserThings/userName.css'

const UserName = ({Name}) => {
    return ( 
        <div className="userName">
            <span>{Name}</span>
        </div>
     );
}
 
export default UserName;
