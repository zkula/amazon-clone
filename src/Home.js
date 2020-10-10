import "./Home.css";
import React from "react";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          {/* Product */}
          <Product
            id={1}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
          />
          <Product
            id={2}
            title="Alesis Drums Nitro Mesh Kit | Eight Piece All Mesh Electronic Drum Kit With Super Solid Aluminum Rack, 385 Sounds, 60 Play Along Tracks, Connection Cables, Drum Sticks & Drum Key Included"
            price={379.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/719+zJepvTL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Dash Mini Maker: The Mini Waffle Maker Machine"
            price={9.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71wvIZCRZ1L._AC_UL320_.jpg"
          />
          <Product
            id={4}
            title='Samsung Galaxy Tab S6 Lite 10.4", 64GB WiFi Tablet Oxford Gray - SM-P610NZAAXAR - S Pen Included'
            price={279.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/718B6zl+b6L._AC_UY218_.jpg"
          />
          <Product
            id={5}
            title="Gildan Men's Fleece Zip Hooded Sweatshirt"
            price={14.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Lpzlia0UL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={6}
            title="Samsung Electronics UN55MU6490 Curved 55-Inch 4K Ultra HD Smart LED TV (2017 Model)"
            price={(1, 949.0)}
            rating={5}
            image="https://m.media-amazon.com/images/I/61ToQWcRP4L._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
