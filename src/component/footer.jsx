import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import GoToTop from "./go-to-top";
function Footer() {
    return (
        <>

            <div className="footer">
                <div className="footer-content">
                    <div className="f-c">
                        <h1>Do you want to sell a car?</h1>
                        <p>Let's get started!</p>
                    </div>
                    <div className="btn-link">
                        <Link className="btn btn-primary" to="/contact">
                            Sell Your Car
                        </Link>
                    </div>

                </div>

                <div className="f-g"></div>

                <div className="container">
                    <div className="footer-story">
                        <div className="row">
                            <div className="col-md-5">

                            </div>
                            <div className="col-md-7">
                                <p className="footer-text">
                                    Owning your dream car is a thrilling experience, and our auto dealer
                                    website is dedicated to helping you achieve that aspiration. With
                                    our vast inventory, expert guidance, flexible financing options, and
                                    a focus on quality assurance, we are your trusted partner in finding
                                    and acquiring the perfect car. Explore our website, connect with our
                                    team, and embark on an exciting journey to make your dream of owning
                                    your ideal car a reality.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="footer-social-div">
                        <div className="footer-socials">
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
            <GoToTop />
        </>
    );
}

export default Footer;
