import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png"
          alt="img"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="search__input" />
        <div className="header__searchIcon">
          <i class="bx bx-search"></i>
        </div>
      </div>

      <div className="header__nav">
        <Link to="/Login">
          <div className="header__option">
            <span className="header__optionline">Hello Uttam</span>
            <span className="header__optionlinetwo">Sign in</span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionline">Return</span>
          <span className="header__optionlinetwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionline">Your</span>
          <span className="header__optionlinetwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header__busket">
          <i class="bx bx-cart-alt "></i>
          <span className="header__optionlinetwo shoppingItem">0</span>
        </div>
      </Link>
    </div>
  );
};

export default Header;
