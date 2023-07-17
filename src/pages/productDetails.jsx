import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { autoDatas } from "../data/data";
import "../styles/productDetails.css";
import Description from "../component/description";
import Specification from "../component/specification";
import Header from "../component/header";
import Footer from "../component/footer";
import agent1 from "../assets/agent-demo.jpeg";
function ProductDetails() {
  const [autoData, setAutoData] = useState([]);
  const [showDescription, setShowDescription] = useState(true);
  const [showSpecification, setShowSpecification] = useState(false);

  const [mainImage, setMainImage] = useState(null);

  const handleDescriptionClick = () => {
    setShowDescription(true);
    setShowSpecification(false);
  };

  const handleSpecificationClick = () => {
    setShowDescription(false);
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

      <Header />

      <div className="product-details">
        <div className="container">

          <div className="auto-details-header">
            <h2 className="auto-title">{autoData ? autoData.title : ""}</h2>
            <p className="auto-link">Home / {autoData ? autoData.title : ""}</p>
          </div>

          <div className="auto-details-wrapper">
            <div className="row">
              <div className="col-md-8">
                <div className="auto-details-box">

                  <div className="auto-header">
                    <p className="auto-title">{autoData ? autoData.title : ""}</p>
                    <p className="auto-price">&#8358; {autoData ? autoData.price : ""}</p>
                  </div>

                  <div className="auto-main-box">
                    <img
                      className="img-fluid"
                      src={autoData ? mainImage : ""}
                      alt=""
                    />
                  </div>

                  <div className="auto-thumbnail">
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
                  </div>



                  <div className="product-specific-details">
                    <p onClick={handleDescriptionClick}>DESCRIPTION</p>
                    <p onClick={handleSpecificationClick}>SPECIFICATION</p>
                  </div>
                  <div className="">
                    {showDescription && <Description autoData={autoData} />}
                    {showSpecification && <Specification autoData={autoData} />}
                  </div>

                </div>

              </div>

              <div className="col-md-4">
                <div className="mile-details">
                  <h2>Ready to get your car?</h2>

                  <p className="m-p">
                    Contact our agent for a Test Drive and Negotiations
                  </p>
                  <div className="seller-details">
                    <div className="seller-profile">
                      <img src={agent1} alt="" className="seller-img" />
                      <div className="profile-details">
                        <p className="agent-name"> John Doe mcclane</p>
                        <div className="agent-socials">
                            <ul>
                                <li>
                                    <a href="https://instagram.com"> </a>
                                    <i className="fa-brands fa-instagram"></i>
                                </li>
                                <li>
                                    <a href="https://facebook.com"> </a>
                                    <i className="fa-brands fa-facebook-f"></i>
                                </li>
                                <li>
                                    <a href="https://whatsapp.com"> </a>
                                    <i className="fa-brands fa-whatsapp"></i>
                                </li>
                                <li>
                                    <a href="https://twitter.com"> </a>
                                    <i className="fa-brands fa-twitter"></i>
                                </li>
                            </ul>
                        </div>
                      </div>

                    </div>

                    <div className="call-details">

                      <div className="c-details d-flex">
                        <span className="icon-section phone">
                          <i class="fa-solid fa-phone"></i>
                        </span>
                        <p className="icon-title phone"> Call Agent </p>
                      </div>

                      <div className="c-details d-flex">
                        <span>
                          <i class="fa-brands fa-whatsapp"></i>
                        </span>
                        <p className="whatsapp"> Message Agent</p>
                      </div>

                      <div className="c-details d-flex">
                        <span>
                          <i class="fa-solid fa-envelope"></i>
                        </span>
                        <p className="mail">Mail Agent </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div >

      <Footer />
    </>
  );
}

export default ProductDetails;