import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';



function Header() {
    return (
      <div>
        <div className='header'>
            <div className='hedaer-contact d-flex'>
                <p className='welcome'>Welcome to Autodealer Car Service</p>
                <div className='header-socials d-flex'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
                <button className='btn btn-primary'>Sell Your Car</button>
            </div>
            <div className='header-info d-flex'>
                <h2>AutoDealer</h2>
                <div className='d-flex'>
                  <div className='h-infos'>
                    <h4>Office</h4>
                    <span>20 Bill Street, Apapa</span>
                  </div>
                </div>
                <div className='d-flex'>
                  <div className='h-infos'>
                    <h4>Working</h4>
                    <span>Service Available 24/7</span>
                  </div>
                </div>
                <div className='d-flex'>
                  <div className='h-infos'>
                    <h4>Email Us</h4>
                    <span>info@example.com</span>
                  </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg">
                <div className='container-fluid'>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                   </button>
                   <div class="collapse navbar-collapse" id="navbarNav">
                       <ul class="navbar-nav">
                          <li class="nav-item">
                             <Link class="nav-link " to="/" aria-current="page">HOME</Link>
                          </li>
                          <li class="nav-item">
                             <Link class="nav-link" to="/listings">AUTO LISTINGS</Link>
                          </li>
                          <li class="nav-item">
                             <a class="nav-link" href="#">CONTACT US</a>
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