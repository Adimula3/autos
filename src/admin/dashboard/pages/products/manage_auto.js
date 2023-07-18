import { useState } from "react";
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
                  <div className="dealer-form">
                    <div className="container-header">
                      <p> Manage Auto Listings </p>
                    </div>
                  </div>
                  <div className="manage-autos-list d-flex">
                    <div className="manage-autos">
                      <div>
                        <img src={offer1} className="manage-autos-img"></img>
                      </div>
                      <h4>Nissan Murano</h4>
                      <p className="price">&#8358; 8,000,000</p>
                      <div className="manage-autos-action d-flex">
                        <p className="btn btn-primary">
                          Edit <i class="fa-regular fa-pen-to-square"></i>
                        </p>
                        <p className="btn btn-danger">
                          Remove <i class="fa-regular fa-trash-can"></i>
                        </p>
                      </div>
                    </div>

                  


                  
                    <div className="manage-autos">
                      <div>
                        <img src={offer1} className="manage-autos-img"></img>
                      </div>
                      <h4>Nissan Murano</h4>
                      <p className="price">&#8358; 8,000,000</p>
                      <div className="manage-autos-action d-flex">
                        <p className="btn btn-primary">
                          Edit <i class="fa-regular fa-pen-to-square"></i>
                        </p>
                        <p className="btn btn-danger">
                          Remove <i class="fa-regular fa-trash-can"></i>
                        </p>
                      </div>
                    </div>
                    <div className="manage-autos">
                      <div>
                        <img src={offer1} className="manage-autos-img"></img>
                      </div>
                      <h4>Nissan Murano</h4>
                      <p className="price">&#8358; 8,000,000</p>
                      <div className="manage-autos-action d-flex">
                        <p className="btn btn-primary">
                          Edit <i class="fa-regular fa-pen-to-square"></i>
                        </p>
                        <p className="btn btn-danger">
                          Remove <i class="fa-regular fa-trash-can"></i>
                        </p>
                      </div>
                    </div>
                    <div className="manage-autos">
                      <div>
                        <img src={offer1} className="manage-autos-img"></img>
                      </div>
                      <h4>Nissan Murano</h4>
                      <p className="price">&#8358; 8,000,000</p>
                      <div className="manage-autos-action d-flex">
                        <p className="btn btn-primary">
                          Edit <i class="fa-regular fa-pen-to-square"></i>
                        </p>
                        <p className="btn btn-danger">
                          Remove <i class="fa-regular fa-trash-can"></i>
                        </p>
                      </div>
                    </div>
                   


                  </div>

                  <div className="manage-autos-list d-flex">
                  <div className="manage-autos2 d-flex">
                    <div>
                      <img src={offer1} className="manage-autos-img"></img>
                    </div>
                    <div className="manage-autos-details">
                    <h4>Nissan Murano</h4>
                      <p className="price">&#8358; 8,000,000</p>
                      <div className="manage-autos-action d-flex">
                        <p className="btn btn-primary">
                          Edit <i class="fa-regular fa-pen-to-square"></i>
                        </p>
                        <p className="btn btn-danger">
                          Remove <i class="fa-regular fa-trash-can"></i>
                        </p>
                      </div>
                    </div>
                  </div>


                
                  <div className="manage-autos2 d-flex">
                    <div>
                      <img src={offer1} className="manage-autos-img"></img>
                    </div>
                    <div className="manage-autos-details">
                    <h4>Nissan Murano</h4>
                      <p className="price">&#8358; 8,000,000</p>
                      <div className="manage-autos-action d-flex">
                        <p className="btn btn-primary">
                          Edit <i class="fa-regular fa-pen-to-square"></i>
                        </p>
                        <p className="btn btn-danger">
                          Remove <i class="fa-regular fa-trash-can"></i>
                        </p>
                      </div>
                    </div>
                  </div>
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
