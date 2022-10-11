import { Container, Button, Card } from "react-bootstrap";
import { projectsData } from "./data";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { ref, inView } = useInView();
  return (
    <>
      <section id="projects">
        <div className="projects" ref={ref}>
          <Container>
            <div className="projects-content">
              <h2
                className={`${"display-5 text-center fw-bold"} ${
                  inView ? "animateContent" : ""
                }`}
              >
                My Recent Work
              </h2>
              <Container className="cards-container">
                {projectsData.map((data, key) => {
                  return (
                    <div className="cards" key={key}>
                      <Card
                        className={`${inView ? "animateCards" : ""}`}
                        border="dark"
                        bg="dark"
                        style={{ width: "20rem", height: "100%" }}
                      >
                        <Card.Img variant="top" src={data.images} />
                        <Card.Body className="card-body">
                          <Card.Title>
                            <h2>{data.title}</h2>
                          </Card.Title>
                          <Card.Text>{data.description}</Card.Text>
                          <Container className="buttons-container">
                            <Button
                              variant="outline-light me-2"
                              href={data.pageLink}
                            >
                              Demo
                            </Button>
                            <Button
                              variant="outline-light"
                              href={data.githubLink}
                            >
                              Code
                            </Button>
                          </Container>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </Container>
              <Container className="buttons-container">
                <Button
                  variant="outline-light"
                  href="https://github.com/AndreiAgmata"
                  size="lg"
                >
                  See More
                </Button>
              </Container>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Projects;
