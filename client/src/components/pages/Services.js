import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer/Footer";
import BrowMicroblade from "./assets/brow-microblade.png";
import BrowCombo from "./assets/brow-combo.png";
import BrowTattoo from "./assets/brow-tattoo.png";
import LipTattoo from "./assets/tattoo-lip-beforeafter.jpg";
import LipTouch from "./assets/tattoo-lip.jpg";
import LipLiner from "./assets/tattoo-lipliner.jpg";
import LashReg from "./assets/reg3.jpg";
import LashInvis from "./assets/invisible.jpg";
import LashWing from "./assets/wing.jpg";
import "./Services.css";
import PriceIcon from "./assets/price.png";

function Services() {
  return (
    <div>
      <Container className="container-services">
        <Card className="card-services">
          <Accordion>
            <div className="accordion-header">
              <h1 className="accordion-services">Prices and Services</h1>
              <img className="icon-price" src={PriceIcon} alt="website logo" />
            </div>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Microblading and eyebrow tattooing
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <Row className="row">
                    <Col className="colHeading">Microblading</Col>
                    <Col>
                      Microblading is a semi-permanent tattoo technique used to
                      create the illusion of fuller brows. Realistic hairs are
                      drawn using a nano blade using a combination of pigments.
                    </Col>
                    <Col>
                      <img src={BrowMicroblade}></img>
                    </Col>
                    <Col>$350</Col>
                  </Row>
                  <Row className="row">
                    <Col className="colHeading">Eyebrow tattoo</Col>
                    <Col>
                      The brow is enhanced with cosmetic tattooing to create the
                      appearance of a perfectly-filled brow. It's a good option
                      for someone who has a good amount of brow hair and is just
                      looking to enhance and define what is already there.
                    </Col>
                    <Col>
                      <img src={BrowTattoo}></img>
                    </Col>
                    <Col>$400</Col>
                  </Row>
                  <Row className="row">
                    <Col className="colHeading">Combination powder brow</Col>
                    <Col>
                      The ultimate brow customised to each client. Combination
                      brows combine both hairstrokes (microblading) and shading
                      to create an enhanced but natural looking brow. Ideal for
                      anyone who craves perfection.
                    </Col>
                    <Col>
                      <img src={BrowCombo}></img>
                    </Col>
                    <Col>$450</Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                Lip tattooing
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <Row className="row">
                    <Col className="colHeading">Lip blush</Col>
                    <Col>
                      Create a natural blush colour and a natural looking
                      fullness to your lips. Lip blushing is a cosmetic tattoo
                      of the lips that enhances the beauty of the natural lip
                      color, improving the shape of the lips, giving definition
                      and the illusion of fullness.
                    </Col>
                    <Col>
                      <img src={LipTattoo}></img>
                    </Col>
                    <Col>$450</Col>
                  </Row>
                  <Row className="row">
                    <Col className="colHeading">Lip tint</Col>
                    <Col>
                      Lip Tint Tattoo is a subtle approach to a fuller lip using
                      naturally toned pigments to blend and shade within or
                      outside the natural lip line.
                    </Col>
                    <Col>
                      <img src={LipLiner}></img>
                    </Col>
                    <Col>$350</Col>
                  </Row>
                  <Row className="row">
                    <Col className="colHeading">Lip tattoo touchup</Col>
                    <Col>Five-week follow up touch up</Col>
                    <Col>
                      <img src={LipTouch}></img>
                    </Col>
                    <Col>$150</Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                Eyeliner tattooing
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <Row className="row">
                    <Col className="colHeading">Traditional eyeliner</Col>
                    <Col>
                      A fine eyeliner is a ‘classic’ and a good choice for most
                      eye shapes. It provides subtle definition while
                      eliminating the bland, naked-eye look that many women with
                      few eyelashes have. It’s a timeless look that never looks
                      outdated.
                    </Col>
                    <Col>
                      <img src={LashReg}></img>
                    </Col>
                    <Col>$400</Col>
                  </Row>
                  <Row className="row">
                    <Col className="colHeading">Winged eyeliner</Col>
                    <Col>
                      Women who prefer bolder, dramatic makeup usually request
                      thicker eyeliners with winged tails at either straight or
                      upward angles depending on the effect desired. The shape
                      and thickness is custom designed to the individual client
                      requirements with many colours available to choose from.
                    </Col>
                    <Col>
                      <img src={LashWing}></img>
                    </Col>
                    <Col>$450</Col>
                  </Row>
                  <Row className="row">
                    <Col className="colHeading">Invisible lash liner</Col>
                    <Col>
                      “Lash Enhancement” creates undetectable definition for
                      eyes. Unlike traditional eyeliner tattooing (in which ink
                      is embedded “above” the lash line) Invisible Liner uses
                      small needles to dot and fill “within” and around the lash
                      bed.
                    </Col>
                    <Col>
                      <img src={LashInvis}></img>
                    </Col>
                    <Col>$300</Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                Another service here
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <Row className="row">
                    <Col className="colHeading">Traditional eyeliner</Col>
                    <Col>
                      A fine eyeliner is a ‘classic’ and a good choice for most
                      eye shapes. It provides subtle definition while
                      eliminating the bland, naked-eye look that many women with
                      few eyelashes have. It’s a timeless look that never looks
                      outdated.
                    </Col>
                    <Col>
                      <img src={LashReg}></img>
                    </Col>
                    <Col>$400</Col>
                  </Row>
                  <Row className="row">
                    <Col className="colHeading">Winged eyeliner</Col>
                    <Col>
                      Women who prefer bolder, dramatic makeup usually request
                      thicker eyeliners with winged tails at either straight or
                      upward angles depending on the effect desired. The shape
                      and thickness is custom designed to the individual client
                      requirements with many colours available to choose from.
                    </Col>
                    <Col>
                      <img src={LashWing}></img>
                    </Col>
                    <Col>$450</Col>
                  </Row>
                  <Row className="row">
                    <Col className="colHeading">Invisible lash liner</Col>
                    <Col>
                      “Lash Enhancement” creates undetectable definition for
                      eyes. Unlike traditional eyeliner tattooing (in which ink
                      is embedded “above” the lash line) Invisible Liner uses
                      small needles to dot and fill “within” and around the lash
                      bed.
                    </Col>
                    <Col>
                      <img src={LashInvis}></img>
                    </Col>
                    <Col>$300</Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Card>
      </Container>
    </div>
  );
}

export default Services;
