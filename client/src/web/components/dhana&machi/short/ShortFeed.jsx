import useFetch from "../../../hooks/usefetch";
import Short from "./short"

const ShortFeed = () => {
    const {data,loading,reFetch}=useFetch(`http://localhost:4000/api/shorts`);
    return ( 
        <div className="ShortFeed">
            {data.map((item)=>(
                 <Short item={item} key={item._id}/>
            ))}
           
        </div>
     );
}
 
export default ShortFeed;