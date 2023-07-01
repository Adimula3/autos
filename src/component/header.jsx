import React from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { useState, useEffect } from "react";
import logo from "../assets/mofardson-logo.png";

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
        <div className="hedaer-contact d-flex">
          <p className="welcome">Welcome to Autodealer Car Service</p>
          <div className="header-socials d-flex">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-whatsapp"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <Link className="testDrive" to="/contact"><button className="btn btn-primary">Sell Your Car</button></Link> 
        </div>
        <div className="header-info d-flex">
          <h2>AutoDealer</h2>
          <div className="d-flex">
            <div className="h-infos">
              <h4>Office</h4>
              <span>20 Bill Street, Apapa</span>
            </div>
          </div>
          <div className="d-flex">
            <div className="h-infos">
              <h4>Working</h4>
              <span>Service Available 24/7</span>
            </div>
          </div>
          <div className="d-flex">
            <div className="h-infos">
              <h4>Email Us</h4>
              <span>info@example.com</span>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="h-n d-flex">
              <div>
                <Link className="nav-brand" to="/">
                  MOFARDSON-AUTOS
                </Link>
              </div>
              <div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded={isMenuOpen ? "true" : "false"}
                  aria-label="Toggle navigation"
                  onClick={toggleMenu}
                >
                  {isMenuOpen ? (
                    <i class="fa-solid fa-x"></i>
                  ) : (
                    <i className="fa-solid fa-bars "></i>
                  )}
                </button>
                <div
                  className={`collapse navbar-collapse ${
                    isMenuOpen ? "show" : ""
                  }`}
                  id="navbarNav"
                >
                  <ul className="navbar-nav">
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
                      <Link className="nav-link" to='/contact'>
                        CONTACT US
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
