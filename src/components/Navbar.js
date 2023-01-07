import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnterr = () => {
    setDropdown(true);
  };

  const onMouseLeavee = () => {
    setDropdown(false);
  };

  return (
    <div class="nav_container">
      <div className={"menuItems " + (click ? "show" : "")}>
        <div className="menuBtn" onClick={() => setClick(!click)}>
          <img src={require("../images/invictuslogo.png")} alt="" />
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          Home
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          Home
        </div>
        <div
          className="menuItem"
          onMouseEnter={onMouseEnterr}
          onMouseLeave={onMouseLeavee}
          onClick={() => setDropdown(true)}
        >
          Home
          {dropdown && (
            <Dropdown
              onMouseEnter={onMouseEnterr}
              onMouseLeave={onMouseLeavee}
            />
          )}
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          Home
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          Home
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          Home
        </div>
      </div>
    </div>
  );
};

export default Navbar;
