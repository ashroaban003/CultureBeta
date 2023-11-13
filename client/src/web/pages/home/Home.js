import PostFeed from "../../components/Feed/PostFeed/PostFeed";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Navbar from "../../components/navbar/Navbar";
import './Home.css'
import CommentBox from "../../components/CommentBox/CommentBox";

import FollowersCard from '../../components/FollwersCard/FollowersCard'
import { useState } from "react";



export default function Home(params) {
  const [searchedTag, setSearchedTag] = useState("");
  return(
      <div>
     <Navbar setTag={setSearchedTag}/>  
       <div className="Home">
         <div className="HomeMain" style={{marginTop: "5rem"}}>
        <ProfileSide />
        <PostFeed tagToDisplay={searchedTag}/>
        {/* <RightSide /> */}
        <FollowersCard />
        </div>
       </div>
    </div>
  );
}
