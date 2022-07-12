import React, { useState } from "react";

import "./Catalog.css";
import { Product } from "../Product/Product";
import { Bag } from "../Bag/Bag";
import { Header } from "../Header/Header";

import { Data } from "../../data";
import { nanoid } from "nanoid";

export function Catalog(props) {
  const [coins, setCoins] = useState(props.wallet);
  const [count, setCount] = useState(0);
  const [information, setInformation] = useState(Data);

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const handleDeleteProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    }
  };

  function newProduct() {
    const newValue = Math.ceil(Math.random() * 5000);
    return {
      id: nanoid(),
      title: "Object ?",
      price: newValue,
      value: newValue
    };
  }

  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setInformation((prevInformation) => [
        ...prevInformation,
        newProduct(),
        newProduct(),
        newProduct(),
        newProduct(),
        newProduct(),
        newProduct(),
        newProduct(),
        newProduct(),
        newProduct(),
        newProduct()
      ]);
    }
  };

  const handleChange = (e) => {
    setCoins((prevCoins) => prevCoins - e.target.value);
    const countNumber = parseInt(count, 10);
    setCount((prevCount) => countNumber + 1);
  };

  return (
    <div>
      <Header wallet={coins} />
      <div className="body-catalog">
        <div>
          <Product
            information={information}
            handleAddProduct={handleAddProduct}
            handleChange={handleChange}
            coins={coins}
            handleRemoveProduct={handleRemoveProduct}
          />
          <Bag
            content={count}
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
        </div>
      </div>
    </div>
  );
}

/* OLD CODE
  const productCard = information.map((info) => {
    return (
      <Product
        key={info.id}
        coins={coins}
        onClick={handleAddProduct}
        info={info}
      />
    );
  }); */
