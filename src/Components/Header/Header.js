import React from "react";

import "./Header.css";

import { Coins } from "../Coins/Coins";

export function Header(props) {
  return (
    <div>
      <header className="header-fixed">
        <div className="header-content">
          <h1>Shop</h1>
          <Coins wallet={props.wallet} />
        </div>
      </header>
    </div>
  );
}
