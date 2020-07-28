import React from "react";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";
import Icon from "./assets/icon-face.png";

function Home() {
  const location = useLocation();
  return (
    <div className="jumbotron">
      <h1 className="heading">Cosmetiqua Tattooing</h1>
      <img src={Icon} alt="website logo" />
      <p className="home-text">Wake up ready for anything!</p>
      <button className="btn-see">
        <Link
          to="/services"
          className={location.pathname === "/services"}
          className="btn-see-link"
        >
          Services
        </Link>
      </button>
    </div>
  );
}

export default Home;
