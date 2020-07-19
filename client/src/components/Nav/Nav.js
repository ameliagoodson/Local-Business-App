import React from "react";
import "./Nav.css";


function Nav(props) {
  return (
    <nav className="navbar d-flex flex-row">
      <h1 className="nav-heading">Local business name</h1>
      <ul className="navbar-nav flex-row">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className={
              props.currentPage === "Home" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className={
              props.currentPage === "About" ? "nav-link active" : "nav-link"
            }
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            className={
              props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className={
              props.currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
