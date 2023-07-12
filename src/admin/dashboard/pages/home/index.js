import React, { useState } from "react";
import HandleScroll from "../../components/go-top";
import "../home/index.css";
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import DashSpinner from "../../components/dash-spinner";
import agent45 from "../../assets/images/agent-demo.jpeg";
import offer1 from "../../../../assets/car1.jpeg";
import offer2 from "../../../../assets/car2.jpeg";
const DashboardHome = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    // Add more options as needed
  ];

  return (
    <>
      {loading ? (
        <DashSpinner />
      ) : (
        <>
          <HandleScroll />
          <div id="category-container" className="main-container">
            <div id="category-container" className="category-container">
              {/* start your coding from here you can give the div any class name oooo*/}
              <div className="dashboard-home">
                <div className="page-views-box d-flex">
                  <div className="views total-view">
                    <p className="views-number">1000+</p>
                    <div className="v-n d-flex">
                      <p>Total Page views</p>
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <div className="last-updated d-flex">
                      <i class="fa-solid fa-timer"></i>
                      <span>update : 2:15 am</span>
                    </div>
                  </div>
                  <div className="views daily-view">
                    <p className="views-number">1000+</p>
                    <div className="v-n d-flex">
                      <p>Daily Page views</p>
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <div className="last-updated d-flex">
                      <i class="fa-solid fa-timer"></i>
                      <span>update : 2:15 am</span>
                    </div>
                  </div>
                  <div className="views weekly-view">
                    <p className="views-number">1000+</p>
                    <div className="v-n d-flex">
                      <p>Weekly Page views</p>
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <div className="last-updated d-flex">
                      <i class="fa-solid fa-timer"></i>
                      <span>update : 2:15 am</span>
                    </div>
                  </div>
                  <div className="views monthly-view">
                    <p className="views-number">1000+</p>
                    <div className="v-n d-flex">
                      <p>Monthly Page views</p>
                      <i class="fa-solid fa-chart-simple"></i>
                    </div>
                    <div className="last-updated d-flex">
                      <i class="fa-solid fa-timer"></i>
                      <span>update : 2:15 am</span>
                    </div>
                  </div>
                </div>
                <div className="box3">
                  <Row>
                    <Col lg={8}>
                      <div className="box3-left">
                        <h4>Most Viewed Product</h4>
                        <div className="box3-details d-flex">
                          <div className="box3-product">
                            <p className="box3-title">Product</p>
                            <div className="box3-image">
                              <img src={offer1} className="box3-img" alt="" />
                            </div>
                            <div className="box3-image">
                              <img src={offer2} className="box3-img" alt="" />
                            </div>
                            <div className="box3-image">
                              <img src={offer2} className="box3-img" alt="" />
                            </div>
                          </div>
                          <div className="box3-model">
                            <p className="box3-title">Model</p>
                            <div>
                              <p className="box3-info">Nissan Ultra</p>
                            </div>
                            <div>
                              <p className="box3-info">Kia 2DX</p>
                            </div>
                            <div>
                              <p className="box3-info">Toyota Camry</p>
                            </div>
                          </div>
                          <div className="box3-year">
                            <p className="box3-title">Year</p>
                            <div>
                              <p className="box3-info">2022</p>
                            </div>
                            <div>
                              <p className="box3-info">2020</p>
                            </div>
                            <div>
                              <p className="box3-info">2015</p>
                            </div>
                          </div>
                          <div className="box3-price">
                            <p className="box3-title">Price</p>
                            <div>
                              <p className="box3-info">5,000,000</p>
                            </div>
                            <div>
                              <p className="box3-info">25,000,000</p>
                            </div>
                            <div>
                              <p className="box3-info">8,000,000</p>
                            </div>
                          </div>
                          <div className="box3-views">
                            <p className="box3-title">Views</p>
                            <div>
                              <p className="box3-info">20</p>
                            </div>
                            <div>
                              <p className="box3-info">100</p>
                            </div>
                            <div>
                              <p className="box3-info">50</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="mail-messages">
                        <h4>Mail Message</h4>
                        <div className="notifications">
                          <p className="noti">Notifications</p>
                          <p className="notifi-msg">You have 21 messages</p>
                        </div>
                        <div className="mailbox-logo">
                          <i class="fa-regular fa-envelope fa-flip"></i>
                          <p>Go to your mail and check your messages</p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="Box2 d-flex">
                  <Row>
                    <Col lg={6}>
                      <div className="latest-update">
                        <h4>Latest Updates</h4>
                        <div className="update-msg d-flex">
                          <p className="date">4 hrs ago </p>
                          <div className="box2-msg">
                            <p className="up-msg">
                              + 5 New Products were added!
                            </p>
                            <span>Congratulations!</span>
                          </div>
                        </div>
                        <div className="update-msg d-flex">
                          <p className="date">1 day ago </p>
                          <div className="box2-msg">
                            <p className="up-msg">+ 5 Products were removed!</p>
                            <span>+Successfully</span>
                          </div>
                        </div>
                        <div className="update-msg d-flex">
                          <p className="date">4 hrs ago </p>
                          <div className="box2-msg">
                            <p className="up-msg">
                              + 5 New Products were edited!
                            </p>
                            <span>Congratulations!</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="dealer-information d-flex">
                        <div className="box2-dealer-details1">
                          <img
                            src={agent45}
                            alt=""
                            className="box2-dealer-img"
                          ></img>
                          <p>Pamino</p>
                          <i class="fa-regular fa-pen-to-square"></i>
                        </div>
                        <div className="box2-dealer-details2">
                          <p className="b2-title">Dealer Information</p>
                          <hr></hr>
                          <div className="b2-dealer-details d-flex">
                            <div className="b2-dealer-email">
                              <p>Email</p>
                              <span>jeny@gmail.com</span>
                            </div>
                            <div className="b2-dealer-phone">
                              <p>Phone</p>
                              <span>0023-333-526136</span>
                            </div>
                          </div>

                          <div className="box2-dealer-socials d-flex">
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                            <i className="fa-brands fa-twitter"></i>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>

                <div></div>
              </div>
              {/* and end it here */}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DashboardHome;
