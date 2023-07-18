import React from "react";
import Header from "../component/header";
import "../styles/contact.css";
import Footer from '../component/footer';

function Contact(props) {
  return (
    <>
      <Header />

      <div className="contact-section">
        <div className="container">

          <div className="contact-header">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-link">Home / Contact Us</p>
          </div>


          <div className="contact-wrapper">
            <div className="row">
              <div className="col-md-6">

                <div className="contact-form">

                  <form autoComplete="off">
                    <h3>Send us a message</h3>
                    <p>We're open for any car sale or just to have a chat</p>

                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="fname"
                        id="fname"
                        placeholder="First name"
                      />
                    </div>


                    <div className="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="message"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>


                    <div className="form-group">
                      <textarea
                        class="form-control f-msg"
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        placeholder="Write your message"
                      ></textarea>
                    </div>


                    <div className="form-group">
                      <button
                        type="submit"
                        value="Send Message"
                        class="btn btn-primary">
                        Send Message
                      </button>

                    </div>


                  </form>

                </div>
              </div>


              <div className="col-md-6">
                <div className="contact-info">

                  <div className="contact-details">
                    <h5>ADDRESS:</h5>
                    <span>198 West 21th Street, <br /> Suite 721  <br /> New York NY 10016</span>
                  </div>
                  <div className="contact-details">
                    <h5>EMAIL:</h5>
                    <span>info@yoursite.com</span>
                  </div>

                  <div className="contact-details">
                    <h5>PHONE:</h5>
                    <span>+1-(235)-480-5980</span>
                  </div>

                </div>


                <div className="contact-follow">
                  <p>Follow us here</p>
                  <div className="contact-socials">
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


      </div >
      <Footer />
    </>
  );
}

export default Contact;
