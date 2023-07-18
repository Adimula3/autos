import React from "react";
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import { useState } from "react";
import "../addProduct/addProduct.css";

function OldAddProduct(props) {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <DashSpinner />
      ) : (
        <>
          <HandleScroll />
          <div id="category-container" className="main-container">
            {/* start your coding from here you can give the div any class name oooo*/}
            <div className="container-start">
              <h2>Add Product</h2>
              <div className="add-product">
                <h4>Product Details</h4>
                <div>
                  <form className="form">
                    <Row>
                      <Col md={6}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Maker
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="Lexus"
                          />
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Brand
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="Lexus EX500"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Year
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="2014"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Transmission
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="Manual"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          > 
                            Fuel
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="Petrol"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Mileage
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="4980"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            HorsePower
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="300HP"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Version
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="1.3"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Drive
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="4x4"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Condition
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="New"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Vin
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="234HDGSGF34623"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Engine
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="16000"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Doors
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="2"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Seats
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="5"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Color
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="RED"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Interiror-Color
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="ORANGE"
                          />
                        </div>
                      </Col>
                      <Col md={4}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Warranty
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="	YES"
                          />
                        </div>
                      </Col>
                    </Row>
                    <h4>More Details</h4>

                    <Row>
                      <Col md={12}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            About
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
                        </div>
                      </Col>
                     
                      <Row>
                        <Col md={12}>
                          <div className="form-group">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label"
                            >
                              Price (N)
                            </label>
                            <input
                              type="text"
                              className="form-control f-1"
                              name="fname"
                              id="fname"
                              placeholder="5,000,000"
                            />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            File
                          </label>
                          <div className="file">
                            <input
                              type="file"
                              className="myFile"
                              id="myFile"
                              name="filename"
                            />
                            <p className="file-upload-msg">
                              Select up to 5 images:
                              <p className="file-upload-msg">
                                The first image selected will be the main
                                picture, while the rest will be displayed as
                                thumbnails.
                              </p>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Row>
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            {/* and end it here */}
          </div>
        </>
      )}
    </>
  );
}

export default OldAddProduct;
