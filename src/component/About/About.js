import React from "react";
import "./About.css";
import about1 from "../images/about1.jpg";
import about2 from "../images/about2.jpg";

const About = () => {
  return (
    <div>
      <div className="container py-5 mt-5">
        <div className="row">
          <div className="col-md-6 img-about d-flex justify-content-center">
            <img src={about1} alt="About Us" />
          </div>
          <div className="col-md-6 px-5 py-3 d-flex flex-column justify-content-center tex-about">
            <h1 className=" text-primary fw-bold mb-4">About Us</h1>
            <p className="fs-4  fw-600px m-0">
              We guarantee the highest quality of
            </p>
            <p className="fs-4  fw-600px md-5">the products we sell.</p>
            <p className="lead fs-6 mb-4">
              Our company is dedicated to creating unique and comfortable
              clothing for men and women. Since our establishment in 2022,
              Fashion's activity has extended from developing designer clothes
              to training new designers and stylists at our school,
              participation of our trainees at the world's leading fashion shows
              and writing articles about fashion.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-5 mb-3">
        <div className="row">
          <div className="col-md-6 px-5 py-3 d-flex flex-column justify-content-center tex-about tex2-about">
            <h1 className=" text-primary fw-bold mb-4">Our Story</h1>
            <p className="fs-4  fw-600px m-0">
              Catering to your requirements, handling your needs with care.
            </p>
            <p className="lead fs-6 mt-3">
              Our store is more than just another average online retailer. We
              sell not only top quality products, but give our customers a
              positive online shopping experience.
            </p>
            <p className="lead fs-6 mt-2">
              Forget about struggling to do everything at once: taking care of
              the family, running your business, walking your dog, cleaning the
              house, doing the shopping, etc.
            </p>
          </div>
          <div className="col-md-6 img-about d-flex justify-content-center mb-3">
            <img src={about2} alt="About Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
