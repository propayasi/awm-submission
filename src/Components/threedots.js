import React from "react";
import dot1 from "../Assets/div.dot-01.png";
import dot2 from "../Assets/div.dot-02.png";
import dot3 from "../Assets/div.dot-03.png";
import "../Styles/threedots.css";

function threedots() {
  return (
    <div className="three_dots">
      <img src={dot1} />
      <img src={dot2} />
      <img src={dot3} />
    </div>
  );
}

export default threedots;
