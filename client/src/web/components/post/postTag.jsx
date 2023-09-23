import "../post/post.css";

function coloring(tag){
    if(tag==="Telangana") return "magenta";
    else if(tag==="Food") return "orange";
    else if(tag==="Festival") return "yellow";
    return "white";
}

const PostTag = ({tag}) => {

    return ( 
        <div className="postTag" style={{backgroundColor: coloring(tag)}}>
            {tag}
        </div>
     );
}
 
export default PostTag;