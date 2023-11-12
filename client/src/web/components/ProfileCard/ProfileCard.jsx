import React, { useContext, useState } from "react";
import Cover from "../../../images/cover.jpg";
import Profile from "../../../images/profileImg.jpg";
import "./ProfileCard.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router";
import useFetch from "../../hooks/usefetch";

const ProfileCard = () => {
  const ProfilePage = true;
  const {user,dispatch}=useContext(AuthContext);
  const navigate = useNavigate();
  //const {data,loading,reFetch}=useFetch(`http://localhost:4000/api/user/${user.id}`)
  const [folr,setfolr]=useState(0);
  const [folw,setfolw]=useState(0);
 
//  const {data,loading,reFetch}=useFetch(`http://localhost:4000/api/user/${user.id}`)
 
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt=""/>
        <img onClick={()=>navigate('/profile')} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEkveEWaWSZ6ytqtnxs7r3ObfsL07gjHsZg&usqp=CAU" alt="" />
      </div>

      <div className="ProfileName">
      {user&&
              <span onClick={()=>navigate('/profile')}>{user.username}</span>
            }
            {!user &&
              <span>Anonymous</span>
            }
        <span>Explorer | Coder | Culture Lover</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            {/* {user && <span>{(data.following).length}</span>} */}
           {!user && <span>{folr}</span>}
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
          {/* {user && <span>{(data.followers).length}</span>} */}
           {!user && <span>{folr}</span>}
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
