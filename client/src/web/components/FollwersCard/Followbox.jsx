import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios";
import useFetch1 from "../../hooks/usefetch1";
import { useEffect } from "react";
import { useNavigate, useNavigation } from "react-router";

export default function Followbox({follower,reFetch}) {

    const {user}=useContext(AuthContext);
    const [flw,setflw]=useState({
        curUserId : user.id,
    });
    const Navigate = useNavigate();
    
    const [suc,setsuc]=useState("false");
    
    const {data1}=useFetch1(`http://localhost:4000/api/user/${user.id}/follow/${follower._id}`)
    //console.log("THE DATA", data1);
    const [followText, setFollowText] = useState("");
    
    // const handleclick =async (e) => {
    //     e.preventDefault();
    //     try{
    //     const res=await axios.put(`http://localhost:4000/api/user/${follower._id}/follow/`,flw);
    //     if(res){
    //         setsuc("success");
    //         reFetch();
    //         setFollowText("UnFollow");
    //     } 
    //     }catch(e){
    //         setsuc("failee");
    //         console.error(e.response || e);
    //     }
    // }
    // const handleunfollow = async (e) => {
    //     e.preventDefault();
    //     try{
    //     const res=await axios.put(`http://localhost:4000/api/user/${follower._id}/unfollow/`,flw);
    //     if(res){
    //         setsuc("success");
    //         reFetch();
    //         setFollowText("Follow");
    //     } 
    //     }catch(e){
    //         setsuc("failee");
    //         console.error(e.response || e);
    //     }
    // }


    const handleclick =async (e) => {
        e.preventDefault();
        if(followText=="Follow"){
            try{
                const res=await axios.put(`http://localhost:4000/api/user/${follower._id}/follow/`,flw);
                if(res){
                    setsuc("success");
                    reFetch();
                    setFollowText("UnFollow");
                } 
            }catch(e){
                setsuc("failee");
                console.error(e.response || e);
                }
            }
        else{
            try{
                const res=await axios.put(`http://localhost:4000/api/user/${follower._id}/unfollow/`,flw);
                if(res){
                    setsuc("success");
                    reFetch();
                    setFollowText("Follow");
                } 
                }catch(e){
                    setsuc("failee");
                    console.error(e.response || e);
                }
        }
    }

    useEffect(()=>{
        //console.log("inside USEFFECT", data1, data1.isfollow);
        setFollowText(data1.isfollow ? "UnFollow":"Follow");
    }, [data1]);

    const profileclick = async (e) => {
        Navigate(`/profile/${follower._id}`);
   }

    return(
        <div className="follower">
                    <div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEkveEWaWSZ6ytqtnxs7r3ObfsL07gjHsZg&usqp=CAU" alt="" className='followerImage' onClick={()=>profileclick()}/>
                        <div className="name">
                            <span style={{width: "90%", overflow:"hidden", textOverflow:"ellipsis"}}>{follower.username}</span>
                            <span> {(follower.followers).length} Followers</span>
                        </div>
                    </div>
                    {/* <span>{suc}</span> */}
                  {/* {!data1.isfollow &&  <button className="followButton" onClick={handleclick} style={{backgroundColor : "linear-gradient(to right, #0074e4, #00a1ff);"}}>
                        {followText}
                    </button>}
                   {data1.isfollow &&
                    <button className="followButton" onClick={handleunfollow} style={{backgroundColor : "linear-gradient(to right, #0074e4, #00a1ff);"}}>
                        {followText}
                    </button>} */}
                    <button className="followButton" onClick={handleclick} style={{backgroundColor : "linear-gradient(to right, #0074e4, #00a1ff);", position:'fixed'}}>
                        {followText}
                    </button>
         </div>
    )
};
