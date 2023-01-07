import React from 'react'
import "./Teams.css";
const TeamsComponent = (props) => {
  const { img, name, position} = props.info;
  return (
    <div className="Team_Card">
      <div className="Team_Image">
        <img
          src={img}
          alt="ImageName"
        />
      </div>
      <div className="Team_Name">{name}</div>
      <div className="Team_Position">{position}</div>
    </div>
  );
}

export default TeamsComponent