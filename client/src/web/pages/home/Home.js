import ExploreBar from "../../components/explorebar/ExploreBar";
import FeaturesBar from "../../components/featuresbar/FeaturesBar";
import Navbar from "../../components/navbar/Navbar";

export default function Home(params) {
  return(
      <view>
  <Navbar />
    <FeaturesBar/>
    <ExploreBar/>
    </view>
  );
}
