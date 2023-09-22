import '../post/post.css';
import PostContent from './postContent';
import PostDescription from './postDescription';
import PosterHeader from "./postHeader";
import PostReactionsBar from './postReactionsBar';
import PostTagsBar from './postTagsBar';


const Post = () => {
    return ( 
        <div className="post">
            <PosterHeader></PosterHeader>
            <PostContent></PostContent>
            <PostReactionsBar></PostReactionsBar>
            <PostDescription numberOfDays="9" description="Beautiful, Andham, AmmayiBeautiful, Andham, AmmayiBeautiful, Andham, AmmayiBeautiful, Andham, AmmayiBeautiful, Andham, AmmayiBeautiful, Andham, AmmayiBeautiful, Andham, Ammayi"></PostDescription>
            <PostTagsBar></PostTagsBar>
        </div>
     );
}
 
export default Post;