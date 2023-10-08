import { useContext, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './userpost.css';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Userpost(params) {
    const [addpost,setaddpost]=useState({
            userId: null,
            image: undefined,
            desc: undefined,
            tags:[],
    });
    const [inptags,settags]=useState(null);
    const [error,setErr]=useState(null);
    const [success,setsuccess]=useState(false);
    const [loading, setLoading] = useState(false);

    function parseTags(input) {
        const tags = input.split(',').map(tag => tag.trim());
        return tags;
      };
      const handleChange= (e) =>{
        setLoading(false);
        setErr(null);
        setaddpost((prev)=>({ ...prev, [e.target.id]: e.target.value }))
      }
      const handletags=(e)=>{
        setLoading(false);
        setErr(null);
        settags(e.target.value)
      }
      const{user}=useContext(AuthContext);
      const Navigate=useNavigate();

     
     const handleClick = async (e) => {
            e.preventDefault();
            setLoading(true);

            try {
              if (!user) {
                Navigate('/login');
              }

              const tagsList =await parseTags(inptags);
              setaddpost({
                ...addpost,
                userId: user.id,
                tags: tagsList,
              });

              const res = await axios.post("http://localhost:4000/api/post/", addpost);

              if (res.data === "Post Uploaded") {
                setsuccess(true);
                Navigate('/');
                // If you want to navigate after a successful post, you should use Navigate here.
                
              } else {
                setErr("error posting post");
              }
            } catch (e) {
              setLoading(false);
              if(addpost.userId)
              setErr("cant post");
            else setsuccess(true);
            }
     };


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
            <textarea id="desc" name="desc" rows="4" onChange={handleChange} required></textarea>

            <label for="tags">Tags:</label>
            <input type="text" id="tags" name="tags" class="tags-input" placeholder="Enter tags separated by commas" onChange={handletags}/>
            <div class="tags" id="tag-container" ></div>
            
            <button type="submit" disabled={loading} onClick={handleClick}>Submit</button>
            {error && <span className='rederr'> {error}</span>}
            {success && <span className="greensuc">click again to post</span>}
          </form>
            </div>

        </div>
    )
};
