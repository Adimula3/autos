import React, { useState } from "react";
import "../styles/lightbox.css";
import "../styles/description.css";

function Description({ autoData }) {
  const [activeItem, setActiveItem] = useState(null);
   // eslint-disable-next-line
  const [isExpanded, setIsExpanded] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <>
      <div className="description">
        <p> {autoData.about} </p>
        <div className="">
          <div className="accordion">
            <div className="accordion-item">
              <div
                className={`accordion-header ${activeItem === 0 ? "active" : ""
                  }`}
                onClick={() => handleItemClick(0)}
              >
                Exterior & Interior Features
                <span
                  className={`icon fa-solid ${isExpanded ? "fa-angle-up" : "fa-angle-down"
                    }`}
                />
              </div>
              {activeItem === 0 && (
                <div className="accordion-body">
                  <p className="accordion-text">
                    Elit sed uao eiusmod tempor incididunt ut labore et dolore
                    magna aliqua uat enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi aliquip ex ea duis aute
                    irure dolor in reprehenderit in voluptate.
                  </p>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <div
                className={`accordion-header ${activeItem === 1 ? "active" : ""
                  }`}
                onClick={() => handleItemClick(1)}
              >
                Vehicle Body Features
                <span
                  className={`icon fa-solid ${isExpanded ? "fa-angle-up" : "fa-angle-down"
                    }`}
                />
              </div>
              {activeItem === 1 && (
                <div className="accordion-body">
                  <p className="accordion-text">
                    Elit sed uao eiusmod tempor incididunt ut labore et dolore
                    magna aliqua uat enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi aliquip ex ea duis aute
                    irure dolor in reprehenderit in voluptate.
                  </p>
                </div>
              )}
            </div>
            <div className="accordion-item">
              <div
                className={`accordion-header ${activeItem === 2 ? "active" : ""
                  }`}
                onClick={() => handleItemClick(2)}
              >
                Car Safety Features
                <span
                  className={`icon fa-solid ${isExpanded ? "fa-angle-up" : "fa-angle-down"
                    }`}
                />
              </div>
              {activeItem === 2 && (
                <div className="accordion-body">
                  <p className="accordion-text">
                    Elit sed uao eiusmod tempor incididunt ut labore et dolore
                    magna aliqua uat enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi aliquip ex ea duis aute
                    irure dolor in reprehenderit in voluptate.
                  </p>
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
