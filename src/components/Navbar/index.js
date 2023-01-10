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
      <div className={"menuItems " + (click ? "show" : "")}>
        <div className="menuBtn" onClick={() => setClick(!click)}>
          <img src={require("../../images/invictuslogo.png")} alt="" />
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          <Link to="/">Home</Link>
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          <Link to="/teams">Teams</Link>
        </div>

        <div
          className="menuItem"
          onMouseEnter={onMouseEnterr}
          onMouseLeave={onMouseLeavee}
          onClick={() => setDropdown(true)}
        >
          <Link to="/quizzes">Quizzes</Link>
          {dropdown && (
            <Dropdown
              onMouseEnter={onMouseEnterr}
              onMouseLeave={onMouseLeavee}
            />
          )}
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          <Link to="/hackaton">Hackathon</Link>
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          <Link to="/Summit">Summit</Link>
        </div>
        <div className="menuItem" onClick={() => setClick(false)}>
          <Link to="/Seminars">Seminars</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
