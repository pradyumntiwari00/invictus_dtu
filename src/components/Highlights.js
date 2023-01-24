import React from "react";
import "./Highlight.css";
import Rightimage from "./Rightimage.js";

const Highlights = () => {
  return (
    <div className="_container container-hig">
      <div className="left">
        <div className="highlights_heading">HIGHLIGHTS</div>
        <div className="leftbody">
          <div className="box upper">ADD PIC</div>
          <div className="box overlay"></div>
        </div>
      </div>
      <div className="right">
        <Rightimage className="rightcomponent" />
        <Rightimage className="rightcomponent" />
        <Rightimage className="rightcomponent" />
        <Rightimage className="rightcomponent" />
        <Rightimage className="rightcomponent" />
        <Rightimage className="rightcomponent" />
        <Rightimage className="rightcomponent" />
        <Rightimage className="rightcomponent" />
      </div>
    </div>
  );
};

export default Highlights;
