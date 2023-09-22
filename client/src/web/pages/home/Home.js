import ExploreBar from "../../components/explorebar/ExploreBar";
import FeaturesBar from "../../components/featuresbar/FeaturesBar";
import Navbar from "../../components/navbar/Navbar";
import Post from "../../components/post/post";

export default function Home(params) {
  return(
      <view>
  <Navbar />
    <FeaturesBar/>
    <ExploreBar/>
    <Post/>
    </view>
  );
}
