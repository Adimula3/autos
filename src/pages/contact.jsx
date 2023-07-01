import React from "react";
import Header from "../component/header";
import "../styles/contact.css";
import Footer from '../component/footer';
import mailLogo from '../assets/Emails-cuate.png';
function Contact(props) {
  return (
    <>
      <div className="heads">
        <Header />
      </div>
      <div className="contact">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-link">Home / Contact Us</p>
        <div className="contacts d-flex">
          <div className="c-details">
            <h3>Contact</h3>
            <span>We're open for any car sale or just to have a chat</span>
            <div className="c-details-2 d-flex">
              <div className="c-details-content">
                <h5>ADDRESS:</h5>
                <span>198 West 21th Street, Suite 721 New York NY 10016</span>
              </div>
              <div className="c-details-content">
                <h5>EMAIL:</h5>
                <span>info@yoursite.com</span>
              </div>
              <div className="c-details-content">
                <h5>PHONE:</h5>
                <span>+ 1235 2355 98</span>
              </div>
            </div>
            <form className="form border-right pr-5 mb-5">
              <div className="row">
                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    id="fname"
                    placeholder="First name"
                  />
                </div>
              </div>
              <div className="row-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="row-md-12">
                <input
                  type="text"
                  class="form-control"
                  name="message"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="row-md-12 ">
                <textarea
                  class="form-control f-msg"
                  name="message"
                  id="message"
                  cols="30"
                  rows="7"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn btn-primary rounded-0 py-2 px-4"
                  />
                  <span class="submitting"></span>
                </div>
              </div>
            </form>
            <div className="c-f">
              <p>Follow us here</p>
              <div className="contact-socials d-flex">
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-twitter"></i>
              </div>
            </div>
          </div>
          <div className="">
            <img src={mailLogo} className="mail-img" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
