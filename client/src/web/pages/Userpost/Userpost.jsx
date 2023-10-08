import { useContext, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './userpost.css';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Userpost(params) {
    const [addpost,setaddpost]=useState({
            user_id: null,
            image:undefined,
            description:undefined,
            tags:[]
    });
    const [inptags,settags]=useState(null);
    
    function parseTags(input) {
        const tags = input.split(',').map(tag => tag.trim());
        return tags;
      };
      const handleChange= (e) =>{
        setaddpost((prev)=>({ ...prev, [e.target.id]: e.target.value }))
      }
      const handletags=(e)=>{
        settags(e.target.value)
      }
      const{user}=useContext(AuthContext);
      const Navigate=useNavigate();
       const handleClick=(e)=>{
         e.preventDefault();
          if(!user){
            Navigate('/login');
          }
          setaddpost({user_id: user.username});
         // console.log(inptags);
          const tagsList = parseTags(inptags);
          setaddpost({tags: tagsList});
    
       }

    return(
        <div className="userpostcnt">
            <Navbar/>
            <div className="sizedbox"></div>
            <div className="addcontainer">
            <h2>Add post Form</h2>
           <form>
            <label for="imagelink">Image Link:</label>
            <input type="text" id="image" name="imagelink" onChange={handleChange} required/>

            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="4" onChange={handleChange} required></textarea>

            <label for="tags">Tags:</label>
            <input type="text" id="tags" name="tags" class="tags-input" placeholder="Enter tags separated by commas" onChange={handletags}/>
            <div class="tags" id="tag-container" ></div>

            <button type="submit" onClick={handleClick}>Submit</button>
          </form>
            </div>
        </div>
    )
};
