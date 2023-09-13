import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
export default function Navbar(params) {
    const Navigate=useNavigate();
    const login= ()=>{
        Navigate("/login");
    }
    const register=()=>{
        Navigate("/register");
    }

    const {user,dispatch}=useContext(AuthContext);
    const handleClick=(e)=>{
        e.preventDefault();
        dispatch({type: "LOGOUT"})
    }

    return(
        <div className="navhead">
            {user &&
               <div className='navh'>
                 <span>{user.username}</span>
                  <button onClick={handleClick}>Logout</button>
               </div>
            }
             {!user &&
               <div className='navh'>
                  <button onClick={login}>Login</button>
                  <button onClick={register}>Register</button>
               </div>
            }
        </div>
    )
};
