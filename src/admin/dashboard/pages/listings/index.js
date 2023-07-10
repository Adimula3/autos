import React, { useState } from "react";
import "../listings/listings.css";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import offer5 from "../../../../assets/car1.jpeg";
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
              <h1> Car Listings Page</h1>
              <Row>
                <Col md={6}>
                <div className="listings d-flex">
                <div>
                  <img src={offer5} alt="" className="listings-img" />
                </div>
                <div>
                  <div className="listings-details">
                    <h3>Volkswagen Atlas 2</h3>
                  </div>
                  <div className="l-d d-flex">
                    <div className="l-d-1 d-flex">
                      <p>
                        MAKE : <span>Volkswagen</span>
                      </p>
                      <p>
                        YEAR : <span>2014</span>
                      </p>
                    </div>
                  </div>
                  <div className="l-d-3 d-flex">
                            <button className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i>EDIT</button>
                            <button className="btn btn-danger"><i class="fa-solid fa-xmark"></i>REMOVE</button>
                    </div>
                </div>
              </div>
              <div>
               
              </div>
              <div className="listings d-flex">
                <div>
                  <img src={offer5} alt="" className="listings-img" />
                </div>
                <div>
                  <div className="listings-details">
                    <h3>Volkswagen Atlas 2</h3>
                  </div>
                  <div className="l-d d-flex">
                    <div className="l-d-1 d-flex">
                      <p>
                        MAKE : <span>Volkswagen</span>
                      </p>
                      <p>
                        YEAR : <span>2014</span>
                      </p>
                    </div>
                  </div>
                  <div className="l-d-3 d-flex">
                            <button className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i>EDIT</button>
                            <button className="btn btn-danger"><i class="fa-solid fa-xmark"></i>REMOVE</button>
                    </div>
                </div>
              </div>
                </Col>
                <Col md={6}>
                <div className="listings d-flex">
                <div>
                  <img src={offer5} alt="" className="listings-img" />
                </div>
                <div>
                  <div className="listings-details">
                    <h3>Volkswagen Atlas 2</h3>
                  </div>
                  <div className="l-d d-flex">
                    <div className="l-d-1 d-flex">
                      <p>
                        MAKE : <span>Volkswagen</span>
                      </p>
                      <p>
                        YEAR : <span>2014</span>
                      </p>
                    </div>
                  </div>
                  <div className="l-d-3 d-flex">
                            <button className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i>EDIT</button>
                            <button className="btn btn-danger"><i class="fa-solid fa-xmark"></i>REMOVE</button>
                    </div>
                </div>
              </div>
              <div className="listings d-flex">
                <div>
                  <img src={offer5} alt="" className="listings-img" />
                </div>
                <div>
                  <div className="listings-details">
                    <h3>Volkswagen Atlas 2</h3>
                  </div>
                  <div className="l-d d-flex">
                    <div className="l-d-1 d-flex">
                      <p>
                        MAKE : <span>Volkswagen</span>
                      </p>
                      <p>
                        YEAR : <span>2014</span>
                      </p>
                    </div>
                  </div>
                  <div className="l-d-3 d-flex">
                            <button className="btn btn-primary"><i class="fa-solid fa-pen-to-square"></i>EDIT</button>
                            <button className="btn btn-danger"><i class="fa-solid fa-xmark"></i>REMOVE</button>
                    </div>
                </div>
              </div>
                </Col>
              </Row>
              
             
              <div>
               
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
