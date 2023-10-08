import React from 'react'
import './TrendingCard.css'

import {TrendingData} from '../../Data/trendingData'
const TrendingCard = () => {
  return (
    <div className="TrendingCard">
            <h3>What's happening</h3>
            {TrendingData.map((trend)=>{
                return(
                    <div className="trending">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}

    </div>
  )
}

export default TrendingCard