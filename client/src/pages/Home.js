import React from "react";
import "./Home.css";
import { Link, useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  return (
    <div className="jumbotron">
      <h1 className="heading">Détendre</h1>
      <p className="home-text">Experience pure luxury and pampering</p>
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
