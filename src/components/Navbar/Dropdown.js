import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown({ onMouseEnter, onMouseLeave }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={
          click ? "nav_dropdown-menuu nav_clicked" : "nav_dropdown-menuu"
        }
      >
        <span className="arrow"></span>
        <li className="nav_dropdown-link">
          <Link to="/CSA">Case Study Competitions</Link>
        </li>
        <li className="nav_dropdown-link">
          <Link to="/symposium">Symposium</Link>
        </li>
        <li className="nav_dropdown-link">
          <Link to="/PE">Programming Events</Link>
        </li>
        <li className="nav_dropdown-link">
          <Link to="/miscellaneous">Miscellaneous</Link>
        </li>
        <li className="nav_dropdown-link">
          <Link to="/exhibitions">Exhibitions</Link>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
