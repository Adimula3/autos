import React from "react";
import "../dealers/addDealer.css";
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import { useState } from "react";

function AddDealer(props) {
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
              <h2>Add Dealer Details</h2>
              <div className="add-dealer">
                <Row>
                  <Col lg={4}>
                    <div className="add-dealer-details">
                      <h4>Dealer Details</h4>
                      <form className="form">
                        <Row>
                          <Col md={6}>
                            <div className="form-group">
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
                                placeholder="name"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <div className="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                Email
                              </label>
                              <input
                                type="text"
                                className="form-control f-1"
                                name="fname"
                                id="fname"
                                placeholder="cars@you.com"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <div className="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                Phone No
                              </label>
                              <input
                                type="text"
                                className="form-control f-1"
                                name="fname"
                                id="fname"
                                placeholder="09033333333"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <div className="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                  <i className="fa-brands fa-instagram"></i>
                              </label>
                              <input
                                type="text"
                                className="form-control f-1"
                                name="fname"
                                id="fname"
                                placeholder="Barbie"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <div className="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                               <i className="fa-brands fa-facebook-f"></i>
                              </label>
                              <input
                                type="text"
                                className="form-control f-1"
                                name="fname"
                                id="fname"
                                placeholder="Elon Musk"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <div className="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                <i className="fa-brands fa-whatsapp"></i>
                              </label>
                              <input
                                type="text"
                                className="form-control f-1"
                                name="fname"
                                id="fname"
                                placeholder="0903333333"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <div className="form-group">
                              <label
                                for="exampleFormControlInput1"
                                className="form-label"
                              >
                                 <i className="fa-brands fa-twitter"></i>
                              </label>
                              <input
                                type="text"
                                className="form-control f-1"
                                name="fname"
                                id="fname"
                                placeholder="@musk"
                              />
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
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
                                Upload Profile image
                              </p>
                            </div>
                          </Col>
                        </Row>

                        <button className="btn btn-primary" type="submit">
                          Submit
                        </button>
                      </form>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <div className="dealer-list">
                      <h4>Dealer List</h4>
                      <div className="dealer-list-details">
                        <table className="">
                          <thead>
                            <tr>
                              <th className="table-head" scope="col">Name</th>
                              <th className="table-head" scope="col">Email</th>
                              <th className="table-head" scope="col">Phone No</th>
                              <th className="table-head" scope="col">Remove</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th className="table-cell">Mark</th>
                              <td className="table-cell">Mark@gmail.com</td>
                              <td className="table-cell">0905555555</td>
                              <td className="table-cell"><i class="fa-solid fa-x product-list-info"></i></td>
                            </tr>
                            <tr>
                              <th className="table-cell">Mark</th>
                              <td className="table-cell">Mark@gmail.com</td>
                              <td className="table-cell">0905555555</td>
                              <td className="table-cell"><i class="fa-solid fa-x product-list-info"></i></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
            {/* and end it here */}
          </div>
        </>
      )}
    </>
  );
}

export default AddDealer;
