import React from 'react';
import '../styles/footer.css';
import { Link } from "react-router-dom";
function Footer() {
    return (
        <div className='footer'>
            <div className='footer-content d-flex'>
                <div className='f-c'>
                    <h1>Do you want to sell a car?</h1>
                    <p>Let's get started!</p>
                </div>
                <Link className="testDrive" to="/contact"><button className='btn btn-primary'>Sell Your Car</button></Link>
            </div>
            <div className='f-g'></div>
            <div className='footer-nav d-flex'>
          
            </div>
            <p className='footer-story'>Owning your dream car is a thrilling experience, and our auto dealer website is 
                dedicated to helping you achieve that aspiration. With our vast inventory,
                 expert guidance, flexible financing options, and a focus on quality assurance,
                  we are your trusted partner in finding and acquiring the perfect car. 
                  Explore our website, connect with our team, and embark on an exciting journey
                   to make your dream of owning your ideal car a reality.
            </p>
            <div className='hedaer-contact d-flex'>
                <div className='footer-socials d-flex'>
                   <i className="fa-brands fa-instagram"></i>
                   <i className="fa-brands fa-facebook-f"></i>
                   <i className="fa-brands fa-whatsapp"></i>
                   <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;