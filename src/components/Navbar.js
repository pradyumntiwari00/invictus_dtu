import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

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
        <div className="menuItem" onClick={() => setClick(false)}>
          Home
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
