import React from 'react';
import '../testimonials/testimonials.css';
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import { useState } from "react";
function Testimonials(props) {
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
                <h2>Add Testimonial</h2>
                <div className='add-testimonial'>
                    <h4>Add Testimonials</h4>
                    <div className='testimonial-add--details'>
                    <Row>
                  <Col lg={4}>
                    <div className="add-dealer-details">
                      <h4>Testimonials Details</h4>
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
                        <Col md={12}>
                        <div className="form-group">
                          <label
                            for="exampleFormControlInput1"
                            className="form-label"
                          >
                            Comments
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
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
                    <div className="testimonial-list">
                      <h4>Testimonial List</h4>
                      <div className="testimonial-list-details">
                        <table className="t-table">
                          <thead>
                            <tr>
                            <th scope="col">#</th>
                              <th className="table-head" scope="col">Name</th>
                              <th className="table-head" scope="col">Remove</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                            <th scope="row">1</th>
                              <th className="table-cell">Mark</th>
                              <td className="table-cell"><i class="fa-solid fa-x product-list-info"></i></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                              <th className="table-cell">Mark</th>
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
              </div>
              {/* and end it here */}
            </div>
          </>
        )}
      </>
    );
}

export default Testimonials;