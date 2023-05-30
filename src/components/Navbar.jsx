import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h1> Elite </h1>
        <div className="navbar-collapse">
          <Link
            to="Elite-academy"
            smooth={true}
            duration={500}
            className="link"
          >
            {" "}
            Elite academy
          </Link>
          <Link to="Elite-waters" className="link-1">
            Elite Table-Water
          </Link>
          <Link to="Elite-transport" className="link-2">
            Elite Transport
          </Link>
          <Link to="Elite-cooking" className="link-3">
            {" "}
            Elite Cooking-Gas
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
