import React from "react";
import { FaPlusCircle, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Addition = () => {
  return (
    <main>
      <div className="main-container">
        <div className="addition-title">
          <h4>Addition</h4>
          <p>SELECT DESIRED DIFFICULTY</p>
        </div>
        <div className="addition-btn-container">
          <Link to="/addition/1">
            <div className="btn">
              <p>Up to 1 digit</p>
              <FaPlusCircle className="btn-icon" />
            </div>
          </Link>
          <Link to="/addition/2">
            <div className="btn">
              <p>Up to 2 digits</p>
              <FaPlusCircle className="btn-icon" />
            </div>
          </Link>
          <Link to="/addition/3">
            <div className="btn">
              <p>Up to 3 digits</p>
              <FaPlusCircle className="btn-icon" />
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

export default Addition;
