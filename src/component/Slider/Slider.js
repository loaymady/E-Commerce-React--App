import React from "react";
import { NavLink } from "react-router-dom";
import "./Slider.css";
import Slider1 from "../images/slider1.jpg";
import Slider2 from "../images/slider2.jpg";
import Slider3 from "../images/slider3.jpg";
import Slider4 from "../images/slider4.jpg";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Slider1}
              className="d-block w-100 homee"
              alt="loay"
              height="570px"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center mb-5">
              <div className="container text-center">
                <p className="card-title text-light slider1-text1 mb-1">
                  Autumn-Winter 2022
                </p>
                <h2 className="card-text text-light my-0  slider1-text2 mb-1 ">
                  Create your trends and life ages!
                </h2>

                <NavLink
                  to="/Store"
                  className="btn bg-black text-white px-5 py-3 mt-3 rounded-0 slider1-btn "
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src={Slider2}
              className="d-block w-100"
              alt="loay"
              height="570px"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center mb-5">
              <div className="container text-center">
                <h2 className="card-title text-light slider2-text1 mb-1">
                  SEASONAL DRESSES
                </h2>
                <p className="card-text text-light my-0 slider2-text2 mb-2 ">
                  Perfect Addition to Your Wardrobe
                </p>

                <NavLink
                  to="/Store"
                  className="  btn bg-light px-4 py-3 ms-2 mt-3 rounded-0 slider2-btn "
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Slider3}
              className="d-block w-100"
              alt="loay"
              height="570px"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center mb-5 ">
              <div className="container con-slider3w4">
                <p className="card-title text-white  fs-3 ">#ACCESSORIES</p>
                <p className="card-text text-white fs-1 mb-0">
                  Feeling relax day,
                </p>
                <p className="card-text text-white fs-1  ">enjoy weekend!</p>
                <NavLink
                  to="/Store"
                  className=" btn bg-light m-lg-1 rounded-0 slider3-btn "
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Slider4}
              className="d-block w-100"
              alt="loay"
              height="570px"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-center mb-5">
              <div className="container con-slider3w4 p-0">
                <h5
                  className="card-title text-dark m-0 fs-5"
                  style={{ color: "#333333" }}
                >
                  ELECTRONICS
                </h5>
                <h2 className="card-text text-dark slider4-text2 ">
                  New Collection,
                </h2>
                <h2 className="card-text text-dark  slider4-text3 ">
                  Up To 30%
                </h2>
                <NavLink
                  to="/Store"
                  className=" btn btn-outline-dark px-3 slider4-btn py-2 "
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
