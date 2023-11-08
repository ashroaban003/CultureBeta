import './posts.css';
import likeAfter from "../../../../images/likeAfter.svg";
import comment from "../../../../images/comment.svg";
import likeBefore from "../../../../images/likeBefore.svg";
import { useState } from "react";
import CommentBox from '../../CommentBox/CommentBox';
import OtherUserComment from '../../CommentBox/OtherUserComment';

export default function Posts({item,margin, height}) {
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
            <button className="commentButton" onClick={()=>setDisplayCommentSection((curr)=>!curr)}><img src={comment} alt="commentButton"/></button>
            
        </div>
        {displayCommentSection && 
        
        <div style={{width:"96%", margin:"0rem auto"}}>
            <CommentBox/>
            <div className="otherUserCommentsToDisplayInPosts">
                <OtherUserComment/>
                <OtherUserComment/>
                <OtherUserComment/>
                <OtherUserComment/>
                <OtherUserComment/>
                <OtherUserComment/>
            </div>
        </div>
        }
        </section>
     )
};
