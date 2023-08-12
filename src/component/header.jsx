import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { useState, useEffect } from "react";
import logo from "../assets/logo-icon.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    function handleScrolling() {
      if (isMenuOpen) {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
      } else {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
        document.body.style.position = "";
      }
    }

    handleScrolling();

    // Remove event listener on unmount
    return () => {
      document.removeEventListener("scroll", handleScrolling);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Reset menu state when navigating to a new page
    function handleNavigation() {
      setIsMenuOpen(false);
    }

    window.addEventListener("beforeunload", handleNavigation);

    // Remove event listener on unmount
    return () => {
      window.removeEventListener("beforeunload", handleNavigation);
    };
  }, []);

  return (
    <div>
      <div className="header">
        <div className="hedaer-contact">
          <div className="row">
            <div className="col-md-5">
              <p className="welcome">Welcome to MOFARDSON-AUTOS</p>
            </div>

            <div className="col-md-4">
              <div className="header-socials">
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

            <div className="col-md-3">
              <Link className="btn btn-primary" to="/contact">
                Sell Your Car
              </Link>
            </div>
          </div>
          <hr />
        </div>

        <div className="header-info">
          <div className="row">
            <div className="col-md-6">
              <div className="header-logo">
                <Link className="logo-link" to="/">
                  <img src={logo} alt="" className="img-fluid" />
                  <h2>MOFARDSON-AUTOS </h2>
                </Link>
              </div>
            </div>

            <div className="col-md-6">
              <div className="header-details">
                <div className="h-infos">
                  <h4>
                    {" "}
                    <i class="fa-solid fa-building-circle-check"></i> Office
                  </h4>
                  <span>20 Bill Street, Apapa</span>
                </div>

                <div className="h-infos">
                  <h4>
                    {" "}
                    <i class="fa-solid fa-business-time"></i> Working
                  </h4>
                  <span>Service Available 24/7</span>
                </div>

                <div className="h-infos">
                  <h4>
                    {" "}
                    <i class="fa-solid fa-envelope-circle-check"></i> Email Us
                  </h4>
                  <span>info@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link " to="/" aria-current="page">
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/listings">
                    AUTO LISTINGS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
