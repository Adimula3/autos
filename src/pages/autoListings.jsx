import React, { useState }  from 'react';
import offer1 from '../assets/car1.jpeg';
import { Dropdown, Row, Col, Container,DropdownButton  } from 'react-bootstrap';
import '../styles/autoListings.css';
import offer11 from '../assets/car1.jpeg';
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



function AutoListings(props) {


    const [listings, setListings] = useState([
        {
          src: offer1,
          alt: "Image 1",
          title: "Volkswagen Atlas 2",
          about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
          autoMake: "Volkswagen",
          year: "2014",
          fuel: "petrol",
          transmission: "manual",
          autoVersion: "1.3",
          mileage: "4980",
          horsePower: "300HP",
          Drive: "4x4",
          price: "20 Million",
         
        },
        {
            src: offer2,
            alt: "Image 1",
            title: "Nissan Murano",
            about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
            autoMake: "Volkswagen",
            year: "2014",
            fuel: "petrol",
            transmission: "manual",
            autoVersion: "1.3",
            mileage: "4980",
            horsePower: "300HP",
            Drive: "4x4",
            price: "8 Million",
        },
        {
            src: offer3,
            alt: "Image 1",
            title: "Mazda CX 9 SUV",
            about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
            autoMake: "Volkswagen",
            year: "2014",
            fuel: "petrol",
            transmission: "manual",
            autoVersion: "1.3",
            mileage: "4980",
            horsePower: "300HP",
            Drive: "4x4",
            price: "2 Million",
        },
        {
            src: offer4,
            alt: "Image 1",
            title: "Renault Koleos",
            about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
            autoMake: "Volkswagen",
            year: "2014",
            fuel: "petrol",
            transmission: "manual",
            autoVersion: "1.3",
            mileage: "4980",
            horsePower: "300HP",
            Drive: "4x4",
            price: "15 Million",
        },
        {
            src: offer5,
            alt: "Image 1",
            title: "Volkswagen Atlas 2",
            about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
            autoMake: "Volkswagen",
            year: "2014",
            fuel: "petrol",
            transmission: "manual",
            autoVersion: "1.3",
            mileage: "4980",
            horsePower: "300HP",
            Drive: "4x4",
            price: "22 Million",
        },
        {
            src: offer6,
            alt: "Image 1",
            title: "Audi Q5 3",
            about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
            autoMake: "Volkswagen",
            year: "2014",
            fuel: "petrol",
            transmission: "manual",
            autoVersion: "1.3",
            mileage: "4980",
            horsePower: "300HP",
            Drive: "4x4",
            price: "6 Million",
        },
        {
            src: offer7,
            alt: "Image 1",
            title: "Audi RS 4 Avant",
            about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
            autoMake: "Volkswagen",
            year: "2014",
            fuel: "petrol",
            transmission: "manual",
            autoVersion: "1.3",
            mileage: "4980",
            horsePower: "300HP",
            Drive: "4x4",
            price: "18 Million",
        },
        {
            src: offer7,
            alt: "Image 1",
            title: "DS 7 Crossback",
            about: "Duis aute reprehender voluptate velit esacium fugiat nula pariatur excepteurd magna aliqua uet enim ad minim veniam quis nostrud ...",
            autoMake: "Volkswagen",
            year: "2014",
            fuel: "petrol",
            transmission: "manual",
            autoVersion: "1.3",
            mileage: "4980",
            horsePower: "300HP",
            Drive: "4x4",
            price: "10 Million",
        },
        
      ]);


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
                            <Dropdown.Toggle variant="primary" >10 Autos</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item href="#action1">10</Dropdown.Item>
                                 <Dropdown.Item href="#action1">20</Dropdown.Item>
                                 <Dropdown.Item href="#action1">50</Dropdown.Item>
                             <Dropdown.Item href="#action1">All</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                    </div>
                    <div className='sort-by d-flex'>
                        <p>SORT BY</p>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" >Year</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item href="#action1">2010</Dropdown.Item>
                                 <Dropdown.Item href="#action1">2020</Dropdown.Item>
                                 <Dropdown.Item href="#action1">2009</Dropdown.Item>
                             <Dropdown.Item href="#action1">All</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                    </div>
                </div>
                {listings.map((listing, index) => (
                  <div className='auto-sepcifications d-flex' >
                    <div className='auto-spec-img-box'>
                        <img src={listing.src}  alt=''  className='auto-spec-image'/>
                    </div>
                    
                    <div className='auto-spec-details'>
                        <Link to="/productdetails"><h3>{listing.title}</h3></Link>
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
                            <Dropdown.Toggle variant="primary" >All Makes</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item href="#action1">Toyota</Dropdown.Item>
                                 <Dropdown.Item href="#action1">Lexus</Dropdown.Item>
                                 <Dropdown.Item href="#action1">Honda</Dropdown.Item>
                             <Dropdown.Item href="#action1">Mercedez</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                       <Dropdown>
                            <Dropdown.Toggle variant="primary" >All Models</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item href="#action1">10</Dropdown.Item>
                                 <Dropdown.Item href="#action1">20</Dropdown.Item>
                                 <Dropdown.Item href="#action1">50</Dropdown.Item>
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
                            <Dropdown.Toggle variant="primary" >All Fuel Types</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item href="#action1">Petrol</Dropdown.Item>
                                 <Dropdown.Item href="#action1">Diesel</Dropdown.Item>
                                 <Dropdown.Item href="#action1">Plugin Electric</Dropdown.Item>
                             <Dropdown.Item href="#action1">All</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                       <h5>TRANSMISSION TYPE</h5>
                       <Dropdown>
                            <Dropdown.Toggle variant="primary" >All Transmission</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item href="#action1">Manual</Dropdown.Item>
                                 <Dropdown.Item href="#action1">Automatic</Dropdown.Item>
                                 <Dropdown.Item href="#action1">Semi-Automatic</Dropdown.Item>
                             <Dropdown.Item href="#action1">All</Dropdown.Item>
                           </Dropdown.Menu>
                       </Dropdown>
                       <h5>CONDITION</h5>
                       <Dropdown>
                            <Dropdown.Toggle variant="primary" >All Conditions</Dropdown.Toggle>  
                              <Dropdown.Menu>
                                 <Dropdown.Item href="#action1">Used</Dropdown.Item>
                                 <Dropdown.Item href="#action1">New</Dropdown.Item>
                                 <Dropdown.Item href="#action1">Tokunbo</Dropdown.Item>
                                 <Dropdown.Item href="#action1">All</Dropdown.Item>
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