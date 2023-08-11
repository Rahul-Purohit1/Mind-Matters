import React from "react";
import "./card.css";
function Card({ image, heading, description }) {
  return (
    <div className="cardparent">
      <div className="cardbody">
        <img alt="card" src={image} />
        <div className="cardtext">
          <h2>{heading}</h2>
          <p>{description}</p>
        </div>
        <button>Know More</button>
      </div>
    </div>
  );
}
export default Card;
