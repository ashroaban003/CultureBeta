import { useEffect, useState } from 'react';
import Posts from '../../home/Posts/Posts';
import './postfeed.css';
import axios from 'axios';
import useFetch from '../../../hooks/usefetch';

export default function PostFeed(params) {
    const bufferdata=[
        {
            name: "Ashish",
            icon: "https://placekitten.com/40/40",
            description: "I have never thought that there be people intelligent than me but doesnt mean i cant go to their level",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5KA8xPCyRCKz8tpd7RGbqCNDqfuawBgDCw&usqp=CAU",
            tags:[
                "life is not simple",
                "never give up"
            ]
        },
        {
            name:"mana",
            icon: "https://placekitten.com/40/40",
            description: "I have never thought that there be people intelligent than me but doesnt mean i cant go to their level",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH5KA8xPCyRCKz8tpd7RGbqCNDqfuawBgDCw&usqp=CAU",
            tags:[
                "life is not simple",
                "never give up"
            ]
        }

    ];
    const { data, loading,reFetch }=useFetch('http://localhost:4000/api/post')
   
    
    return(
        <div className='feed'>
            {data.map((item)=>(
                <Posts item={item} key={item._id} margin="1rem auto 2.5rem auto"/>
            ))}
        </div>
    );

};
