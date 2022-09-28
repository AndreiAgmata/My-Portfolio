import { Container, Button, Card } from "react-bootstrap";
import { projectsData } from "./data";

function Projects() {
  return (
    <>
      <section id="projects">
        <div className="projects">
          <Container>
            <div className="projects-content">
              <h1 className="display-6 text-center fw-bold">My Recent Work</h1>
              <Container className="cards-container">
                {projectsData.map((data, key) => {
                  return (
                    <div className="cards" key={key}>
                      <Card
                        border="dark"
                        bg="dark"
                        style={{ width: "25rem", height: "100%" }}
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
            </div>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Projects;
