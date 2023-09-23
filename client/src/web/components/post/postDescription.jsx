import { useState } from "react";

const PostDescription = ({numberOfDays, description}) => {
    
    const [displayOfDescBox, setDisplayOfDescBox] = useState("-webkit-box");
    const [textReadMore, setTextReadMore] = useState("Read More");
    return ( 
        <div className="postDescription">
            <span className="postDate">posted {numberOfDays} days ago</span>
            <span className="description" style={{display:displayOfDescBox}}>{description}{description}{description}</span>
            <button className="readMore" onClick={()=>{
                if(displayOfDescBox==="-webkit-box"){
                    setDisplayOfDescBox("block");
                    setTextReadMore("Read Less");
                }
                else{
                    setDisplayOfDescBox("-webkit-box");
                    setTextReadMore("Read More");
                }
            }}>{textReadMore}</button>
        </div>
     );
}
 
export default PostDescription;