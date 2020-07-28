import React from "react";
import "./Calendly.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CalIcon from "../pages/assets/calendar.png";

function Calendly() {
  return (
    <div>
      <Container className="container-about">
        <Row>
          <Col>
            <div style={{ height: "500px" }} className="div-calendly">
              <iframe
                src="https://calendly.com/ameliagoodson/60min"
                width="100%"
                height="100%"
                frameborder="0"
              ></iframe>
            </div>
          </Col>
          <Col>
            <Card className="card-calendly">
              <h1 className="heading-calendly">Book an appointment</h1>
              <p className="text-calendly">
                Click the calendar to schedule a booking. More information here
                about other ways that you can schedule booking e.g. phone and
                email.
              </p>
              <img className="icon-cal" src={CalIcon} alt="website logo" />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Calendly;
