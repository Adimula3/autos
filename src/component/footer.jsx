import React from 'react';
import '../styles/footer.css';
function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-content d-flex'>
               
                <div className='f-c'>
                    <h1>Do you want to sell a car?</h1>
                    <p>Let's get started!</p>
                </div>
                <button className='btn btn-primary'>Sell Your Car</button>
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
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
        </div>
    );
}

export default Footer;