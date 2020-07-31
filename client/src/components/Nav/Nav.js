import React from "react";
import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../pages/assets/face.png";

function Nav() {
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
          className="brand"
        >
          <img className="icon-home" src={HomeIcon} alt="website logo" />
          Cosmetiqua Tattooing
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/services"
          className={
            location.pathname === "/services" ? "nav-link active" : "nav-link"
          }
        >
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? "nav-link active" : "nav-link"
          }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
      {/* Login link */}
      <li className="nav-item">
        <Link
          to="/login"
          className={
            location.pathname === "/login" ? "nav-link active" : "nav-link"
          }
        >
          Login
        </Link>
        {/* Booking link */}
      </li>
      <li className="nav-item">
        <Link
          to="/booking"
          className={
            location.pathname === "/booking" ? "nav-link active" : "nav-link"
          }
        >
          Make a booking
        </Link>
      </li>
    </ul>
  );
}

// function Nav(props) {
//   return (
//     <nav className="navbar d-flex flex-row">
//       <h1 className="nav-heading">Local business name</h1>
//       <ul className="navbar-nav flex-row">
//         <li className="nav-item">
//           <a
//             href="#home"
//             onClick={() => props.handlePageChange("Home")}
//             className={
//               props.currentPage === "Home" ? "nav-link active" : "nav-link"
//             }
//           >
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#about"
//             onClick={() => props.handlePageChange("About")}
//             className={
//               props.currentPage === "About" ? "nav-link active" : "nav-link"
//             }
//           >
//             About
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#portfolio"
//             onClick={() => props.handlePageChange("Portfolio")}
//             className={
//               props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
//             }
//           >
//             Portfolio
//           </a>
//         </li>
//         <li className="nav-item">
//           <a
//             href="#contact"
//             onClick={() => props.handlePageChange("Contact")}
//             className={
//               props.currentPage === "Contact" ? "nav-link active" : "nav-link"
//             }
//           >
//             Contact
//           </a>
//         <>
//       </ul>
//     </nav>
//   );
// }

export default Nav;
