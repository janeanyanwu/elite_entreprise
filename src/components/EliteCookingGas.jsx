import React from "react";
import "./EliteCookingGas.css";
import gas from "./gas.jpeg";
import gaas from "./gaas.jpeg";

const EliteCookingGas = () => {
  return (
    <div className="gas" name="Elite-cooking">
      <div className="cooking-gas">
        <h3> Elite Cooking-Gas</h3>
        <div className="image">
          <img src={gas} alt="gas" />
          <img src={gaas} alt="gas" />
        </div>
        <p>
          Bringing the cooking gas to your doorsteps with our home delivery
          option
        </p>
      </div>
    </div>
  );
};

export default EliteCookingGas;
