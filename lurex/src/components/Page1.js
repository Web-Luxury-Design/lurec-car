import React from "react";
import Header from "./Header";

const Page1 = () => {
  return (
    <div className="page1">
      <div className="page1-container-all">
        <Header />
        <div className="page1-container">
          <div className="page1-text">
            <div className="text-container">
              <h3>Rent cars</h3>
              <h1>Easily</h1>
              <p>
                Get acces to rent our luxury cars for your premium events at
                affordable prices
              </p>
              <button>
                <i class="fa-solid fa-arrow-right"></i>get started
              </button>
            </div>
            <div className="img-container">
              <div>
                <img
                  src="./img/wepik-export-20231227140649y0qv.png"
                  alt="car-rent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
