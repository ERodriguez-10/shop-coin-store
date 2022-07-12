import React from "react";

import "./styles.css";
import "./utilites";

import { RandomCoins } from "./utilites";
import { Catalog } from "./Components/Catalog/Catalog";
import { Footer } from "./Components/Footer/Footer";

export default function App() {
  const wallet = RandomCoins();

  return (
    <div className="App">
      <Catalog wallet={wallet} />
      <Footer />
    </div>
  );
}
