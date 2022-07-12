import React from "react";

import "../../../public/bag.svg";
import "./Coins.css";

export function Coins(props) {
  return (
    <div>
      <span className="gold-coins">${props.wallet}</span>
    </div>
  );
}
