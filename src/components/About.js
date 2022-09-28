import { Container, Col, Row } from "react-bootstrap";
import me from "./Images/sampleImgMe.jpg";
function About() {
  return (
    <>
      <section id="about">
        <div className="about">
          <Container>
            <div className="about-content">
              <h1 className="display-6 text-center fw-bold">About me</h1>
              <br />
              <Row>
                <Col md>
                  <p>
                    Hello! I am Andrei. I am currently on my 3rd and last year
                    in the Computer programming and Analysis Program at Seneca
                    College. Growing up, I was fascinated by computers and was
                    passionate to learn everything about technology.
                  </p>
                  <p>
                    I first experienced writing code in high-school. During my
                    last 2 years, I took the Microsoft Visual Basic and
                    Introduction to Java courses. These were very exciting
                    experiences for me as I was able to build simple
                    object-oriented programs and even made an Adventure game for
                    my final project.
                  </p>
                  <p>
                    After graduating, I took the opportunity to go to Seneca to
                    further enhance my knowledge in programming. Fast forward to
                    today, I have done multiple school and side projects on my
                    own and in collaboration with my colleagues. I am
                    continuously working on improving and expanding my skills
                    set in software and web development,{" "}
                    <em>one block of code at a time.</em>
                  </p>
                </Col>
                <Col>
                  <img alt="me" src={me} className="img-fluid" id="me"></img>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default About;
