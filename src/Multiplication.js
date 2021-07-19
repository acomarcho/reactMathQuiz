import React from "react";
import { FaTimesCircle, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Multiplication = () => {
  return (
    <main>
      <div className="main-container">
        <div className="addition-title">
          <h4>Multiplication</h4>
          <p>SELECT DESIRED DIFFICULTY</p>
        </div>
        <div className="addition-btn-container">
          <Link to="/multiplication/1">
            <div className="btn">
              <p>Up to 1 digit</p>
              <FaTimesCircle className="btn-icon" />
            </div>
          </Link>
          <Link to="/multiplication/2">
            <div className="btn">
              <p>Up to 2 digits</p>
              <FaTimesCircle className="btn-icon" />
            </div>
          </Link>
          <Link to="/multiplication/3">
            <div className="btn">
              <p>Up to 3 digits</p>
              <FaTimesCircle className="btn-icon" />
            </div>
          </Link>
          <Link to="/">
            <div className="btn-back">
              <FaArrowLeft className="back-icon" />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Multiplication;
