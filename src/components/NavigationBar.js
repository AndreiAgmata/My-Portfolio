import { Nav, Navbar, Container, Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar
        collapseOnSelect
        bg="gradient"
        variant="dark"
        expand="lg"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">Aa.</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Container>
                <Nav.Link href="#about">About</Nav.Link>
              </Container>
              <Container>
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Container>
              <Container>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Container>
              <Container>
                <Button
                  variant="outline-light"
                  href="https://drive.google.com/file/d/1H6agvd9ow4ifdUrmklCNVR8aCNRfLikP/view?usp=sharing"
                >
                  Resume
                </Button>
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
