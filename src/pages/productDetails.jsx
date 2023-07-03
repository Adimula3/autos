import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { autoDatas } from "../data/data";
import "../styles/productDetails.css";
import Description from "../component/description";
import Feature from "../component/feature";
import Specification from "../component/specification";
import Header from "../component/header";
import Footer from "../component/footer";
import agent1 from "../assets/agent-demo.jpeg";
function ProductDetails() {
  const [autoData, setAutoData] = useState([]);
  const [showDescription, setShowDescription] = useState(true);
  const [showFeatures, setShowFeatures] = useState(false);
  const [showSpecification, setShowSpecification] = useState(false);

  const [mainImage, setMainImage] = useState(null);

  const handleDescriptionClick = () => {
    setShowDescription(true);
    setShowFeatures(false);
    setShowSpecification(false);
  };

  const handleFeaturesClick = () => {
    setShowDescription(false);
    setShowFeatures(true);
    setShowSpecification(false);
  };
  const handleSpecificationClick = () => {
    setShowDescription(false);
    setShowFeatures(false);
    setShowSpecification(true);
  };

  const params = useParams();

  const getAutoDetails = () => {
    const autoDetails = autoDatas.find(
      (product) => product.id === parseInt(params.productId)
    );
    // console.log(autoDetails);
    setAutoData(autoDetails);
    setMainImage(autoDetails.productImages[0]);
  };

  useEffect(() => {
    getAutoDetails();

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="heads">
        <Header />
      </div>
      <div className="product-details">
        <div className="auto-title">
          <h2>{autoData ? autoData.title : ""}</h2>
          <p>Home / {autoData ? autoData.title : ""}</p>
        </div>
        <div className="product-details-content">
          <div className="p-d-c d-flex">
            <div className="p-d-c-l">
              <div className="">
                <div className="p-d d-flex">
                  <div className="product-name-price d-flex">
                    <p>{autoData ? autoData.title : ""}</p>
                    <span>{autoData ? autoData.price : ""}</span>
                  </div>
                </div>
                <div className="product-light-box">
                  <img
                    className="product1"
                    src={autoData ? mainImage : ""}
                    alt=""
                  />

                  <div className="thumbnail d-flex">
                    {autoData &&
                      autoData.productImages &&
                      autoData.productImages.map((productImage, index) => (
                        <div
                          key={`image-${index}`}
                          onClick={() => {
                            setMainImage(productImage);
                          }}
                          className={`thumb ${
                            mainImage === productImage ? "active" : ""
                          }`}
                        >
                          <img src={productImage} alt="" />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="product-specific-details d-flex">
                <p onClick={handleDescriptionClick}>DESCRIPTION</p>
                <p onClick={handleFeaturesClick}>FEATURES</p>
                <p onClick={handleSpecificationClick}>SPECIFICATION</p>
              </div>
              <div className="">
                {showDescription && <Description autoData={autoData} />}
                {showFeatures && <Feature />}
                {showSpecification && <Specification autoData={autoData} />}
              </div>
            </div>
<<<<<<< HEAD
            <div className="product-light-box">
              <img
                className="product1"
                src={autoData ? mainImage : ""}
                alt=""
              />

              <div className="thumbnail d-flex">
                {autoData &&
                  autoData.productImages &&
                  autoData.productImages.map((productImage, index) => (
                    <div
                      key={`image-${index}`}
                      onClick={() => {
                        setMainImage(productImage);
                      }}
                      className={`thumb ${mainImage === productImage ? "active" : ""
                        }`}
                    >
                      <img src={productImage} alt="" />
                    </div>
                  ))}
=======
            <div className="p-d-c-r">
              <div className="mile-details">
                <h2>Ready to get your car?</h2>
                <p className="m-p">
                  Contact our agent for a test drive and negotiations:
                </p>
                <div className="seller-details">
                  <div className="seller ">
                    <img src={agent1} alt="" className="seller-img" />
                    <div>
                      <p className="agent-name"> John Doe mcclane</p>
                      <div className="agent-socials d-flex">
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-twitter"></i>
                      </div>
                    </div>
                  </div>
                  <div className="call-details">
                    <div className="c-details d-flex">
                      <span>
                        <i class="fa-solid fa-phone"></i>
                      </span>
                      <p className="phone"> +1 123-456-7890</p>
                    </div>
                    <div className="c-details d-flex">
                      <span>
                        <i class="fa-brands fa-whatsapp"></i>
                      </span>
                      <p className="whatsapp"> +1 123-456-7890</p>
                    </div>
                    <div className="c-details d-flex">
                      <span>
                        <i class="fa-solid fa-envelope"></i>
                      </span>
                      <p className="mail">Send Mail</p>
                    </div>
                  </div>
                </div>
>>>>>>> 5c7e498f8fcc7972da42bedb1a9397cfd54ab414
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetails;
