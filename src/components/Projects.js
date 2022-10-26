import { Container, Button, Card } from "react-bootstrap";
import { projectsData } from "./data";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const el = useRef();
  const tl = useRef();
  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        paused: true,
      });

      tl.current
        .from(".fadeIn", { duration: 1, opacity: 0, y: 20 })
        .from(".card", { opacity: 0, y: 20, duration: 0.5, stagger: 0.4 });
    }, el);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (inView) {
      tl.current.play();
    }
  }, [inView]);

  return (
    <>
      <section id="projects" ref={el}>
        <div className="projects" ref={ref}>
          <Container>
            <div className="projects-content">
              <h2 className="display-5 text-center fw-bold fadeIn">
                My Recent Work
              </h2>
              <Container className="cards-container">
                {projectsData.map((data, key) => {
                  return (
                    <div className="cards" key={key}>
                      <Card
                        border="dark"
                        bg="dark"
                        style={{ width: "20rem", height: "100%" }}
                        className="card"
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
