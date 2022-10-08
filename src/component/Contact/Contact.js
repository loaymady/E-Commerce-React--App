import React from "react";
import "./Contact.css";
import ContactImg from "../images/contactUs.jpg";

const Contact = () => {
  return (
    <div>
      <div className="card text-bg-dark border-0">
        <img src={ContactImg} className="contact-img" alt="bacground" />
        <div className="card-img-overlay d-flex text-center flex-column justify-content-center mb-5">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0 mt-5 ">
              Contact Us
            </h5>
            <p className="card-text text-center lead contact-desc  m-lg-4">
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>
          </div>
        </div>
      </div>
      <section className="container px-4 my-5">
        <div className="row gx-0">
          <div className="col-md-7">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="md-form m-3">
                    <label htmlFor="name" className="">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="md-form m-3">
                    <label htmlFor="email" className="">
                      Your Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form m-3">
                    <label htmlFor="subject" className="">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="md-form m-3">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>

            <div className="text-md-left m-3">
              <a className="btn btn-primary" href="#!">
                Send
              </a>
            </div>
          </div>

          <div className="col-md-5 text-center mb-3">
            <ul className="list-unstyled m-5">
              <li>
                <i className="fa fs-3 fa-map-marker"></i>
                <p>Alexandria, Roshdy, EG</p>
              </li>

              <li>
                <i className="fa fa-phone fs-3"></i>
                <p>+20 128 534 7049</p>
              </li>

              <li>
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <p>Lollos.store@gmail.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
