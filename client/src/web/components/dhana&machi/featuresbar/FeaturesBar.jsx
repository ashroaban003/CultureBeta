import React, { Component } from 'react';
import FeatureIcon from './FeatureIcon';
import './FeaturesBar.css'
const FeaturesBar = () => {
    return ( 
        <div className="featuresBar">
            <FeatureIcon feature="POST"/>
            <FeatureIcon feature="PHOTOS"/>
            <FeatureIcon feature="VIDEOS"/>
        </div>
     );
}
 
export default FeaturesBar;
