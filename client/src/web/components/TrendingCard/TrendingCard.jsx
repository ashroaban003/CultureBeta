import React from 'react'
import './TrendingCard.css'

import {TrendingData} from '../../Data/trendingData'
const TrendingCard = () => {
  return (
    <div className="TrendingCard">
            <h3 style={{margin:"1rem"}}>Embrace the World Around You!</h3>
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