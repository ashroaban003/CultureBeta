import useFetch from "../../../hooks/usefetch";
import Navbar from "../../navbar/Navbar";
import Short from "./short";

const ShortFeed = () => {
  const { data, loading, reFetch } = useFetch(
    `http://localhost:4000/api/shorts`
  );
  console.log("SHOTRS", data);
  return (
    <div className="ShortFeed">
      <Navbar />
      {data.map((item) => (
        <Short item={item} key={item._id} />
      ))}
    </div>
  );
};

export default ShortFeed;
