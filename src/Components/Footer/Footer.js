import React from "react";

import "./Footer.css";

export function Footer() {
  return (
    <div className="footer">
      <a
        href="https://github.com/ERodriguez-10/shop-coin-store"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        View Source on Github
      </a>
      <p className="author">
        <span>Shop</span> - Coins Store
      </p>
    </div>
  );
}
