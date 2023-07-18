import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import "../styles/autoListings.css";
import Header from "../component/header";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import { autoDatas } from "../data/data";

function AutoListings() {
  const [displayCount, setDisplayCount] = useState(4);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedMake, setSelectedMake] = useState("All Makes");
  const [selectedFuelType, setSelectedFuelType] = useState("All Fuel Types");
  const [selectedTransmission, setSelectedTransmission] =
    useState("All Transmissions");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions");

  // eslint-disable-next-line
  const handleDispalyCountChange = (e) => {
    setDisplayCount(Number(e.target.value));
  };

  const handleYearSelection = (year) => {
    setSelectedYear(year);
  };
  const handleMakeSelection = (make) => {
    setSelectedMake(make);
  };
  const handleFuelTypeSelection = (fuelType) => {
    setSelectedFuelType(fuelType);
  };
  const handleTransmissionSelection = (transmission) => {
    setSelectedTransmission(transmission);
  };
  const handleConditionSelection = (condition) => {
    setSelectedCondition(condition);
  };

  const filteredListings =
    selectedYear === "All"
      ? autoDatas
      : autoDatas.filter((listing) => listing.year === selectedYear);

  const makeFilteredListings =
    selectedMake === "All Makes"
      ? filteredListings
      : filteredListings.filter((listing) => listing.autoMake === selectedMake);

  const conditionFilteredListings =
    selectedCondition === "All Conditions"
      ? makeFilteredListings
      : makeFilteredListings.filter(
        (listing) => listing.condition === selectedCondition
      );

  const transmissionFilteredListings =
    selectedTransmission === "All Transmissions"
      ? conditionFilteredListings
      : conditionFilteredListings.filter(
        (listing) => listing.transmission === selectedTransmission
      );

  const fuelTypeFilteredListings =
    selectedFuelType === "All Fuel Types"
      ? transmissionFilteredListings
      : transmissionFilteredListings.filter(
        (listing) => listing.fuel === selectedFuelType
      );

  const displayedListings = fuelTypeFilteredListings.slice(0, displayCount);

  const [isAutoRangeSortVisible, setAutoRangeSortVisible] = useState(true);
  const handleIconClick = () => {
    setAutoRangeSortVisible(!isAutoRangeSortVisible);
  };

  return (
    <>
      <div className="heads">
        <Header />
      </div>

      <div className="auto-listings">
        <div className="container">
          <div className="auto-listings-header">
            <h2 className="auto-title">Auto Listings</h2>
            <p className="auto-link">Home / Auto Listings</p>
          </div>

          <div className="auto-listings-section">
            <div className="row">
              <div className="col-md-12">

                <div className="autos-sort">
                  <div className="show-on-page d-flex">
                    <p>SHOW ON PAGE</p>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary">
                        {displayCount} Autos
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => setDisplayCount(5)}>
                          5
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setDisplayCount(6)}>
                          6
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setDisplayCount(7)}>
                          7
                        </Dropdown.Item> 
                        <Dropdown.Item
                          onClick={() => setDisplayCount(autoDatas.length)}
                        >
                          All
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="sort-by d-flex">
                    <p>SORT BY</p>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary">Year</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => handleYearSelection("2010")}
                        >
                          2010
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleYearSelection("2020")}
                        >
                          2020
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleYearSelection("2014")}
                        >
                          2014
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleYearSelection("All")}
                        >
                          All
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="sort-by d-flex">
                    <p >By Make</p>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary">
                        {selectedMake}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() => handleMakeSelection("All Makes")}
                        >
                          All Makes
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleMakeSelection("Volkswagen")}
                        >
                          Volkswagen
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleMakeSelection("Nissan")}
                        >
                          Nissan
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleMakeSelection("Renault")}
                        >
                          Renault
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleMakeSelection("Mazda")}
                        >
                          Mazda
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleMakeSelection("Audi")}
                        >
                          Audi
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleMakeSelection("DS 7")}
                        >
                          DS 7
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="sort-by d-flex">
                    <p>TRANSMISSION TYPE</p>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary">
                        {selectedTransmission}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() =>
                            handleTransmissionSelection("All Transmissions")
                          }
                        >
                          All Transmission
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleTransmissionSelection("Manual")}
                        >
                          Manual
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            handleTransmissionSelection("Automatic")
                          }
                        >
                          Automatic
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            handleTransmissionSelection("Semi-Automatic")
                          }
                        >
                          Semi-Automatic
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="sort-by d-flex">
                    <p>FUEL TYPE</p>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary">
                        {selectedFuelType}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() =>
                            handleFuelTypeSelection("All Fuel Types")
                          }
                        >
                          All FuelType
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleFuelTypeSelection("petrol")}
                        >
                          Petrol
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleFuelTypeSelection("diesel")}
                        >
                          Diesel
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            handleFuelTypeSelection("plugin electric")
                          }
                        >
                          Plugin Electric
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div className="sort-by d-flex">
                    <p>CONDITION</p>
                    <Dropdown>
                      <Dropdown.Toggle variant="primary">
                        {selectedCondition}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() =>
                            handleConditionSelection("All Conditions")
                          }
                        >
                          All Condition
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleConditionSelection("Used")}
                        >
                          Used
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleConditionSelection("New")}
                        >
                          New
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleConditionSelection("Tokunbo")}
                        >
                          Tokunbo
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>

                  <div>
                    <i class="fa-solid fa-list" onClick={handleIconClick}></i>
                  </div>

                </div>

                <hr />
              </div>
            </div>

            <div className="auto-wrapper">

              <div className="row">
                {displayedListings.map((listing, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="auto-car-box">
                      <div className="auto-car-img-box">
                        <img
                          src={listing.src}
                          alt=""
                          className="auto-car-image"
                        />
                      </div>

                      <div className="auto-car-details"> 
                        <Link className="link" to={`/productDetails/${listing.id}`}>
                          <h3 className="auto-name">{listing.title}</h3>
                        </Link>

                        <p className="auto-about">{listing.about.length <= 50 ?
                          (`${listing.about}`) : (`${listing.about.slice(0, 80)}...`)}
                        </p>

                        <p className="auto-price"> &#8358; {listing.price}</p>


                        <div className="auto-car-info">

                          <div className="aut-info-one">
                            <p>
                              AUTO MAKE : <span>{listing.autoMake}</span>
                            </p>
                            <p>
                              YEAR : <span> {listing.year}</span>
                            </p>
                            <p>
                              FUEL : <span>{listing.fuel}</span>
                            </p>
                            <p>
                              TRANSMISSION :<span>{listing.transmission}</span>
                            </p>
                          </div>

                          <div className="aut-info-two">
                            <p>
                              AUTO VERSION : <span>{listing.autoVersion}</span>
                            </p>
                            <p>
                              MILEAGE : <span> {listing.mileage}</span>
                            </p>
                            <p>
                              HORSEPOWER : <span>{listing.horsePower}</span>
                            </p>
                            <p>
                              DRIVE : <span>{listing.Drive}</span>
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default AutoListings;
