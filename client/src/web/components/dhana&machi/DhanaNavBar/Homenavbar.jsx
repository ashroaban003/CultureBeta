import React from 'react';
import './navbar.css';

function HomeNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">Logo</span>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#">Stories</a></li>
          <li><a href="#">Shorts</a></li>
          <li><a href="#">Quiz</a></li>
          <li><a href="#">Chatbot</a></li>
        </ul>
      </div>
      <div className="navbar-profile">
        <div className="profile-name">
          <span>Profile Name</span>
        </div>
        <div className="profile-image">
          <img src="https://placekitten.com/40/40" alt="Profile" />
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
