import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./index.css";

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
    <div className="nav_container">
      <div className={"nav_menuItems " + (click ? "show" : "")}>
        <div className="nav_menuBtn" onClick={() => setClick(!click)}>
          <img src={require("../../images/invictuslogo.png")} alt="" />
        </div>
        <div className="nav_menuItem" onClick={() => setClick(false)}>
          <Link to="/">Home</Link>
        </div>
        <div className="nav_menuItem" onClick={() => setClick(false)}>
          <Link to="/teams">Teams</Link>
        </div>
        <div className="nav_menuItem" onClick={() => setClick(false)}>
          <Link to="/quizzes">Quizzes</Link>
        </div>
        <div className="nav_menuItem" onClick={() => setClick(false)}>
          <Link to="/hackaton">Hackathon & Ideathon</Link>
        </div>
        <div className="nav_menuItem" onClick={() => setClick(false)}>
          <Link to="/Summit">Summit</Link>
        </div>
        <div className="nav_menuItem" onClick={() => setClick(false)}>
          <Link to="/Seminars">Seminars</Link>
        </div>
        <div
          className="nav_menuItem"
          onMouseEnter={onMouseEnterr}
          onMouseLeave={onMouseLeavee}
          onClick={() => setDropdown(true)}
        >
          <p>Others</p>
          {dropdown && (
            <Dropdown
              onMouseEnter={onMouseEnterr}
              onMouseLeave={onMouseLeavee}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
