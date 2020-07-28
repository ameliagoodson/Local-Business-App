import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./About.css";
import BrowHeader from "../assets/header-eyebrow.jpg";

function About() {
  return (
    <div>
      <Container className="container-about">
        <Card className="card-about">
          <Row>
            <Col>
              <p className="text-about">
                Cosmetiqua Tattooing specialises in eyebrow microblading,
                microshading and various techniques of cosmetic tattoo for
                brows, eyes and lips. These treatments are the perfect choice
                for those who cannot wear makeup, who want their features
                enhanced, or for someone who simply wants to look and feel their
                best at all times.
              </p>
            </Col>
            <Col>
              <Row>
                <img src={BrowHeader} className="browpicture"></img>
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default About;
