import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid px-0 ">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#23242a" }}
      >
        <div className="container-fluid p-4 pb-2 mb-5">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6
                  className="text-uppercase mb-4 font-weight-bold"
                  style={{ fontFamily: " Caveat, cursive", fontSize: "25px" }}
                >
                  Lollos
                </h6>
                <p>
                  Our company is dedicated to creating unique and comfortable
                  clothing for men and women. Since our establishment in 2022.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Products
                </h6>
                <p>
                  <NavLink to="./" className="text-white">
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink to="./store" className="text-white">
                    Store
                  </NavLink>
                </p>
                <p>
                  <NavLink to="./about" className="text-white">
                    About Us
                  </NavLink>
                </p>
                <p>
                  <NavLink to="./contact" className="text-white">
                    Contact
                  </NavLink>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fa fa-home mr-3"></i> Alexandria, Roshdy, EG
                </p>
                <p>
                  <i className="fa fa-envelope mr-3"></i> Lollos.store@gmail.com
                </p>
                <p>
                  <i className="fa fa-phone mr-3"></i> +20 128 534 7049
                </p>
                <p>
                  <i className="fa fa-print mr-3"></i> +20 106 704 4830
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Follow us
                </h6>

                <a
                  className="btn btn-primary btn-floating m-1 border-0"
                  style={{ backgroundColor: "#3b5998" }}
                  href="https://www.facebook.com/loaymady"
                  rel="noopener noreferrer"
                  role="button"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1 border-0"
                  style={{ backgroundColor: "#dd4b39" }}
                  href="mailto:loay.mady13@gmail.com"
                  rel="noopener noreferrer"
                  role="button"
                  target="_blank"
                >
                  <i className="fa fa-google"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1 border-0"
                  style={{ backgroundColor: " #0082ca" }}
                  href="https://www.linkedin.com/in/loay-mady/"
                  rel="noopener noreferrer"
                  target="_blank"
                  role="button"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="btn btn-primary btn-floating m-1 border-0"
                  style={{ backgroundColor: "#333333" }}
                  href="https://github.com/loaymady"
                  rel="noopener noreferrer"
                  target="_blank"
                  role="button"
                >
                  <i className="fa fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-4"
          style={{ backgroundColor: " rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <NavLink className="text-white" to="./">
            Lollos.com
          </NavLink>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
