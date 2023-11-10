import { useNavigate } from "react-router";
import Navbar from "../../components/navbar/Navbar";



const UserPostChoice = () => {

    const navigate = useNavigate();

    return ( 

        <div>
            <Navbar/>
            <div>
            <button className="button" onClick={()=>navigate('/userpost')}>
                Post Image
            </button>
            <button className="button" onClick={()=>navigate('/PostShort')}>
                Post Short
            </button>
            </div>
        </div>
     );
}
 
export default UserPostChoice;