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
          <h5 className="title">Footer Content</h5>
          <p>
            Here you can use rows and columns here to organize your footer
            content.
          </p>
        </Col>
        <Col>
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </Col>
      </Row>
      {/* <ul>
            <li>
              <a href="#!" className="footer-link">
                Link 1
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Link 2
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Link 3
              </a>
            </li>
            <li>
              <a href="#!" className="footer-link">
                Link 4
              </a>
            </li>
          </ul> */}
    </Container>
  </div>
);

export default Footer;
