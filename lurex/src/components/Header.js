import React, { useEffect, useState } from "react";

const Header = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  useEffect(() => {
    const home = document.querySelector(".home img");
    const nav = document.querySelector(".nav");

    const homeShow = () => {
      if (isTransformed) {
        home.style.transform = "translateX(-200px)";
        home.style.transition = "0.8s ease-in-out";
        nav.style.transform = "translateX(0)";
        setIsTransformed(false);
      } else {
        home.style.transform = "translateX(0)";
        nav.style.transform = "translateX(120%)";
        setIsTransformed(true);
      }
    };

    if (home) {
      home.addEventListener("click", homeShow);

      return () => {
        home.removeEventListener("click", homeShow);
      };
    }
  }, [isTransformed]);

  return (
    <div className="header">
      <div className="logo">
        <span>Lurex</span>
      </div>
      <ul className="nav">
        <li>Home</li>
        <li>Cars</li>
        <li>About us</li>
        <li>Booking</li>
        <button>Contact</button>
      </ul>
      <div className="home">
        <img src="./img/sport-car_834304.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
