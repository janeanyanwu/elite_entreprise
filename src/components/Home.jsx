import React from "react";
import "./Home.css";
import banner from "./banner--mobile.png";
const Home = () => {
  return (
    <div className="home" name="home">
      <div className="container">
        <div className="home-tag">
          <h4> Elite</h4>
          <h2> AFFECTING A MILLION PLUS LIVES</h2>
          <p>
            {" "}
            We are here to serve you better. Everyday we improve for your sake
          </p>
          <div className="button">
            <button>Register now</button>
            <button>Learn more</button>
          </div>
        </div>
        <div className="placeholder">
          <img src={banner} alt="banner"></img>
        </div>
      </div>
      <div className="card">
        <div className="card-1">
          <h3> Quality Education</h3>
          <p> The gradual grooming of future leaders and achievers</p>
        </div>
        <div className="card-2">
          <h3> Easy and safe movement</h3>
          <p> we take you round the country, safely and comfortably</p>
        </div>
        <div className="card-3">
          <h3> Quality health</h3>
          <p>
            {" "}
            With our clean and well treated water, your health and that of your
            family is secured
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
