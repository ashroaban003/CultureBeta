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

import FollowersCard from '../../components/FollwersCard/FollowersCard'
import { useState } from "react";



export default function Home(params) {
  const [searchedTag, setSearchedTag] = useState("");
  const {user}=useContext(AuthContext);
  const navigate=useNavigate();
  
  return(
    
      <div>
     {user &&
     <>
     <Navbar setTag={setSearchedTag}/>  
       <div className="Home">
         <div className="HomeMain" style={{marginTop: "5rem"}}>
        <ProfileSide />
        <PostFeed tagToDisplay={searchedTag}/>
        {/* <RightSide /> */}
        <FollowersCard />
        </div>
       </div>
       
       </>
     } 
     {!user &&
       <Login/>
     }
    </div>
  );
}
