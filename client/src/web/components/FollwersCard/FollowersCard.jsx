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
                id < 8 &&
                <Followbox follower={follower} reFetch={reFetch}/>
            )
        })}
    </div>
  )
}

export default FollowersCard