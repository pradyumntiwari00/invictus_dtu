import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({ onMouseEnter, onMouseLeave }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={click ? "nav_dropdown-menuu nav_clicked" : "nav_dropdown-menuu"}
      >
        <span className="arrow"></span>
        <li className="nav_dropdown-link">Event 1</li>
        <li className="nav_dropdown-link">Event 2</li>
        <li className="nav_dropdown-link">Event 3</li>
        <li className="nav_dropdown-link">Event 4</li>
      </ul>
    </>
  );
}

export default Dropdown;
