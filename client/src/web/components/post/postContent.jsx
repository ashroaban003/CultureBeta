import exampleImage from '../../../../src/images/ven.png'
import '../post/post.css'
const PostContent = () => {
    return ( 
        <div className="postContent">
            <img className="postContentImage" src={exampleImage}/>
        </div>
     );
}
 
export default PostContent;