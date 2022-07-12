import React from "react";

import "./Product.css";

export function Product(props) {
  return (
    <div className="grid-template">
      {props.information.map((productItem) => (
        <div className="container" key={productItem.id}>
          <img
            className="img-product"
            alt="Nasa logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png"
            width="122"
          />
          <div className="info-container">
            <div>
              <p className="title">{productItem.title}</p>
              <p className="price">${productItem.value}</p>
            </div>
            <div className="btn-container">
              <button
                value={productItem.value}
                className={`btn ${
                  productItem.value <= props.coins ? "canBuy" : "disabled"
                }`}
                disabled={productItem.value <= props.coins ? false : true}
                onClick={(e) => {
                  props.handleChange(e);
                  props.handleAddProduct(productItem);
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
