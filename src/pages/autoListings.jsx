import React, { useState }  from 'react';
import { Dropdown, Row, Col, Container,DropdownButton  } from 'react-bootstrap';
import '../styles/autoListings.css';
import offer1 from '../assets/car1.jpeg';
import offer2 from '../assets/car2.jpeg';
import offer3 from '../assets/car3.jpeg';
import offer4 from '../assets/car4.jpeg';
import offer5 from '../assets/car5.jpeg';
import offer6 from '../assets/car6.jpeg';
import offer7 from '../assets/car7.jpeg';
import Header from '../component/header';
import ProductDetails from './productDetails';
import { Link } from 'react-router-dom';
import Footer from '../component/footer';
import { autoDatas } from '../data/data';




function AutoListings(props) {
  
  
  
  const [displayCount,  setDisplayCount] = useState(3);
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedMake, setSelectedMake] = useState("All Makes");
  const [selectedFuelType, setSelectedFuelType] = useState("All Fuel Types");
  const [selectedTransmission, setSelectedTransmission] = useState("All Transmissions");
  const [selectedCondition, setSelectedCondition] = useState("All Conditions");


    const handleDispalyCountChange = (e) => {
      setDisplayCount(Number(e.target.value));
    }

    const handleYearSelection = (year) => {
      setSelectedYear(year);
    }
    const handleMakeSelection = (make) => {
      setSelectedMake(make);
    }
    const handleFuelTypeSelection = (fuelType) => {
      setSelectedFuelType(fuelType);
    }
    const handleTransmissionSelection = (transmission) => {
      setSelectedTransmission(transmission);
    }
    const handleConditionSelection = (condition) => {
      setSelectedCondition(condition);
    }



  const [listings, setListings] = useState(autoDatas);


      const filteredListings = selectedYear === "All" ? listings : listings.filter((listing) => listing.year === selectedYear);

      const makeFilteredListings = selectedMake === "All Makes" ? filteredListings : filteredListings.filter((listing) => listing.autoMake === selectedMake);

      const conditionFilteredListings = selectedCondition === "All Conditions" ? makeFilteredListings : makeFilteredListings.filter((listing) => listing.condition === selectedCondition);
      
      const transmissionFilteredListings = selectedTransmission === "All Transmissions" ? conditionFilteredListings : conditionFilteredListings.filter((listing) => listing.transmission === selectedTransmission);

      const fuelTypeFilteredListings = selectedFuelType === "All Fuel Types" ? transmissionFilteredListings : transmissionFilteredListings.filter((listing) => listing.fuel === selectedFuelType);
    
      const displayedListings = fuelTypeFilteredListings.slice(0, displayCount);



    return (
      <div>
         <div className='heads'>
            <Header />
         </div>
        <div className='auto-listings'>
            <h2 className='aut-title'>Auto Listings</h2> 
            <p className='aut-link'>Home / Auto Listings</p>
            
          <div className='auto-listings-details d-flex'>
            <div className='autos'>
                <div className='autos-sort d-flex'>
                    <div className='show-on-page d-flex'>
                        <p>SHOW ON PAGE</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" >{displayCount} Autos</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item onClick={() => setDisplayCount(5)}>5</Dropdown.Item>
                                 <Dropdown.Item onClick={() => setDisplayCount(6)}>6</Dropdown.Item>
                                 <Dropdown.Item onClick={() => setDisplayCount(7)}>7</Dropdown.Item>
                             <Dropdown.Item onClick={() => setDisplayCount(listings.length)}>All</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                    </div>
                    <div className='sort-by d-flex'>
                        <p>SORT BY</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" >Year</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item onClick={() => handleYearSelection("2010")}>2010</Dropdown.Item>
                                 <Dropdown.Item  onClick={() => handleYearSelection("2020")}>2020</Dropdown.Item>
                                 <Dropdown.Item  onClick={() => handleYearSelection("2014")}>2014</Dropdown.Item>
                             <Dropdown.Item  onClick={() => handleYearSelection("All")}>All</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                    </div>
                </div>
                {displayedListings.map((listing, index)  => (
                  <div className='auto-sepcifications d-flex' >
                    <div className='auto-spec-img-box'>
                        <img src={listing.src}  alt=''  className='auto-spec-image'/>
                    </div>
                    
                    <div className='auto-spec-details'>
                        <Link to={`/productDetails/${listing.id}`}><h3>{listing.title}</h3></Link>
                        <p className='aut-sp-p'>{listing.about}</p>
                        <div className='aut-sp-d d-flex'>
                            <div className='aut-sp-1'>
                                <p>AUTO MAKE : <span>{listing.autoMake}</span></p>
                                <p>YEAR : <span> {listing.year}</span></p>
                                <p>FUEL : <span>{listing.fuel}</span></p>
                                <p>TRANSMISSION :<span>{listing.transmission}</span></p>
                            </div>
                            <div className='aut-sp-2'>
                                 <p>AUTO VERSION : <span>{listing.autoVersion}</span></p>
                                 <p>MILEAGE : <span> {listing.mileage}</span></p>
                                 <p>HORSEPOWER :<span>{listing.horsePower}</span></p>
                                 <p>DRIVE :<span>{listing.Drive}</span></p>
                            </div>
                            <div className='aut-sp-3'>
                                <h3>PRICE:</h3>
                                <p>{listing.price}</p>
                            </div>
                        </div>
                        
                    </div>
                    
                  </div>
                ))}
                
            
             </div>
             <div className='auto-range-sort'>
                         <h4>BY MAKE</h4>
                         <Dropdown>
                            <Dropdown.Toggle variant="primary" >{selectedMake}</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item onClick={() => handleMakeSelection("All Makes")}>All Makes</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleMakeSelection("Volkswagen")}>Volkswagen</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleMakeSelection("Nissan")}>Nissan</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleMakeSelection("Renault")}>Renault</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleMakeSelection("Mazda")}>Mazda</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleMakeSelection("Audi")}>Audi</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleMakeSelection("DS 7")} >DS 7</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                       <Dropdown>
                            <Dropdown.Toggle variant="primary" >All Models</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item href="#action1">All</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                         <div className='year-range'>
                            <label for="customRange3" className="form-label">YEAR RANGE</label>
                            <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
                         </div>
                         <div className='price-range'>
                            <label for="customRange3" class="form-label">PRICE RANGE</label>
                            <input type="range" class="form-range" min="0" max="5" step="0.5" id="customRange3"></input>
                         </div>
                         <h5>FUEL TYPE</h5>
                         <Dropdown>
                            <Dropdown.Toggle variant="primary" >{selectedFuelType}</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item onClick={() => handleFuelTypeSelection("All Fuel Types")}>All FuelType</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleFuelTypeSelection("petrol")}>Petrol</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleFuelTypeSelection("diesel")}>Diesel</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleFuelTypeSelection("plugin electric")}>Plugin Electric</Dropdown.Item>
                                 
                           </Dropdown.Menu>
                       </Dropdown>
                       <h5>TRANSMISSION TYPE</h5>
                       <Dropdown>
                            <Dropdown.Toggle variant="primary" >{selectedTransmission}</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item onClick={() => handleTransmissionSelection("All Transmissions")}>All Transmission</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleTransmissionSelection("Manual")}>Manual</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleTransmissionSelection("Automatic")}>Automatic</Dropdown.Item>
                                 <Dropdown.Item onClick={() => handleTransmissionSelection("Semi-Automatic")}>Semi-Automatic</Dropdown.Item>
                                 
                           </Dropdown.Menu>
                       </Dropdown>
                       <h5>CONDITION</h5>
                       <Dropdown>
                            <Dropdown.Toggle variant="primary" >{selectedCondition}</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item  onClick={() => handleConditionSelection("All Conditions")}>All Condition</Dropdown.Item>
                                 <Dropdown.Item  onClick={() => handleConditionSelection("Used")}>Used</Dropdown.Item>
                                 <Dropdown.Item  onClick={() => handleConditionSelection("New")}>New</Dropdown.Item>
                                 <Dropdown.Item  onClick={() => handleConditionSelection("Tokunbo")}>Tokunbo</Dropdown.Item>
                               
                           </Dropdown.Menu>
                       </Dropdown>
                    </div>
          </div>
           
        </div>

        <Footer />
      </div>
       
    );
}

export default AutoListings;