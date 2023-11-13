import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios";
import useFetch1 from "../../hooks/usefetch1";

export default function Followbox({follower,reFetch}) {
    const {user}=useContext(AuthContext);
    const [flw,setflw]=useState({
        curUserId : user.id,
    });
    const [suc,setsuc]=useState("false");
    const {data1}=useFetch1(`http://localhost:4000/api/user/${user.id}/follow/${follower._id}`)
    console.log(data1);
    const handleclick =async (e) => {
        e.preventDefault();
        try{
        const res=await axios.put(`http://localhost:4000/api/user/${follower._id}/follow/`,flw);
        if(res){
            setsuc("success");
            reFetch();
        } 
        }catch(e){
            setsuc("failee");
            console.error(e.response || e);
        }
    }
    const handleunfollow = async (e) => {
        e.preventDefault();
        try{
        const res=await axios.put(`http://localhost:4000/api/user/${follower._id}/unfollow/`,flw);
        if(res){
            setsuc("success");
            reFetch();
        } 
        }catch(e){
            setsuc("failee");
            console.error(e.response || e);
        }
    }
    return(
        <div className="follower">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEkveEWaWSZ6ytqtnxs7r3ObfsL07gjHsZg&usqp=CAU" alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.username}</span>
                            <span> {(follower.followers).length} Followers</span>
                        </div>
                    </div>
                    {/* <span>{suc}</span> */}
                  {!data1.isfollow &&  <button className="followButton" onClick={handleclick} style={{backgroundColor : "linear-gradient(to right, #0074e4, #00a1ff);"}}>
                        Follow
                    </button>}
                   {data1.isfollow &&
                    <button className="followButton" onClick={handleunfollow} style={{backgroundColor : "linear-gradient(to right, #0074e4, #00a1ff);"}}>
                        UnFollow
                    </button>} 
         </div>
    )
};
