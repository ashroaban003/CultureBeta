import ExploreBar from "../../components/explorebar/ExploreBar";
import FeaturesBar from "../../components/featuresbar/FeaturesBar";
import Navbar from "../../components/navbar/Navbar";
import Short from "../../components/short/short";
import Post from "../../components/post/post";

export default function Home(params) {
  return(
      <div>
  <Navbar />
    <FeaturesBar/>
    <ExploreBar/>
    <Post></Post>
    <Short></Short>
    </div>
  );
}
