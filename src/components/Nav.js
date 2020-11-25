import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <ul className="nav">
        <li>
          <Link className="nav-item" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/flags">
            Flags
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
