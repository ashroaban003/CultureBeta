import './OtherDetails.css'
const OtherDetails = () => {

    const ToDisplay = ['About', 'Contact', 'Copyrights', 'Cookie Policy', 'Contributors','More'];

    return ( 
        <div className="ToDisplay">
            {ToDisplay.map((item)=>{
                return (
                    <div>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="itemToDisplay">
                        {item}
                    </a>
                    </div>
                )
            })}
            {/* dummy divs to position the toDisplay array correclty in place */}
            <div className="itemToDisplay"></div>
            <div className="itemToDisplay"></div>
        </div>
     );
}
 
export default OtherDetails;