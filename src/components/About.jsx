import React from "react";
import "./About.css";
import call from "./Vectorcall.png";
import email from "./Vectoremail.png";
import facebook from "./Vectorfacebook.png";
import insta from "./Vectorinsta.png";
import location from "./Vectorlocation.png";
import twitter from "./Vectortwitter.png";

const About = () => {
  return (
    <div className="about">
      <div className="contact">
        <h4>Contact us</h4>
        <div>
          <img src={call} alt="call" /> : 09074458886
        </div>
        <div>
          <img src={facebook} alt="facebook" /> : Elite_enterprise
        </div>
        <div>
          <img src={insta} alt="insta" /> : Elites
        </div>
        <div>
          <img src={twitter} alt="twitter" /> : Elites.ng
        </div>
      </div>

      <div className="complain">
        <h4> For complains</h4>
        <div>
          {" "}
          <img src={call} alt="call" />
          :09038724037
        </div>
        <div>
          {" "}
          <img src={email} alt="email" />: elites@gmail.com
        </div>
        <div>
          {" "}
          <img src={location} alt="location" /> : Nigeria
        </div>
      </div>
    </div>
  );
};

export default About;
