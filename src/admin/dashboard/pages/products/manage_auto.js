import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "./product.css";
import HandleScroll from "../../components/go-top";
import DashSpinner from "../../components/dash-spinner";
import offer1 from "../../../../assets/car1.jpeg";
const ManageProducts = () => {
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <DashSpinner />
      ) : (
        <div>
          <HandleScroll />
          <div id="category-container" className="main-container">
            {/* start your coding from here you can give the div any class name oooo*/}

            <div className="dealer-wrapper">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <div className="manage-auto-header">

                    <div className="container-header">
                      <p> Manage Auto Listings </p>
                      <button className="btn btn-primary">Add New Auto</button>
                    </div>


                    <div className="form-actions">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" type="text" placeholder="Search auto listings..." />
                          </div>
                        </div>
                        <div className="col-md-3">

                        </div>
                        <div className="col-md-3">
                          <div className="sort-autos">
                            <div className="form-group">

                              <Dropdown>
                                <Dropdown.Toggle variant="primary">
                                  10 Autos
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <Dropdown.Item >
                                    20
                                  </Dropdown.Item>
                                  <Dropdown.Item >
                                    30
                                  </Dropdown.Item>
                                  <Dropdown.Item >
                                    40
                                  </Dropdown.Item>
                                  <Dropdown.Item>
                                    All
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>


                  <div className="manage-autos-list">

                    <div className="row">
                      {/* column for manage auto box */}
                      <div className="col-md-3">

                        <div className="manage-autos-box">
                          <div className="manage-autos-img">
                            <img src={offer1} alt="" className="img-fluid" />
                          </div>
                          <div className="auto-body">
                            <p className="auto-name">Nissan Murano</p>
                            <p className="auto-price">&#8358; 8,000,000</p>
                            <p className="auto-views">Number of views: 100 </p>

                            <div className="manage-autos-action">
                              <button className="btn btn-primary">
                                Edit <i class="fa-regular fa-pen-to-square"></i>
                              </button>
                              <button className="btn btn-danger">
                                Delete <i class="fa-regular fa-trash-can"></i>
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>


                      <div className="col-md-3">

                        <div className="manage-autos-box">
                          <div className="manage-autos-img">
                            <img src={offer1} alt="" className="img-fluid" />
                          </div>
                          <div className="auto-body">
                            <p className="auto-name">Nissan Murano</p>
                            <p className="auto-price">&#8358; 8,000,000</p>
                            <p className="auto-views">Number of views: 100 </p>

                            <div className="manage-autos-action">
                              <button className="btn btn-primary">
                                Edit <i class="fa-regular fa-pen-to-square"></i>
                              </button>
                              <button className="btn btn-danger">
                                Delete <i class="fa-regular fa-trash-can"></i>
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>



                      <div className="col-md-3">

                        <div className="manage-autos-box">
                          <div className="manage-autos-img">
                            <img src={offer1} alt="" className="img-fluid" />
                          </div>
                          <div className="auto-body">
                            <p className="auto-name">Nissan Murano</p>
                            <p className="auto-price">&#8358; 8,000,000</p>
                            <p className="auto-views">Number of views: 100 </p>

                            <div className="manage-autos-action">
                              <button className="btn btn-primary">
                                Edit <i class="fa-regular fa-pen-to-square"></i>
                              </button>
                              <button className="btn btn-danger">
                                Delete <i class="fa-regular fa-trash-can"></i>
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>


                      <div className="col-md-3">

                        <div className="manage-autos-box">
                          <div className="manage-autos-img">
                            <img src={offer1} alt="" className="img-fluid" />
                          </div>
                          <div className="auto-body">
                            <p className="auto-name">Nissan Murano</p>
                            <p className="auto-price">&#8358; 8,000,000</p>
                            <p className="auto-views">Number of views: 100 </p>

                            <div className="manage-autos-action">
                              <button className="btn btn-primary">
                                Edit <i class="fa-regular fa-pen-to-square"></i>
                              </button>
                              <button className="btn btn-danger">
                                Delete <i class="fa-regular fa-trash-can"></i>
                              </button>
                            </div>
                          </div>
                        </div>

                      </div>


                    </div>







                    {/* <div className="empty-box">
                      <h3>No Auto Listing Here</h3>
                    </div> */}


                  </div>

                </div>
              </div>
            </div>

            {/* and end it here */}
          </div>
        </div>
      )}
    </>
  );
};

export default ManageProducts;
