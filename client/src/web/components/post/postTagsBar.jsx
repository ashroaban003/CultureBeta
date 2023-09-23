import PostTag from "./postTag"

const PostTagsBar = () => {
    return ( 
        <div className="postTagsBar">
            <PostTag tag="Telangana"></PostTag>
            <PostTag tag="Food"></PostTag>
            <PostTag tag="Festival"></PostTag>
        </div>
     );
}
 
export default PostTagsBar;