import './ExploreBar.css';
import ExploreIcon from './ExploreIcon';

const ExploreBar = () => {

    const states = ['Bharat','Telangana', 'TamilNadu', 'Karntaka', 'Kerala', 'Goa','Maharashtra', 'Delhi', 'JK', 'UP', 'Rajsthan','Gujarat'];

    return ( 
        <div className="exploreBar">
            <ExploreIcon stateName="All Topics"/>
            {states.map((state)=>(<ExploreIcon stateName ={state}/>))}
        </div>
    );
}
 
export default ExploreBar;