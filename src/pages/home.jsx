import React, { useState } from "react";
import "../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import Footer from "../component/footer";
import agent1 from "../assets/agent-demo.jpeg";
import Header from "../component/header";
import { autoDatas } from "../data/data";

function Home() {
  const slides = [
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
    },
  ];

  const [activeId, setActiveId] = useState(1);

  const onClick = (id) => setActiveId(id);

  return (
    <div className="home">
      <div className="heads">
        <Header />
      </div>

      <div className="containers">
        {autoDatas.map((card, index) => (
          <div
            key={card.id}
            className={`panel ${activeId === card.id ? "active" : ""}`}
            onClick={() => onClick(card.id)}
            style={{ backgroundImage: `url(${card.url})` }}
          >
            <div className={card.heroStyle}>
              <h5>DRIVE YOUR DREAM CAR</h5>
              <h2>WANT TO BUY YOUR FAVOURITE CAR</h2>
              <p>YOU'VE COME TO THE RIGHT PLACE TO GET YOUR DREAM CAR</p>
              <span className="price">4 MILLION NAIRA</span>
              <span className="test-drive">TEST DRIVE</span>
            </div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      <div className="general-vehicle-information d-flex">
        <div className="Makers">
          <p>MAKERS OF VEHICLE</p>
          <div className="All Makes">
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                All Makes
              </Dropdown.Toggle>
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
        <div className="Year">
          <p>YEAR OF VEHICLE</p>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Model
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action1">2015</Dropdown.Item>
              <Dropdown.Item href="#action1">2016</Dropdown.Item>
              <Dropdown.Item href="#action1">2017</Dropdown.Item>
              <Dropdown.Item href="#action1">2020</Dropdown.Item>
              <Dropdown.Item href="#action1">2023</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="Condition">
          <p>CONDITION</p>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Vehicle Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#action1">Used</Dropdown.Item>
              <Dropdown.Item href="#action1">New</Dropdown.Item>
              <Dropdown.Item href="#action1">Tokunbo</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="search-button">
          <button className="btn btn-primary">FIND IT NOW</button>
        </div>
      </div>
      <div className="Latest-offers">
        <h1 className="section-title">Latest Offers</h1>

        <Container className="new-offers">
          <Row>
            {autoDatas.slice(0, 8).map((offer, index) => (
              <Col key={index} sm={3}>
                <div className="card">
                  <div className="card-images">
                    <img src={offer.src} alt="cards" className="card-img" />
                  </div>
                  <h2 className="card-vehicle-name">{offer.title}</h2>
                  <p className="card-price">{offer.price}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="Trusted-dealers">
        <h1>Trusted Dealers</h1>
        <span className="t-sp1">
          Find Your Perfect Car with Our Trusted Car Dealers
        </span>
        <Container></Container>
        <div className="agent-list d-flex">
          <div className="Agents d-flex">
            <img src={agent1} alt="" />
            <div className="agent-details">
              <h5>WpSixer</h5>
              <span>Member since Nov 24, 2017</span>
              <p>
                Become a super contributor by opting in to share non-sensitive
                plugin data and to receive periodic email updates from us. To
                protect your site, please review the list and make any changes
                that might be required.
              </p>
              <div className="agent-socials">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="Agents d-flex">
            <img src={agent1} alt="" />
            <div className="agent-details">
              <h5>WpSixer</h5>
              <span>Member since Nov 24, 2017</span>
              <p>
                Become a super contributor by opting in to share non-sensitive
                plugin data and to receive periodic email updates from us. To
                protect your site, please review the list and make any changes
                that might be required.
              </p>
              <div className="agent-socials">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Testimonials">
        <h1 className="section-title">Clients Testimonials </h1>
        <span>SATISFIED CLIENTS EVERYWHERE</span>
        <Carousel fade>
          {slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <div className="Tc-content">
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
