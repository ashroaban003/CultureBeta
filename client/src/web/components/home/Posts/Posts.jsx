import './posts.css';
import likeAfter from "../../../../images/likeAfter.svg";
import comment from "../../../../images/comment.svg";
import likeBefore from "../../../../images/likeBefore.svg";
import { useContext, useState } from "react";
import CommentBox from '../../CommentBox/CommentBox';
import OtherUserComment from '../../CommentBox/OtherUserComment';
import { AuthContext } from '../../../context/AuthContext';
import downarrow from "../../../../images/downarrow.svg";
import axios from "axios";
import useFetch from '../../../hooks/usefetch';

export default function Posts({item,margin, height}) {
    const {user}=useContext(AuthContext);
    const [id,setid]=useState(null);
   
    const [addcomment,setaddcoment]=useState({
        userId: null,
        text: null,
    });
   
   const [suc,setsuc]=useState("try again")

   const { data, loading,reFetch }=useFetch(`http://localhost:4000/api/post/${item._id}/comments`)

    const handlecomment=async()=>{
        try{
            setaddcoment({
                ...addcomment,
                userId: user.id,
            })
        const res = await axios.post(`http://localhost:4000/api/post/${item._id}/comment`, addcomment);
         setsuc("success");
         reFetch();
        }catch(e){
            console.log(e);
        }
    }
    const handleChange = (e) => {
           e.preventDefault();
           setsuc("try again");
            setaddcoment((prev) => ({ ...prev, [e.target.id]: e.target.value }));

      };

    const [imageLink, setImageLink] = useState(likeBefore);
    const [backgroundOfLikeButton, setBackgroundOfLikeButton] = useState();
    const [displayCommentSection, setDisplayCommentSection] = useState(false);
    const tags=item.tags;
     return(
        <section  className='post-section' style={{margin: margin}}>
           <div className='post-container'>
                <div className="post_header">
                    <div className="profile-image">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEkveEWaWSZ6ytqtnxs7r3ObfsL07gjHsZg&usqp=CAU" alt="Profile" />
                    </div>
                    <div className='flexColStart'>
                        <span>Anonymous</span>
                        <span className='smalltext'>50k followers</span>
                </div>
                
                </div>
                <div className='post-comments'>
                    <span>{item.desc}<br/></span>
                </div>

          </div>
           <div className='post-img-cnt'>
               <img src={item.image} alt="" style={{width: "90%", height: height,paddingLeft: "1rem", paddingRight: "1rem", objectFit:"cover"}}/>
           </div>
           <div className='post-tag-cnt'>
              {tags.map((tag) => (<span className='post-tag' style={{backgroundColor:"hsl(" + Math.random() * 360 + ", 100%, 60%)"}}>{tag}</span>))}
           </div>
           <div className="postReactionsBar">
            <button className="like" style={{backgroundColor:backgroundOfLikeButton}} onClick={()=>{
                if(imageLink===likeBefore){
                    setImageLink(likeAfter);
                    setBackgroundOfLikeButton("transparent");
                }
                else setImageLink(likeBefore);
            }}><img src={imageLink} alt="LikeButton"/></button>
            <button className="commentButton" onClick={()=>setDisplayCommentSection((curr)=>!curr)}><img src={comment} alt="commentButton" style={{
    margin: "0.1rem 0.4rem 0rem 0.4rem"}}/></button>
            
        </div>
        {displayCommentSection && 
        
        <div style={{width:"96%", margin:"0rem auto"}}>
         { user &&
           <div className="commentBox">
            <input id="text" className="commentInput" type="text" onChange={handleChange} placeholder="Share your thoughts..."></input>
                <button className="commentButton" id="commentButtonOnPosts" onClick={handlecomment}><img src={downarrow}></img></button>
            </div>
            
        }
            <div className="otherUserCommentsToDisplayInPosts">
                <span>{suc}</span>
                {data.map((item)=>(
                    <OtherUserComment  item={item} key={item._id}/>
                ))}
            </div>
        </div>
        }
        </section>
     )
};
