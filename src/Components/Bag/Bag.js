import React, { useState } from "react";

import "./Bag.css";

export function Bag(props) {
  const [openMenu, setOpenMenu] = useState(false);

  function handleStatus() {
    setOpenMenu((prevState) => !prevState);
    console.log(props.cartItems.length);
  }

  const totalPrice = props.cartItems.reduce(
    (price, item) => price + item.quantity * item.value,
    0
  );

  return (
    <div>
      <div>
        <button className="bag-shop" onClick={handleStatus}>
          <i className="bx bx-shopping-bag"></i>
          <span className="badge">{props.content}</span>
        </button>
      </div>

      <div className={openMenu ? "cart active" : "cart"}>
        <h2 className="cart-title">Your cart</h2>
        <div className="cart-content">
          {props.cartItems.length === 0 && (
            <div className="cart-empty-message"> No items are added.</div>
          )}
          {props.cartItems.map((item) => (
            <div className="cart-box" key={item.id}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png"
                alt="Testing"
                className="cart-img"
                widht="64"
                height="64"
              />
              <div className="detail-box">
                <div className="cart-product-title">{item.title}</div>
                <div className="cart-price">${item.value}</div>
                {item.quantity}
                <div className="cart-items-function">
                  <button
                    className="cart-items-add"
                    onClick={() => props.handleAddProduct(item)}
                  >
                    +
                  </button>
                  <button
                    className="cart-items-remove"
                    onClick={() => props.handleRemoveProduct(item)}
                  >
                    -
                  </button>
                </div>
              </div>

              <i
                className="bx bxs-trash-alt"
                onClick={() => props.handleDeleteProduct(item)}
              ></i>
            </div>
          ))}
        </div>

        {props.cartItems.length !== 0 && (
          <div>
            <div className="total">
              <div className="total-title">Total</div>
              <div className="total-price">${totalPrice}</div>
            </div>

            <button type="button" className="btn-buy">
              Buy Now
            </button>

            <i className="bx bx-x" id="close-cart" onClick={handleStatus}></i>
          </div>
        )}
      </div>
    </div>
  );
}

/* <div className="cart-box">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/800px-NASA_logo.svg.png"
              alt="Testing"
              className="cart-img"
              widht="64"
              height="64"
            />
            <div className="detail-box">
              <div className="cart-product-title">Object Testing</div>
              <div className="cart-price">$24.99</div>
              <input type="number" defaultValue="1" className="cart-quantity" />
            </div>

            <i className="bx bxs-trash-alt"></i>
          </div> */
