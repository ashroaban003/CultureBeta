import PostFeed from "../../components/Feed/PostFeed/PostFeed";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";
import Navbar from "../../components/navbar/Navbar";
import './Home.css'
import CommentBox from "../../components/CommentBox/CommentBox";

export default function Home(params) {
  return(
      <div>
     <Navbar/>  
       <div className="Home">
         <div className="HomeMain" style={{marginTop: "5rem"}}>
        <ProfileSide />
        <PostFeed/>
        <RightSide />
        </div>
       </div>
    </div>
  );
}
