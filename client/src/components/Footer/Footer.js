import React from "react";
import "./Footer.css";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Container from "react-bootstrap/Container";
// import Accordion from "react-bootstrap/Accordion";
// import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => (
  <div className="footer">
    <Container>
      <Row>
        <Col>
          <h5 className="footer-title">Cosmetiqua Tattooing</h5>
          <p>Wake up beautiful</p>
        </Col>
        <Col>
          <ul className="links-list">
            <li>
              <a href="/services" className="footer-link">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
