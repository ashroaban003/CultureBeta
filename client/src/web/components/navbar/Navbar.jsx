import { useContext } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export default function Navbar({setTag}) {
  const Navigate = useNavigate();
  const loginclick = () => {
    Navigate("/login");
  };
  const handleclick = () => {
    Navigate("/");
  };
  const Addpostclick = () => {
    Navigate("/userpost");
  };
  const { user, dispatch } = useContext(AuthContext);

  const logoutclick = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  const handleSettingTags=(e)=>{
    setTag(e.target.value)
   }

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={handleclick}>
        <span className="logo-icon">Culturehub</span>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="search-input" onChange={handleSettingTags}/>
      </div>
      <div className="navbar-links">
        <ul className="n-link">
          <li className="pageslinks">
            <a href="/model">3D Model</a>
          </li>
          <li className="pageslinks">
            <a href="/">Home</a>
          </li>
          <li className="pageslinks">
            <a href="/shorts">Stories</a>
          </li>
          <li className="pageslinks">
            <a href="/quiz">Quiz</a>
          </li>
          <li className="pageslinks">
            <a href="/chatbot">Chatbot</a>
          </li>
          <div className="profile-image navaddposts" onClick={Addpostclick}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRybYJ8whzMYdcui47d74-uUMO297xrHXN3QdI7KFiNkktLkMLbBJGfkHbKS2gN23FkMLk&usqp=CAU"
              alt="Addposts"
            />
          </div>
          {!user && (
            <li className="blink" onClick={loginclick}>
              Login
            </li>
          )}
          {user && (
            <li className="blink" onClick={logoutclick}>
              Logout
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-profile">
        <div className="profile-name">
          {user && <span style={{display: "inline-block"}}>{user.username}</span>}
          {!user && <span>Anonymous</span>}
        </div>
        <div className="profile-image">
          {user && <img onClick={()=>Navigate('/profile')} src="https://placekitten.com/40/40" alt="Profile" />}
          {!user && (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEkveEWaWSZ6ytqtnxs7r3ObfsL07gjHsZg&usqp=CAU"
              alt="Profile"
            />
          )}
        </div>
      </div>
    </nav>
  );
}
