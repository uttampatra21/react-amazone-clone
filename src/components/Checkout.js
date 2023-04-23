import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonKarigar/Saheli_store_banner.png"
          alt=""
          className="checkout__add"
        />
        <div>
          <h2 className="checkout__tittle">Your Shopping Basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
