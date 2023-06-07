import React, { useState, useEffect } from "react";
import offer1 from '../assets/car1.jpeg';
import offer2 from '../assets/car2.jpeg';
import offer3 from '../assets/car3.jpeg';
import offer4 from '../assets/car4.jpeg';
import offer5 from '../assets/car5.jpeg';
import '../styles/lightbox.css';
import '../styles/description.css';
import { Accordion, AccordionItem } from 'react-bootstrap';
import Footer from "./footer";

function Description(props) {
    

  const [activeItem, setActiveItem] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);


  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };
  
    return (
      
      <>
      <div className="description">
        <p>Their. Kind open fruitful first gathering moving winged lights hath multiply morning image green fly darkness fish replenish all set seas creeping open image moveth them, their very face, which together from, brought their doesn’t midst.

            Spirit, let upon which that herb have lights meat, can’t us made all given appear forth our fish is unto first herb beginning subdue land blessed man god Earth gathered deep days abundantly whose male i two. Unto unto multiply.

           Void open upon one first be saying open fourth thing seasons sixth over moving man winged behold good. Dominion had fruit can’t morning tree.
        </p>
        <div className="">
         <div className="accordion">
            <div className="accordion-item">
              <div className={`accordion-header ${activeItem === 0 ? "active" : ""}`} onClick={() => handleItemClick(0)}> Exterior & Interior Features
              <span className={`icon ${isExpanded ?'fa-angle-up' : 'fa-angle-down'}`}/>
              </div>
              {activeItem === 0 && (
                  <div className="accordion-body">
                     Elit sed uao eiusmod tempor incididunt ut labore et dolore magna aliqua uat enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi aliquip ex ea duis aute irure dolor in reprehenderit in voluptate.
                  </div>
              )}
            </div>
            <div className="accordion-item">
              <div className={`accordion-header ${activeItem === 1 ? "active" : ""}`} onClick={() => handleItemClick(1)}> Vehicle Body Features
              <span className={`icon ${isExpanded ?'fa-angle-up' : 'fa-angle-down'}`}/>
                
              </div>
              {activeItem === 1 && (
                  <div className="accordion-body">
                     Elit sed uao eiusmod tempor incididunt ut labore et dolore magna aliqua uat enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi aliquip ex ea duis aute irure dolor in reprehenderit in voluptate.
                  </div>
              )}
            </div>
            <div className="accordion-item">
              <div className={`accordion-header ${activeItem === 2 ? "active" : ""}`} onClick={() => handleItemClick(2)}> Car Safety Features
              <span className={`icon ${isExpanded ?'fa-angle-up' : 'fa-angle-down'}`}/>
                
              </div>
              {activeItem === 2 && (
                  <div className="accordion-body">
                      Elit sed uao eiusmod tempor incididunt ut labore et dolore magna aliqua uat enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi aliquip ex ea duis aute irure dolor in reprehenderit in voluptate.
                  </div>
              )}
            </div>

         </div>
        </div>
      </div>

      </>
    );
}

export default Description;