import React, { useState } from "react";
import HandleScroll from "../../components/go-top";
import "../home/index.css";
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import DashSpinner from "../../components/dash-spinner";
import agent45 from "../../assets/images/agent-demo.jpeg";
import offer1 from "../../../../assets/car1.jpeg";
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
                <h1>Auto Listing Dashboard Home</h1>
                <div>
                  <div className="d-flex">
                    <div className="box1"></div>
                    <div className="box2"></div>
                  </div>
                  <div className="activities d-flex">
                    <div className="daily-views">
                      <h4>Daily site visitors</h4>
                      <hr className="dv-hr"></hr>
                      <h3>Daily Visit</h3>
                      <h1>100</h1>
                    </div>
                    <div className="daily-admin-actvity">
                      <div className="dac-box d-flex">
                        <a href="#">Recently Added</a>
                        <a href="#">Recently Deleted</a>
                        <a href="#">Recently Viewed</a>
                        <a href="#">Most Viewed</a>
                      </div>
                      <hr className="dac-hr"></hr>
                      <table className="table table-striped">
                        <thead>
                          <th class="table-header">MAKE</th>
                          <th class="table-header">MODEL</th>
                          <th class="table-header">YEAR</th>
                          <th class="table-header">MORE DETAILS</th>
                        </thead>

                        <tbody className="tbody">
                          <tr>
                            <th className="table-body-header" scope="row">
                              <img src={offer1} className="agent45" alt="" />
                              <span>Nissan</span>
                            </th>
                            <td className="table-cell">Nissan mURANO</td>
                            <td className="table-cell">2020</td>
                            <td className="table-cell"><button classname="btn btn-primary">View More</button></td>
                          </tr>
                          <tr>
                            <th className="table-body-header"scope="row">
                              <img src={offer1} className="agent45" alt="" />
                              <span>Mazda</span>
                            </th>
                            <td className="table-cell">Mazda RX</td>
                            <td className="table-cell">2015</td>
                            <td className="table-cell"><button classname="btn btn-primary">View More</button></td>
                          </tr>
                          <tr>
                            <th className="table-body-header"scope="row">
                              <img src={offer1} className="agent45" alt="" />
                              <span>BMW</span>
                            </th>
                            <td className="table-cell">BMW MDX</td>
                            <td className="table-cell">2020</td>
                            <td className="table-cell"><button classname="btn btn-primary">View More</button></td>
                          </tr>
                          <tr>
                            <th className="table-body-header"scope="row">
                              <img src={offer1} className="agent45" alt="" />
                              <span>Toyota</span>
                            </th>
                            <td className="table-cell">CAMRY</td>
                            <td className="table-cell">2019</td>
                            <td className="table-cell"><button classname="btn btn-primary">View More</button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="more-information d-flex">
                    <div className="more-views">
                      <h4>More information</h4>
                      <hr className="mv-hr"></hr>
                      <div className="more-views-box">
                        <div className="mv-box1">
                          <h3>Weekly Visit</h3>
                          <h1>100</h1>
                        </div>
                        <div className="mv-box2">
                          <h3>Monthly Visit</h3>
                          <h1>100</h1>
                        </div>
                        <div className="mv-box3">
                          <h3>Total Visit</h3>
                          <h1>100</h1>
                        </div>
                      </div>
                    </div>
                    <div className="dash-agents">
                      <h4>Dealers</h4>
                      <hr></hr>
                      <table className="table table-striped">
                        <thead className="thead">
                          <th class="table-header">DEALERS</th>
                          <th class="table-header">EMAIL</th>
                          <th class="table-header">CONATCT NO</th>
                          <th class="table-header">MORE DETAILS</th>
                        </thead>
                        <tbody>
                          <tr>
                            <th className="table-body-header" scope="row">
                              <img src={agent45} className="agent45" alt="" />
                              <span>Pamino</span>
                            </th>
                            <td  className="table-cell">alma.lawson@example.com</td>
                            <td  className="table-cell">(307) 555-0133</td>
                            <td  className="table-cell">View Profile</td>
                          </tr>
                          <tr>
                            <th scope="row" className="table-body-header">
                              <img src={agent45} className="agent45" alt="" />
                              <span>Joseph</span>
                            </th>
                            <td  className="table-cell">kenzi.lawson@example.com</td>
                            <td  className="table-cell">(319) 555-0115</td>
                            <td  className="table-cell">View Profile</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
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
