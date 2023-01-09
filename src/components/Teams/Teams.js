import React from "react";

import "./Teams.css";
import TeamsComponent from "./TeamsComponent";
import Info from "./info";

const Teams = () => {
  return (
    <div className="Teams_Section">
      <h2>Our Team</h2>
      <div className="Teams_Cards_Container">
        {Info.map((personInfo) => (
          <TeamsComponent info={personInfo} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
