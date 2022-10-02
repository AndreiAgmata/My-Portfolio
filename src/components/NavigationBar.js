import { Nav, Navbar, Container, Button } from "react-bootstrap";

function NavigationBar() {
  return (
    <>
      <Navbar
        id="navbar"
        collapseOnSelect
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
                  href="https://docs.google.com/document/d/1CRHmMeYeKUj7szIUzNs95zaZDjWMltjgKTJspUmU9FA/edit?usp=sharing"
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
