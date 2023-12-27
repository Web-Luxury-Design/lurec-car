import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <span>Lurex</span>
      </div>
      <ul className="nav">
        <li>Home</li>
        <li>cars</li>
        <li>About us</li>
        <li>Booking</li>
        <button>Contact</button>
      </ul>
    </div>
  );
};

export default Header;
