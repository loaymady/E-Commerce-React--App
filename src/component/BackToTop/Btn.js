import React from "react";
import { useState, useEffect } from "react";
import "./Btn.css";

const Btn = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="loay">
      {backToTop && (
        <button
          className="fa fa-arrow-up fs-2 text-info scroll  rounded-4 "
          style={{
            position: "fixed",
            bottom: "50px",
            right: "35px",
            height: "50px",
            width: "50px",
          }}
          onClick={scrollTop}
        ></button>
      )}
    </div>
  );
};

export default Btn;
