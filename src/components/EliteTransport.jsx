import React from "react";
import "./EliteTransport.css";
import bus from "./bus.jpeg";
import logistics from "./logistics.jpeg";

const EliteTransport = () => {
  return (
    <div className="transport" name="Elite-transport">
      <div className="head">
        <h5> Elite transport company </h5>
        <h2> E.T.C</h2>
        <p>
          {" "}
          With the best and most comfortable vehicles, we take you to your
          destination. We take you round Nigeria with ease... Our logistics is
          always available for your deliveries
        </p>
      </div>
      <div className="vehicles">
        <div className="vehicle-1">
          {" "}
          <img src={bus} alt="bus" />
          <h2>Well air conditioned buses</h2>
        </div>
        <div className="vehicle-2">
          {" "}
          <img src={logistics} alt="logistics" />
          <h2>Fast and reliable deliveries</h2>
        </div>
      </div>
    </div>
  );
};

export default EliteTransport;
