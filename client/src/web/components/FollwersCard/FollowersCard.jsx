import React, { useContext } from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/followersData.js' 
import useFetch from '../../hooks/usefetch.js'
import { AuthContext } from '../../context/AuthContext.js'
import Followbox from './Followbox.jsx'
const FollowersCard = () => {
    const {data,reFetch}=useFetch('http://localhost:4000/api/user')
    const {user} =useContext(AuthContext);
    
  return (
    <div className="FollowersCard">
        <span>Connect with others..</span>

        {data.map((follower, id)=>{
            if(user && follower._id === user.id){
                return (<></>)
            }
            return(
                id < 5 &&
<<<<<<< HEAD
                <div className="follower">
                    <div>
                        <img src={follower.img} alt="" className='followerImage' />
                        <div className="name">
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className="followButton" style={{backgroundColor : "linear-gradient(to right, #0074e4, #00a1ff);"}}>
                        Follow
                    </button>
                </div>
=======
                <Followbox follower={follower} reFetch={reFetch}/>
>>>>>>> 012730413f4a56d6be873f22f43a13acb3e9ad4c
            )
        })}
    </div>
  )
}

export default FollowersCard