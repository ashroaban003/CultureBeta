import PostFeed from "../../components/Feed/PostFeed/PostFeed";
import Navbar from "../../components/navbar/Navbar";


export default function Home(params) {
  return(
      <div>
     <Navbar/>  
       <div className="flexColCenter">
        <PostFeed/>
       </div>
    </div>
  );
}
