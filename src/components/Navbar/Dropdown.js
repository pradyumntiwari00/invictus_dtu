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
        className={click ? "dropdown-menuu clicked" : "dropdown-menuu"}
      >
        <span className="arrow"></span>
        <li className="dropdown-link">Event 1</li>
        <li className="dropdown-link">Event 2</li>
        <li className="dropdown-link">Event 3</li>
        <li className="dropdown-link">Event 4</li>
      </ul>
    </>
  );
}

export default Dropdown;
