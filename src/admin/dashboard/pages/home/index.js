import React, { useState } from "react";
import HandleScroll from "../../components/go-top";
import "../home/home.css";
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
      
              {/* start your coding from here you can give the div any class name oooo*/}
              <div className="dashboard-home">

                <div className="page-views-box">
                  <div className="row">

                    <div className="col-md-3">

                      <div className="view-box total-view">

                        <div className="view-metrics">
                          <div className="view-metric-info">
                            <p className="views-number">10,000+</p>
                            <p className="note">Total Site Visit</p>
                          </div>
                          <div className="view-metric-icon">
                            <i class="fa-solid fa-chart-simple"></i>
                          </div>
                        </div>

                        <hr />

                        <div className="last-updated">
                          <p className="note-one">  Last Updated: </p>
                          <p className="time"> 2:15 am </p>
                        </div>
                      </div>

                    </div>

                    <div className="col-md-3">

                      <div className="view-box daily-view">

                        <div className="view-metrics">
                          <div className="view-metric-info">
                            <p className="views-number">512</p>
                            <p className="note">Daily Site Visit</p>
                          </div>
                          <div className="view-metric-icon">
                            <i class="fa-solid fa-chart-simple"></i>
                          </div>
                        </div>

                        <hr />

                        <div className="last-updated">
                          <p className="note-one">  Last Updated: </p>
                          <p className="time"> 2:15 am </p>
                        </div>
                      </div>

                    </div>


                    <div className="col-md-3">

                      <div className="view-box weekly-view">

                        <div className="view-metrics">
                          <div className="view-metric-info">
                            <p className="views-number">1264</p>
                            <p className="note">Weekly Site Visit</p>
                          </div>
                          <div className="view-metric-icon">
                            <i class="fa-solid fa-chart-simple"></i>
                          </div>
                        </div>

                        <hr />

                        <div className="last-updated">
                          <p className="note-one">  Last Updated: </p>
                          <p className="time"> 2:15 am </p>
                        </div>
                      </div>

                    </div>


                    <div className="col-md-3">

                      <div className="view-box monthly-view">

                        <div className="view-metrics">
                          <div className="view-metric-info">
                            <p className="views-number">2400</p>
                            <p className="note">Monthly Site Visit </p>
                          </div>
                          <div className="view-metric-icon">
                            <i class="fa-solid fa-chart-simple"></i>
                          </div>
                        </div>

                        <hr />

                        <div className="last-updated">
                          <p className="note-one">  Last Updated: </p>
                          <p className="time"> 2:15 am </p>
                        </div>
                      </div>

                    </div>

                  </div>


                </div>


                <div className="most-viewed-box">
                  <div className="row">
                    <div className="col-lg-8">

                      <div className="most-viewed-auto">
                        <h4>Most Viewed Cars</h4>

                        <div className="most-viewed-box-wrapper">

                          <div className="most-viewed-auto-box">
                            <div className="box-img">
                              <img src={offer1} className="img-fluid" alt="" />
                            </div>

                            <div className="auto-model">
                              <p className="title">Nissan Ultra</p>
                            </div>

                            <div className="auto-model">
                              <p className="title">2022</p>
                            </div>

                            <div className="auto-model">
                              <p className="title">&#8358; 25,000,000</p>
                            </div>

                            <div className="auto-model">
                              <p className="views-title">100 Views</p>
                            </div>

                          </div>



                          <div className="most-viewed-auto-box">
                            <div className="box-img">
                              <img src={offer2} className="img-fluid" alt="" />
                            </div>

                            <div className="auto-model">
                              <p className="title">Kia 2DX</p>
                            </div>

                            <div className="auto-model">
                              <p className="title">2020</p>
                            </div>

                            <div className="auto-model">
                              <p className="title">&#8358; 5,000,00</p>
                            </div>

                            <div className="auto-model">
                              <p className="views-title">85 Views</p>
                            </div>

                          </div>


                          <div className="most-viewed-auto-box">
                            <div className="box-img">
                              <img src={offer1} className="img-fluid" alt="" />
                            </div>

                            <div className="auto-model">
                              <p className="title">Toyota Camry</p>
                            </div>

                            <div className="auto-model">
                              <p className="title">2015</p>
                            </div>

                            <div className="auto-model">
                              <p className="title">&#8358; 12,000,00</p>
                            </div>

                            <div className="auto-model">
                              <p className="views-title">70 Views</p>
                            </div>

                          </div>


                          <div className="most-viewed-auto-box">
                            <div className="box-img">
                              <img src={offer2} className="img-fluid" alt="" />
                            </div>

                            <div className="auto-model">
                              <p className="title">Kia 2DX</p>
                            </div>

                            <div className="auto-model">
                              <p className="title">2020</p>
                            </div>

                            <div className="auto-model">
                              <p className="title">&#8358; 5,000,00</p>
                            </div>

                            <div className="auto-model">
                              <p className="views-title">85 Views</p>
                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                    <div className="col-lg-4">
                      <div className="mail-messages">
                        <h4>Mail Message</h4>
                        <div className="notifications">
                          <p className="noti">Notifications</p>
                          <p className="notifi-msg">21 Messages sent from contact form</p>
                        </div>
                        <div className="mailbox-logo">
                          <i class="fa-regular fa-envelope fa-flip"></i>
                          <p>Go to your mail and check your messages</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                <div className="home-update-box d-flex">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="latest-update-box">

                        <h4>Latest Updates</h4>

                        <div className="update-msg-box">
                          <p className="date">4 hrs ago </p>
                          <p className="up-msg">
                            you added Nissan (2024) to your car listings
                          </p>
                        </div>

                        <div className="update-msg-box">
                          <p className="date">8 hrs ago </p>
                          <p className="up-msg">
                            you added Toyota Camry (2021) to your car listings
                          </p>
                        </div>


                        <div className="update-msg-box">
                          <p className="date">12 hrs ago </p>
                          <p className="up-msg">
                            you edited Range Rover (2023) in your car listings
                          </p>
                        </div>


                        <div className="update-msg-box">
                          <p className="date">2 days ago </p>
                          <p className="up-msg">
                            you deleted Toyotal Corolla (2004) from your car listings
                          </p>
                        </div>

                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="dealer-information">

                        <div className="dealer-info-one">
                          <img
                            src={agent45}
                            alt=""
                            className="img-fluid"
                          ></img>

                        </div>



                        <div className="dealer-profile-info">
                          <h4 className="title">Dealer Information</h4>
                          <hr></hr>

                          <div className="dealer-details">
                            <p>Name: <span>Pamino Festus</span></p>
                            <p>Email: <span>jeny@gmail.com</span></p>
                            <p>Phone: <span>0023-333-526136</span></p>

                          </div>

                          <div className="dealer-socials">
                            <ul>
                              <li>
                                <a href="https://instagram.com"> </a>
                                <i className="fa-brands fa-instagram"></i>
                              </li>
                              <li>
                                <a href="https://facebook.com"> </a>
                                <i className="fa-brands fa-facebook-f"></i>
                              </li>
                              <li>
                                <a href="https://whatsapp.com"> </a>
                                <i className="fa-brands fa-whatsapp"></i>
                              </li>
                              <li>
                                <a href="https://twitter.com"> </a>
                                <i className="fa-brands fa-twitter"></i>
                              </li>
                            </ul>
                          </div>



                        </div>


                      </div>

                    </div>
                  </div>
                </div>


              </div>
              {/* and end it here */}
           
          </div>
        </>
      )}
    </>
  );
};

export default DashboardHome;
