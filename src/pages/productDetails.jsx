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

function ProductDetails(props) {


    const [showDescription, setShowDescription] = useState(true);
    const [showFeatures, setShowFeatures] = useState(false);
    const [showSpecification, setShowSpecification] = useState(false);

    const [currentProductImage, setCurrentProductImage] = useState(0);
    const [lightBox, setLightBox] = useState(false);


    const images = [
        {
            png: offer5,
            thumbnail: offer5,
        },
        {
            png: offer2,
            thumbnail: offer2,
        },
        {
            png: offer3,
            thumbnail: offer3,
        },
        {
            png: offer4,
            thumbnail: offer4,
        },
        {
            png: offer1,
            thumbnail: offer1,
        },
      ]
    
  
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


  
    return (
        <>
            <div className='heads'>
              <Header />
            </div>
         <div className='product-details'>
            <div className="auto-title">
               <h2>Volkswagen Atlas 2</h2>
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
                <img className="product1" src={images[currentProductImage].png} alt=""onClick={() => setLightBox(true)}/>
                <div className="thumbnail d-flex">
                    <div className="thumb">
                      <img className={currentProductImage === 0 ? 'active' :''}
                           onClick={ () => setCurrentProductImage(0)}
                           src={images[0].thumbnail}
                           alt=""/>
                   </div>
                   <div className="thumb">
                      <img className={currentProductImage === 1 ? 'active' :''}
                           onClick={ () => setCurrentProductImage(1)}
                           src={images[1].thumbnail}
                           alt=""/>
                   </div>
                   <div className="thumb">
                      <img className={currentProductImage === 2 ? 'active' :''}
                           onClick={ () => setCurrentProductImage(2)}
                           src={images[2].thumbnail}
                           alt=""/>
                   </div>
                   <div className="thumb">
                      <img className={currentProductImage === 3 ? 'active' :''}
                           onClick={ () => setCurrentProductImage(3)}
                           src={images[3].thumbnail}
                           alt=""/>
                   </div>
                   <div className="thumb">
                      <img className={currentProductImage === 4 ? 'active' :''}
                           onClick={ () => setCurrentProductImage(4)}
                           src={images[4].thumbnail}
                           alt=""/>
                   </div>
                </div>
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
            {showSpecification && <Specification />}

            </div>
        </div>
        <Footer />
        </>
       
    );
}

export default ProductDetails;