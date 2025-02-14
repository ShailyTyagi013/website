import React from 'react';
import "./Services.css"; // Make sure the path is correct

import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis, faRandom, faCamera } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const serviceList = [
  {
    icon: faCannabis,
    title: 'Branding',
    description:
      'Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.',
  },
  {
    icon: faRandom,
    title: 'Content Marketing',
    description:
      'It’s easier to reach yours have the right savings account. It’s easier to reach your savings goals when you have the right savings account.',
  },
  {
    icon: faCamera,
    title: 'Web Development',
    description:
      'Sed ut in perspiciatis unde omnis iste natus error sit on i tatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
  },
];

const ServiceItem = ({ service }) => (
  <Card className="ezy__service2_Vr6f3tEbXe-item mb-3">
    <Card.Body className="px-lg-4 py-lg-5 text-center">
      <div className="ezy__service2_Vr6f3tEbXe-icon mb-4">
        <FontAwesomeIcon icon={service.icon} size="2x" />
      </div>
      <h4 className="ezy__service2_Vr6f3tEbXe-title fs-4 mb-3">{service.title}</h4>
      <p className="ezy__service2_Vr6f3tEbXe-content mb-0">{service.description}</p>
    </Card.Body>
  </Card>
);

ServiceItem.propTypes = {
  service: PropTypes.object.isRequired,
};

const Services = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center mb-md-5">
        <Col lg={6} className="text-center">
          <h2 className="ezy__service2_Vr6f3tEbXe-heading mb-4">Our Services</h2>
          <p className="ezy__service2_Vr6f3tEbXe-sub-heading mb-0">
            Assumenda non repellendus distinctio nihil dicta sapiente, quibusdam maiores, illum at, aliquid blanditiis eligendi qui.
          </p>
        </Col>
      </Row>
      <Row className="text-center ezy__service2_Vr6f3tEbXe-card">
        {serviceList.map((service, index) => (
          <Col md={4} key={index} className="mt-5 mt-md-0">
            <ServiceItem service={service} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
