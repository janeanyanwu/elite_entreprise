import React from "react";
import "./EliteAcademy.css";
import school from "./school .jpeg";

const EliteAcademy = () => {
  return (
    <div className="academy" name="Elite-academy">
      <div className="span">
        <span> 50k</span>
        <span> 250k</span>
        <span> 50k</span>
        <span> 50k</span>
      </div>
      <div className="text">
        <p>Happy customers </p>
        <p> Monthly visitors</p>
        <p> Lives</p>
        <p> Top partners</p>
      </div>
      <div className="academy-container">
        <h3> Elite Academy</h3>
        <div className="about">
          <h3> A School You Can Trust</h3>
          <p>
            {" "}
            Our expert teachers, conducive school environment and learning
            equipment, prepare only the best of kids that stand out among their
            peers
          </p>
        </div>
        <div className="images">
          <img src={school} alt=" school" />
        </div>
        <p> Training tomorrow futures leaders!!!</p>
      </div>
    </div>
  );
};

export default EliteAcademy;
