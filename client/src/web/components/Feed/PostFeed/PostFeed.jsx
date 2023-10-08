import Posts from '../../home/Posts/Posts';
import './postfeed.css';

export default function PostFeed(params) {
    const data=[
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

    return(
        <div className='feed'>
            {data.map((item)=>(
                <Posts item={item} key={item._id}/>
            ))}
        </div>
    );

};
