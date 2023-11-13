import React from 'react'
import './FollowersCard.css'

import { Followers } from '../../Data/followersData.js' 
const FollowersCard = () => {
  return (
    <div className="FollowersCard">
        <span>Connect with others..</span>

        {Followers.map((follower, id)=>{
            
            return(
                id < 5 &&
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
            )
        })}
    </div>
  )
}

export default FollowersCard