import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css"; // Make sure this file exists for styling

const About = () => {
  return (
    <section className="ezy__about13_xBohsfTrK" id="ezy__about13_xBohsfTrK">
      <Container>
        <Row className="justify-content-center align-items-center">
          <Col xs={12} lg={5} className="mb-5 mb-lg-0">
            <div>
              <h1 className="ezy__about13_xBohsfTrK-heading">ABOUT US</h1>
              <hr className="ezy__about13_xBohsfTrK-divider my-4" />
              <p className="ezy__about13_xBohsfTrK-sub-heading mb-2">
                We are an innovative IT company providing cutting-edge solutions.
                Completely network collaborative web services via user-centric initiatives.
                Quickly promote sticky testing procedures before unique process improvements.
                Distinctively engineer innovative information whereas revolutionary process improvements.
              </p>
              <p className="ezy__about13_xBohsfTrK-sub-heading mb-0">
                Distinctively engineer innovative information whereas
                revolutionary process improvements. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Quia enim omnis saepe dolor
                voluptatum. Natus soluta maxime ipsum nam sapiente dignissimos
                voluptatum totam.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="ezy__about13_xBohsfTrK-bg-holder" />
            <div className="position-relative">
              <img
                src="https://cdn.easyfrontend.com/pictures/about/about13_1.jpg"
                alt="About Us"
                className="img-fluid"
              />
              <img
                src="https://cdn.easyfrontend.com/pictures/about/about13_2.jpg"
                alt="Team"
                className="img-fluid ezy__about13_xBohsfTrK-img2"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
