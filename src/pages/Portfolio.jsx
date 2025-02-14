import React from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlusSquare, faLaptop, faArrowRight, faAdjust } from "@fortawesome/free-solid-svg-icons";
import "./Portfolio.css";

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
              </p>
              <p className="ezy__about13_xBohsfTrK-sub-heading mb-0">
                Distinctively engineer innovative information whereas revolutionary process improvements.
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

const Portfolio = () => {
  return (
    <section className="ezy__portfolio10_dQu36UXv">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7} className="text-center">
            <h2 className="ezy__portfolio10_dQu36UXv-heading mb-4">My Latest Works</h2>
            <p className="ezy__portfolio10_dQu36UXv-sub-heading mb-2">
              It’s easier to reach your savings goals when you have the right savings account.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} lg={8} className="mt-4">
            <Card className="ezy__portfolio10_dQu36UXv-item">
              <Card.Body className="p-0">
                <Row className="h-100 align-items-center">
                  <Col xs={12} md={6} className="h-100">
                    <div className="ezy__portfolio10_dQu36UXv-bg-holder" style={{ backgroundImage: "url(https://cdn.easyfrontend.com/pictures/portfolio/portfolio10_1.jpg)" }} />
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="p-3 p-sm-4">
                      <h3 className="fw-black text-capitalize mb-2 fs-5 text-900">1000+ Ready Blocks</h3>
                      <p>Get ready blocks with languages and frameworks varieties and also mobile responsive</p>
                      <Nav className="flex-column">
                        <li className="d-flex align-items-center mb-1 text-1000">
                          <FontAwesomeIcon icon={faCheck} className="me-2 text-primary" /> Languages: HTML5, React JS, Vue JS
                        </li>
                        <li className="d-flex align-items-center fs--0 text-1000">
                          <FontAwesomeIcon icon={faCheck} className="me-2 text-primary" /> Frameworks: Bootstrap, Material UI
                        </li>
                      </Nav>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;

