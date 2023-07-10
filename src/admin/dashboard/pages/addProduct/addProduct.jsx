import React from "react";
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import { useState } from "react";
import "../addProduct/addProduct.css";

function AddProduct(props) {
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
              <h1> Add Product Page</h1>
              <div>
                <div className="file-upload d-flex">
                  <div className="d-img">
                    <div class="image-upload-wrap">
                      <input className="file-upload-input" type="file" />
                      <div className="drag-text">
                        <h3>Add Main Product Image</h3>
                      </div>
                    </div>
                    <div className="file-upload-content">
                      <img
                        className="file-upload-image"
                        src="#"
                        alt="your image"
                      />
                      <div className="image-title-wrap">
                        <button type="button" className="remove-image">
                          Remove{" "}
                          <span className="image-title">Uploaded Image</span>
                        </button>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="thumbail-image-upload-wrap">
                        <input
                          className="thumbnail-file-upload-input"
                          type="file"
                        />
                        <div className="thumbnail-drag-text">
                          <h3>Interior</h3>
                        </div>
                      </div>
                      <div className="thumbail-image-upload-wrap">
                        <input
                          className="thumbnail-file-upload-input"
                          type="file"
                        />
                        <div className="thumbnail-drag-text">
                          <h3>Interior</h3>
                        </div>
                      </div>
                      <div className="thumbail-image-upload-wrap">
                        <input
                          className="thumbnail-file-upload-input"
                          type="file"
                        />
                        <div className="thumbnail-drag-text">
                          <h3>EXterior</h3>
                        </div>
                      </div>
                      <div className="thumbail-image-upload-wrap">
                        <input
                          className="thumbnail-file-upload-input"
                          type="file"
                        />
                        <div className="thumbnail-drag-text">
                          <h3>Exterior</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-dealer">
                    <h2>Dealer</h2>
                    <Row>
                      <Col md={6}>
                      <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control f-1"
                          name="fname"
                          id="fname"
                          placeholder="Pamino"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                      <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control f-1"
                          name="fname"
                          id="fname"
                          placeholder="you@gmail.com"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                      <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Contact No.
                        </label>
                        <input
                          type="text"
                          className="form-control f-1"
                          name="fname"
                          id="fname"
                          placeholder="09064819280"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <input
                          className ="dealer-file-upload-input"
                          type="file"
                        />
                      </Col>
                    </Row>
                  </div>
                </div>
                <div>
                  <form className="dashboard-form">
                    <div className="row">
                      <div className="col-md-12 form-group">
                        <label
                          for="exampleFormControlInput1"
                          className="form-label"
                        >
                          Title
                        </label>
                        <input
                          type="text"
                          className="form-control f-1"
                          name="fname"
                          id="fname"
                          placeholder="Lexus EX500"
                        />
                      </div>
                      <div className="dash-dropdwon d-flex">
                        <div className="d-d-1">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="primary"
                              id="dropdown-basic"
                            >
                              All Makes
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#action1">
                                Toyota
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                Lexus
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                Honda
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                Mercedez
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">BMW</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="d-d-1">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="primary"
                              id="dropdown-basic"
                            >
                              Year
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#action1">
                                2007-2010
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                2011-2015
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                2016-2020
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                2021-2023
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="d-d-1">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="primary"
                              id="dropdown-basic"
                            >
                              Transmission
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#action1">
                                Manual
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                Automatic
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                Semi-automatic
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                        <div className="d-d-1">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="primary"
                              id="dropdown-basic"
                            >
                              Fuel
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                              <Dropdown.Item href="#action1">
                                Petrol
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                Diesel
                              </Dropdown.Item>
                              <Dropdown.Item href="#action1">
                                Plugin-Elecetric
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Version
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="1.3"
                          />
                        </div>
                        <div className="col-md-3 form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Mileage
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="4980"
                          />
                        </div>
                        <div className="col-md-3 form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Horsepower
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="300HP"
                          />
                        </div>
                        <div className="col-md-3 form-group">
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Drive
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="4x4"
                          />
                        </div>
                      </div>
                      <Row>
                        <Col md={3}>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Condition
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="New"
                          />
                        </Col>
                        <Col md={3}>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            VIN
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="234HDGSGF34623"
                          />
                        </Col>
                        <Col md={3}>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Engine
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="16000"
                          />
                        </Col>
                        <Col md={3}>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Doors
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="4"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={3}>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Seats
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="5"
                          />
                        </Col>
                        <Col md={3}>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Color
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="Red"
                          />
                        </Col>
                        <Col md={3}>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            InteriroColor
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder="Black"
                          />
                        </Col>
                        <Col md={3}>
                          <label
                            for="exampleFormControlInput1"
                            class="form-label"
                          >
                            Warranty
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name="fname"
                            id="fname"
                            placeholder=" Warranty"
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col md={12}>
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Price (Ngn)
                          </label>
                          <input
                            type="text"
                            className="form-control f-1"
                            name="fname"
                            id="fname"
                            placeholder="15,000000"
                          />
                        </Col>
                      </Row>
                    </div>
                    <div className="add-btn-group">
                      <button className="file-upload-btn">ADD PRODUCT</button>
                    </div>
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

export default AddProduct;
