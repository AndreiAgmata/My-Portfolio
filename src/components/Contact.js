import { Container, Form, Button, Col } from "react-bootstrap";

import emailjs from "emailjs-com";

function Contact() {
  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d214olp",
        "template_nlqvteb",
        e.target,
        "kjejl9gLns7t2Bpa9"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      <section id="contact">
        <div className="contact">
          <Container>
            <div className="contact-content">
              <h1 className="display-6 text-center fw-bold">Contact Me</h1>
              <Container className="form-container">
                <Col xs={8}>
                  <Form onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Name"
                        name="name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        name="email"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="subject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="textarea"
                        placeholder="Subject"
                        name="subject"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} name="message" />
                    </Form.Group>
                    <div className="d-grid">
                      <Button variant="outline-light" type="submit">
                        Send
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Container>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Contact;
