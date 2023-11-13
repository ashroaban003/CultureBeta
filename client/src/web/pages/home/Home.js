import PostFeed from "../../components/Feed/PostFeed/PostFeed";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Navbar from "../../components/navbar/Navbar";
import './Home.css'
import CommentBox from "../../components/CommentBox/CommentBox";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";

export default function Home(params) {
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();
  
  return(
    
      <div>
     {user  &&
     <div> 
      <Navbar/>  
      
       <div className="Home">
         <div className="HomeMain" style={{marginTop: "5rem"}}>
       {user && <ProfileSide />}
        <PostFeed/>
        <RightSide />
        </div>
       </div>
       </div>
     } 
     {!user &&
       <Login/>
     }
    </div>
  );
}
