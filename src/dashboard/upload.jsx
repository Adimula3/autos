import React from "react";
import offer5 from "../assets/car5.jpeg";

function Upload(props) {
  return (
    <div>
      <div className="d-flex">
        <div>
          <h5>Car details</h5>
          <div>
            <img className="u-p" src={offer5} alt="" />
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Select Make
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action1">Toyota</Dropdown.Item>
                  <Dropdown.Item href="#action1">Lexus</Dropdown.Item>
                  <Dropdown.Item href="#action1">Honda</Dropdown.Item>
                  <Dropdown.Item href="#action1">Mercedez</Dropdown.Item>
                  <Dropdown.Item href="#action1"> Mazda</Dropdown.Item>
                  <Dropdown.Item href="#action1"> Audi</Dropdown.Item>
                  <Dropdown.Item href="#action1"> DS 7</Dropdown.Item>
                  <Dropdown.Item href="#action1">Nissan</Dropdown.Item>
                  <Dropdown.Item href="#action1"> Renault</Dropdown.Item>
                  <Dropdown.Item href="#action1"> Volkswagen</Dropdown.Item>
                  <Dropdown.Item href="#action1">BMW</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="primary">
                  Select Model
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action1">All</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Select Year
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action1">2015</Dropdown.Item>
                  <Dropdown.Item href="#action1">2016</Dropdown.Item>
                  <Dropdown.Item href="#action1">2017</Dropdown.Item>
                  <Dropdown.Item href="#action1">2020</Dropdown.Item>
                  <Dropdown.Item href="#action1">2023</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Select Condition
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action1">Used</Dropdown.Item>
                  <Dropdown.Item href="#action1">New</Dropdown.Item>
                  <Dropdown.Item href="#action1">Tokunbo</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Select FuelType
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action1"> Petrol</Dropdown.Item>
                  <Dropdown.Item href="#action1">Diesel</Dropdown.Item>
                  <Dropdown.Item href="#action1">
                    {" "}
                    Plugin Electric
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Select Transmission
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#action1"> Manual</Dropdown.Item>
                  <Dropdown.Item href="#action1"> Automatic</Dropdown.Item>
                  <Dropdown.Item href="#action1"> Semi-Automatic</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div>
          <h2>Hello Olayinka Welcome to Autos</h2>
          <div className="">
            <img className="up-1" src={offer5} alt="" />
            <div className="d-flex">
              <img className="up-2" src={offer5} alt="" />
              <img className="up-2" src={offer5} alt="" />
              <img className="up-2" src={offer5} alt="" />
              <img className="up-2" src={offer5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
            <h1>Dealers</h1>
            <div className="d-flex">
                <div>

                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default Upload;
