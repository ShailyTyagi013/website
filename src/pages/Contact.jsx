import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col } from 'react-bootstrap';
import "./Contact.css";
const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3 mt-2">
        <Form.Control type="text" placeholder="Enter Name" required />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3 mt-2">
        <Form.Control type="email" placeholder="Enter Email" required />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={3} placeholder="Enter Message" required />
        <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
      </Form.Group>
      <div className="text-end">
        <Button variant="primary" type="submit" className="ezy__contact3_aKBWRj2h-btn">
          Submit
        </Button>
      </div>
    </Form>
  );
};

const ContactFormCard = () => (
  <Card className="ezy__contact3_aKBWRj2h-form-card">
    <Card.Body className="p-md-5">
      <h2 className="ezy__contact3_aKBWRj2h-heading mb-3">Contact Us</h2>
      <p className="ezy__contact3_aKBWRj2h-sub-heading mb-5">
        We list your menu online, help you process orders.
      </p>
      <ContactForm />
    </Card.Body>
  </Card>
);

const ContactUs3_aKBWRj2h = () => {
  return (
    <section className="ezy__contact3_aKBWRj2h">
      <Container>
        <Row className="py-4">
          <Col lg={7} className="order-lg-2 mb-3 mb-lg-0">
            <div
              className="ezy__contact3_aKBWRj2h-bg-holder h-100"
              style={{ backgroundImage: "url(https://cdn.easyfrontend.com/pictures/contact/contact_3.png)" }}
            />
          </Col>
          <Col lg={5}>
            <ContactFormCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Contact = () => {
  return (
    <Container className="py-5">
      <ContactUs3_aKBWRj2h />
    </Container>
  );
};

export default Contact;
