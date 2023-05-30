import React from "react";
import "./EliteTableWater.css";
import star from "./Vectorstar.png";
import staar from "./Vectorstaar.png";

const EliteTableWater = () => {
  return (
    <div className="table-water" name="Elite-waters">
      <div className="title">
        {" "}
        <h6> Elite Table water</h6>
        <h1> Every Client Matters</h1>
        <p>
          {" "}
          Providing you and your loved ones with the most refreshing, safety
          drinking water made in the most hygenic environment
        </p>
      </div>
      <div className="tags">
        <div className="tag-1">
          <div className="star">
            <img src={star} alt="star"></img>
            <img src={star} alt="star"></img>
            <img src={star} alt="star"></img>
            <img src={star} alt="star"></img>
            <img src={staar} alt="star"></img>
          </div>
          <p>
            {" "}
            When it comes to my family i dont joke with their health, and
            drinking water plays a very vital role.. Elite waters has always
            been my choice since day one
            <br />
            <br />
            .... kate Anyanwu
          </p>
        </div>
        <div className="tag-2">
          {" "}
          <div className="star">
            <img src={star} alt="star"></img>
            <img src={star} alt="star"></img>
            <img src={star} alt="star"></img>
            <img src={star} alt="star"></img>
            <img src={staar} alt="star"></img>
          </div>
          <p>
            {" "}
            As an organisation Elite waters has been refreshing my workers, for
            years and its still does till date...
            <br />
            <br />
            ...Silver coperative
          </p>
        </div>
        <div className="tag-3">
          {" "}
          <div className="star">
            <img src={star} alt="star"></img>
            <img src={star} alt="star"></img>
            <img src={star} alt="star"></img>
            <img src={star} alt="star"></img>
            <img src={staar} alt="star"></img>
          </div>
          <p>
            {" "}
            As an event planner my clients happiness always comes first, Elite
            waters has been my plug for years leaving smiles on clients faces,
            making me worry less about their satisfaction
            <br />
            <br />
            .... Mimi Events and more
          </p>
        </div>
      </div>
    </div>
  );
};

export default EliteTableWater;
