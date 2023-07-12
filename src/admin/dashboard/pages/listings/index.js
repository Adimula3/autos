import React, { useState } from "react";
import "../listings/listings.css";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import offer1 from "../../../../assets/car1.jpeg";
import offer2 from "../../../../assets/car2.jpeg";
import { Row, Col } from "react-bootstrap";
const CarListPage = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <DashSpinner />
      ) : (
        <>
          <HandleScroll />
          <div id="category-container" className="category-container">
            {/* start your coding from here you can give the div any class name oooo*/}
            <div className="container-start">
              <h2> Product Lists Page</h2>
              <div className="product-list">
                <h4>Product Listings</h4>
                <div className="product-list-box-details d-flex">
                  <div className="product-list-box">
                    <div className="product-list-product">
                      <p className="product-list-title">Product</p>
                    </div>
                    <div className="product-list-image">
                      <img src={offer1} className="product-list-img" alt="" />
                    </div>
                    <div className="product-list-image">
                      <img src={offer2} className="product-list-img" alt="" />
                    </div>
                    <div className="product-list-image">
                      <img src={offer2} className="product-list-img" alt="" />
                    </div>
                  </div>
                  <div className="product-list-model">
                    <p className="product-list-title">Model</p>
                    <div>
                      <p className="product-list-info">Nissan Ultra</p>
                    </div>
                    <div>
                      <p className="product-list-info">Kia 2DX</p>
                    </div>
                    <div>
                      <p className="product-list-info">Toyota Camry</p>
                    </div>
                  </div>
                  <div className="product-list-year">
                    <p className="product-list-title">Year</p>
                    <div>
                      <p className="product-list-info">2022</p>
                    </div>
                    <div>
                      <p className="product-list-info">2020</p>
                    </div>
                    <div>
                      <p className="product-list-info">2015</p>
                    </div>
                  </div>
                  <div className="product-list-price">
                    <p className="product-list-title">Price</p>
                    <div>
                      <p className="product-list-info">5,000,000</p>
                    </div>
                    <div>
                      <p className="product-list-info">25,000,000</p>
                    </div>
                    <div>
                      <p className="product-list-info">8,000,000</p>
                    </div>
                  </div>
                  <div className="product-list-edit">
                    <p className="product-list-title">Edit</p>
                    <div>
                    <i class="fa-solid fa-pen-to-square product-list-info"></i>
                    </div>
                    <div>
                    <i class="fa-solid fa-pen-to-square  product-list-info"></i>
                    </div>
                    <div>
                    <i class="fa-solid fa-pen-to-square product-list-info"></i>
                    </div>
                  </div>
                  <div className="product-list-remove">
                    <p className="product-list-title">Remove</p>
                    <div>
                    <i class="fa-solid fa-x product-list-info"></i>
                    </div>
                    <div>
                    <i class="fa-solid fa-x product-list-info"></i>
                    </div>
                    <div>
                    <i class="fa-solid fa-x product-list-info"></i>
                    </div>
                  </div>
                </div>

                <div className="product-list-box-details d-flex"></div>
              </div>
            </div>
            {/* and end it here */}
          </div>
        </>
      )}
    </>
  );
};

export default CarListPage;
