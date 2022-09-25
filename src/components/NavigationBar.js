import { Nav, Navbar, Container } from "react-bootstrap";

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
            <Nav className="ml-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
