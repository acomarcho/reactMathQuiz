import React from "react";
import { Link } from "react-router-dom";
import { FaTimesCircle, FaPlusCircle } from "react-icons/fa";

const Home = () => {
  return (
    <main>
      <div className="main-container">
        <div className="home-title">
          <p>WELCOME TO</p>
          <h4>acoMathQuiz!</h4>
        </div>
        <div className="home-hero">
          <h3>Choose Your Mode.</h3>
        </div>
        <div className="home-btn-container">
          <Link to="/addition">
            <div className="btn">
              <p>Addition</p>
              <FaPlusCircle className="btn-icon" />
            </div>
          </Link>
          <Link to="/multiplication">
            <div className="btn">
              <p>Multiplication</p>
              <FaTimesCircle className="btn-icon" />
            </div>
          </Link>
        </div>
        <p className="home-info">... more gamemodes coming soon!</p>
      </div>
    </main>
  );
};

export default Home;
