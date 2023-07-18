import React, { useState } from "react";
import "../styles/home.css";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../component/footer";
import agent1 from "../assets/agent-demo.jpeg";
import Header from "../component/header";
import { autoDatas } from "../data/data";
import { Link } from "react-router-dom";

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
        {autoDatas.slice(0, 3).map((card, index) => (
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
              <Link className="btn btn-md btn-primary" to="/contact">
                TEST DRIVE
              </Link>
            </div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>

      <div className="latest-offers">
        <div className="container">
          <div className="header-section">
            <h1 className="section-title">Latest Offers</h1>
            <Link className="btn btn-md btn-primary" to="/listings">
              View more
            </Link>
          </div>

          <div className="new-offers">
            <div className="row">
              {autoDatas.slice(0, 8).map((offer, index) => (
                <div className="col-md-3" key={index}>
                  <div className="car-card">
                    <div className="card-img-box">
                      <img src={offer.src} alt="cards" className="card-img" />
                    </div>
                    <div className="card-body">
                      <div className="car-details">
                        <h2 className="car-name">{offer.title}</h2>
                        <p className="car-price">&#8358; {offer.price} </p>
                      </div>
                      <div className="card-btn">
                        <Link to={`/productDetails/${offer.id}`} className="btn btn-md btn-primary">
                          View details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="trusted-dealers">
        <div className="container">
          <h1 className="section-title">Trusted Dealers</h1>
          <p className="section-sub-title">
            Find Your Perfect Car with Our Trusted Car Dealers
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="agent-box">
                <div className="row">
                  <div className="col-3">
                    <div className="agent-img-box">
                      <img src={agent1} alt="" className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-9">
                    <div className="agent-details">
                      <h5>Austin Textas</h5>

                      <p>
                        Become a super contributor by opting in to share
                        non-sensitive plugin data and to receive periodic email
                        updates from us. To protect your site, please review the
                        list and make any changes that might be required.
                      </p>
                      <div className="agent-socials">
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

            <div className="col-md-6">
              <div className="agent-box">
                <div className="row">
                  <div className="col-3">
                    <div className="agent-img-box">
                      <img src={agent1} alt="" className="img-fluid" />
                    </div>
                  </div>

                  <div className="col-9">
                    <div className="agent-details">
                      <h5>Austin Textas</h5>

                      <p>
                        Become a super contributor by opting in to share
                        non-sensitive plugin data and to receive periodic email
                        updates from us. To protect your site, please review the
                        list and make any changes that might be required.
                      </p>
                      <div className="agent-socials">
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
        </div>
      </div>
      <div className="testimonials">
        <div className="container">
          <h1 className="section-title">Clients Testimonials </h1>
          <p className="section-sub-title">
            Satisfied Clients Shares thier Testimony
          </p>
          <div className="row justify-content-center">
            <div className="col-md-6">
            <Carousel fade>
            {slides.map((slide, index) => (
              <Carousel.Item key={index}>
                <div className="Tc-content">
                  <h4>{slide.title}</h4>
                  <p> <i class="fa-solid fa-quote-left"></i> {slide.text} <i class="fa-solid fa-quote-right"></i> </p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
