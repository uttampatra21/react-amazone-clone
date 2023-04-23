import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Samsung/SamsungM/M14/Teaser-GW/D77911710_IN_WLME_SamsungM_M145G_Launch_tallhero_3000x1200._CB591670509_.jpg"
        />

        <div className="home__row">
          <Product
            id="123433"
            tittle="The new Book"
            price={32.33}
            rating={3}
            image="https://m.media-amazon.com/images/I/51y5Gl9UZLL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />

          <Product
            id="345453"
            tittle="Round Mortal"
            price={22.56}
            image="https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="324323"
            tittle="The zombie and the darknight"
            price={331.44}
            image="https://m.media-amazon.com/images/I/51ApjUZpRaL._AC_SR360,240_QL70_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="123433"
            rating={3}
            tittle="The horible time"
            price={32.0}
            image={
              "https://m.media-amazon.com/images/I/81QuI55xcdL._AC_UY327_FMwebp_QL65_.jpg"
            }
          />
          <Product
            id="3543345"
            tittle="The Sharlose Homeloss"
            price={100.99}
            image="https://m.media-amazon.com/images/I/81NAo81PtRL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="3543345"
            tittle="Will you cry if you die"
            price={320.0}
            image="https://m.media-amazon.com/images/I/41wKll7ITyL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="356344"
            tittle="The Jhones Mark"
            price={23.34}
            image="https://m.media-amazon.com/images/I/51JVXwJTcoL._AC_SR360,240_QL70_.jpg"
          />
          <Product
            id="3556543"
            tittle="Fedraick the national security"
            price={22}
            image="https://m.media-amazon.com/images/I/51Qum4qNZKL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="244542"
            tittle="Seamon the Greatest"
            price={500}
            image="https://m.media-amazon.com/images/I/51ASf81ZtCL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
