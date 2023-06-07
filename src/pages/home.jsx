import React, { useState }  from 'react';
import '../styles/home.css';
import Carousel from 'react-bootstrap/Carousel';
import { Dropdown, Row, Col, Container,DropdownButton  } from 'react-bootstrap';
import slide1 from '../assets/slide01.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/auto-slider.jpg';
import offer1 from '../assets/car1.jpeg';
import offer2 from '../assets/car2.jpeg';
import offer3 from '../assets/car3.jpeg';
import offer4 from '../assets/car4.jpeg';
import offer5 from '../assets/car5.jpeg';
import offer6 from '../assets/car6.jpeg';
import offer7 from '../assets/car7.jpeg';
import offer8 from '../assets/car8.jpeg';
import Footer from '../component/footer';
import agent1 from '../assets/agent-demo.jpeg';
import Header from '../component/header';

function Home(props) {

   

    const [images, setImages] = useState([
        {
          src: slide1,
          alt: "Image 1",
          contentStyle: "carousel-content-right",
        },
        {
          src: slide2,
          alt: "Image 2",
          contentStyle: "carousel-content-left",
        },
        {
          src: slide3,
          alt: "Image 3",
          contentStyle: "carousel-content-right",
        },
      ]);
      
      const [slides, setSlides] = useState([
          {
            title: "Joseph Lagbalu",
            text: "Bout avez was main jet. There are suivit bourse depuis.Them longues republique paraissents i people young evidemment reprende tristement the people g",
          },
          {
            title: "Bola Ahmed Tinubu",
            text: "Autodealer is nisi aliquip consequat duis velit esse cillum dolore fugiat nulla pariatur excepteur sint occaecat. Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididuntu labore et dolore magna aliqua enim ad minim veniam.",
          },
          {
            title: "Peter Obi",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit ese cillum dolore fugiat nulla pariatur excepteur sint occaecat cupidatat non proident..",
          }
      ])
      const [offers, setOffers] = useState([
        {
            src: offer1,
            title: "Mazda CX 9",
            price: "1 Million",
        },
        {
            src: offer2,
            title: "Nissan Murano",
            price: "2 Million",
        },
        {
            src: offer3,
            title: "Mazda CX 9 SUV",
            price: "3 Million",
        },
        {
            src: offer4,
            title: "Renault Koleos",
            price: "4 Million",
        },
        {
            src: offer5,
            title: "Volkswagen Atlas 2",
            price: "5 Million",
        },
        {
            src: offer6,
            title: "Audi Q5 3",
            price: "6 Million",
        },
        {
            src: offer7,
            title: "Audi RS 4 Avant",
            price: "7 Million",
        },
        {
            src: offer7,
            title: "DS 7 Crossback",
            price: "8 Million",
        },
      ])

    return (
 <div className='home'>
    <div className='heads'>
        <Header />
    </div>
            <Carousel interval={null} fade className='carousel'>
      {images.map((image, index) => (
        <Carousel.Item key={index} className="carousel-item">
          <img className="img-carousel"src={image.src} alt={image.alt} />
           <div className={image.contentStyle}>
               <h5>DRIVE YOUR DREAM CAR</h5>
               <h2>WANT TO BUY YOUR FAVOURITE CAR</h2>
               <p>YOU'VE COME TO THE RIGHT PLACE TO GET YOUR DREAM CAR</p>
               <span className='carousel-price'>4 MILLION NAIRA</span>
               <span className='carousel-test-drive'>TEST DRIVE</span>
           </div>
        </Carousel.Item>
      ))}
       </Carousel>

    <div className='general-vehicle-information d-flex'>
        <div className='Makers'>
            <p>MAKERS OF VEHICLE</p>
            <div className='All Makes'>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">All Makes</Dropdown.Toggle>  
                    <Dropdown.Menu>
                         <Dropdown.Item href="#action1">Toyota</Dropdown.Item>
                         <Dropdown.Item href="#action1">Lexus</Dropdown.Item>
                         <Dropdown.Item href="#action1">Honda</Dropdown.Item>
                         <Dropdown.Item href="#action1">Mercedez</Dropdown.Item>
                         <Dropdown.Item href="#action1">BMW</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
        <div className='Year'>
            <p>YEAR OF VEHICLE</p>
            <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">Model</Dropdown.Toggle>  
                    <Dropdown.Menu>
                         <Dropdown.Item href="#action1">2015</Dropdown.Item>
                         <Dropdown.Item href="#action1">2016</Dropdown.Item>
                         <Dropdown.Item href="#action1">2017</Dropdown.Item>
                         <Dropdown.Item href="#action1">2020</Dropdown.Item>
                         <Dropdown.Item href="#action1">2023</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
        <div className='Condition'>
            <p>CONDITION</p>
            <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">Vehicle Status</Dropdown.Toggle>  
                    <Dropdown.Menu>
                         <Dropdown.Item href="#action1">Used</Dropdown.Item>
                         <Dropdown.Item href="#action1">New</Dropdown.Item>
                         <Dropdown.Item href="#action1">Tokunbo</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
        <div className='search-button'>
            <button className='btn btn-primary'>FIND IT NOW</button>
        </div>
    </div>
    <div className='Latest-offers'>
       <h1 className='section-title'>Latest Offers</h1>
      
       <Container className='new-offers'>
          <Row>
          {offers.map((offer, index) => (
            <Col sm={3} >
                <div className='card' >
                    <div className='card-images'>
                       <img src={offer.src} alt='cards'  className='card-img'/>
                    </div>
                    <h2 className='card-vehicle-name'>{offer.title}</h2>
                    <p className='card-price'>{offer.price}</p>
                </div>
            </Col>
         
        ))}
          </Row>
       </Container>
    </div>
    <div className="Trusted-dealers">
        <h1>Trusted Dealers</h1>
        <span className='t-sp1'>Find Your Perfect Car with Our Trusted Car Dealers</span>
        <Container></Container>
        <div className='agent-list d-flex'>

        <div className='Agents d-flex'>
            <img src={agent1} alt="" />
            <div className='agent-details'>
                <h5>WpSixer</h5>
                <span>Member since Nov 24, 2017</span>
                <p>Become a super contributor by opting in to share non-sensitive plugin 
                    data and to receive periodic email
                     updates from us. To protect your site, please review the list and 
                     make any changes that might be required.
                </p>
                <div className='agent-socials'>
                   <i class="fa-brands fa-instagram"></i>
                   <i class="fa-brands fa-facebook-f"></i>
                   <i class="fa-brands fa-whatsapp"></i>
                   <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
        <div className='Agents d-flex'>
            <img src={agent1} alt="" />
            <div className='agent-details'>
                <h5>WpSixer</h5>
                <span>Member since Nov 24, 2017</span>
                <p>Become a super contributor by opting in to share non-sensitive plugin 
                    data and to receive periodic email
                     updates from us. To protect your site, please review the list and 
                     make any changes that might be required.
                </p>
                <div className='agent-socials'>
                   <i class="fa-brands fa-instagram"></i>
                   <i class="fa-brands fa-facebook-f"></i>
                   <i class="fa-brands fa-whatsapp"></i>
                   <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
        </div>
        
    </div>
    <div className='Testimonials'>
        <h1 className='section-title'>Clients Testimonials </h1>
        <span>SATISFIED CLIENTS EVERYWHERE</span>
        <Carousel fade>
            {slides.map((slide, index) => (
                <Carousel.Item key={index}>
                    <div className='Tc-content'>
                        <h4>{slide.title}</h4>
                        <p>{slide.text}</p>
                    </div>
                </Carousel.Item>
            ))}
        </Carousel>
    </div>
    <Footer />
 </div>
    );
}

export default Home;