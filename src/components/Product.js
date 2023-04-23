import React from "react";
import "./Product.css";

const Product = ({ id, tittle, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{tittle}</p>
        <p className="product__price"></p>
        <small>$</small>
        <strong>{price}</strong>
        <div className="product__rating">
          {/* {Array(rating)
            .fill()
            .map((_, i) => {
              <p>⭐</p>;
            })} */}
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>
      <img src={image} alt="ima" />
      <button>Add to Busket</button>
    </div>
  );
};

export default Product;
