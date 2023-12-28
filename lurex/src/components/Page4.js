import React from "react";

const Page4 = () => {
  return (
    <div className="page4">
      <div className="text">
        <h2>Book from our collection</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
          dolorem iste nostrum!
        </p>
      </div>
      <div className="cars">
        <div className="car">
          <p>12km</p>
          <img src="./img/Range Rover.png" alt="" />
          <h4> 2020 Range Rover</h4>
          <div className="text-infos">
            <p>$70/day</p>
            <p>Details</p>
          </div>
        </div>
        <div className="car">
          <p>16km</p>
          <img src="./img/Mercedes-Benz 3D Models for Download.png" alt="" />
          <h4> 2019 Mercedes classe E</h4>
          <div className="text-infos">
            <p>$80/day</p>
            <p>Details</p>
          </div>
        </div>
        <div className="car">
          <p>13km</p>
          <img src="./img/wepik-export-20231227135243Sfm9.png" alt="" />
          <h4> 2022 Porsche Cayenne</h4>
          <div className="text-infos">
            <p>$90/day</p>
            <p>Details</p>
          </div>
        </div>
      </div>
      <div className="button">
        <button>See All Cars</button>
      </div>
    </div>
  );
};

export default Page4;
