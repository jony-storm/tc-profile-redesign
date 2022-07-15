import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="left">
            <img src="/assets/tc_icon.png" className="logo" />
            <span className="vertical-line"></span>
        </div>
        <div className="right">
            <img src="/assets/profile.jpg" className="profile-img" />
        </div>
    </div>
  );
}

export default Navbar;
