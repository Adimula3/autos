import React, { useState, useEffect } from "react";
import '../styles/productDetails.css';
import offer1 from '../assets/p-d1.jpeg';
import offer2 from '../assets/pd-2.jpeg';
import offer3 from '../assets/pd-3.jpeg';
import offer4 from '../assets/pd-4.jpeg';
import offer5 from '../assets/car5.jpeg';
import Description from "../component/description";
import Feature from "../component/feature";
import Specification from "../component/specification";
import Header from "../component/header";
import Footer from "../component/footer";
import  {productImages}  from "../data/data";
import { useParams } from 'react-router-dom';
import { autoDatas } from "../data/data";

function ProductDetails() {


    const [showDescription, setShowDescription] = useState(true);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showSpecification, setShowSpecification] = useState(false);

    const [currentProductImage, setCurrentProductImage] = useState(0);
    const [lightBox, setLightBox] = useState(false);
    const [activeProductImage, setActiveProductImage] = useState(0);
    
  
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

  const thumbnails = productImages.map((productImage, index) => (
    <div
      key={index}
      className="thumb"
      onClick={() => {
        setActiveProductImage(index);
      }}
    >
      <img src={productImage.thumbnail} alt="" />
    </div>
  ));

  const productImage = productImages[activeProductImage];
  
    return (
        <>
            <div className='heads'>
              <Header />
            </div>
         <div className='product-details'>
            <div className="auto-title">
               <h2>Volkswagen Atlas {params.productId}</h2>
               <h1></h1>
               <p>Home / Volkswagen Atlas 2</p>
            </div>
         <div className="product-details-content d-flex">
          <div className="">
           <div className='p-d d-flex'>
                <div className='product-name-price d-flex'>
                    <p>Volkswagen Atlas 2</p>
                    <span>2 Million</span>
                </div>
            </div>
            <div className="product-light-box">
            <img className="product1" src={productImage.png} alt="" />
                {thumbnails}
            </div>
           </div>
           <div className="mile-details">
                <div className="m-t-f-box">
                    <h4>Mileage</h4>
                </div>
                <div className="m-t-f-box">
                    <h4>Fuel</h4>
                </div>
                <div className="m-t-f-box">
                    <h4>Transmission</h4>
                </div>
            </div>
         </div>
           
            
            <div className="product-specific-details d-flex">
                <p onClick={handleDescriptionClick}>DESCRIPTION</p>
                <p onClick={handleFeaturesClick}>FEATURES</p>
                <p onClick={handleSpecificationClick}>SPECIFICATION</p>
            </div>
            <div className="">
            {showDescription && <Description />}
            {showFeatures && <Feature />}
            {showSpecification && <Specification autoDatas={autoDatas}/>}

            </div>
        </div>
        <Footer />
        </>
       
    );
}

export default ProductDetails;