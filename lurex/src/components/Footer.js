import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <span>Lurex</span>
      </div>
      <ul className="link">
        <li>About</li>
        <li>Services</li>
        <li>Cars</li>
        <li>FAQ</li>
      </ul>
      <ul className="icon">
        <li>
          <i class="fa-brands fa-x-twitter"></i>
        </li>
        <li>
          <i class="fa-brands fa-facebook-f"></i>
        </li>
        <li>
          <i class="fa-brands fa-linkedin-in"></i>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
