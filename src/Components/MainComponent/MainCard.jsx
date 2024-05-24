import React from "react";
import "../../Style/card.css";

function MainCard(card) {
  return (
    <>
      <div className="card">
        <h3>{card.title}</h3>
        <p className="card-text">{card.text}</p>
      </div>
    </>
  );
}

export default MainCard;
