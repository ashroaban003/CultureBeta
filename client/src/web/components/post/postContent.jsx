import exampleImage from '../../../../src/images/ven.png'
import '../post/post.css'
const PostContent = () => {
    return ( 
        <div className="postContent">
            <img className="postContentImage" src={exampleImage} alt="we can ask user to describe or take help of any AI"/>
        </div>
     );
}
 
export default PostContent;