import React from "react";
import "./TeamCard.css";

const TeamCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} onClick={() => props.handleClick(props.id)} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
      </ul>
    </div>
  </div>
);

export default TeamCard;
