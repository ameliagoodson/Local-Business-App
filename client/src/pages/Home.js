import React from "react";
import "./Home.css";

const Home = () => (
  <div className="jumbotron">
    <h1 className="heading">Local business app</h1>
    <p className="home-text">Insert text here</p>
    <button className="btn-see">
      {/* INSERT LINK TO PAGE HERE */}
      {/* <a
        href="#portfolio"
        onClick={() => props.handlePageChange("Portfolio")}
        className={
          props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
        }
      >
        See what I can do
      </a> */}
    </button>
  </div>
);

export default Home;
