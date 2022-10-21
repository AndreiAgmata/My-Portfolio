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
          <Navbar.Brand href="#home">
            <svg
              id="nav-logo"
              viewBox="0 0 455 494"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M227.357 177.015C178.566 274.592 138.391 354.429 138.078 354.429C137.766 354.43 135.552 350.279 133.157 345.206C129.414 337.275 116.233 309.779 104.836 286.127C102.986 282.288 101.681 278.8 101.935 278.376C102.19 277.951 115.877 277.639 132.351 277.681C148.826 277.724 162.546 277.519 162.84 277.224C163.693 276.371 161.218 263.028 159.075 256.931C152.396 237.93 136.013 223.168 115.513 217.681C108.22 215.729 104.423 215.567 54.6828 215.091C25.5038 214.812 0.929735 214.853 0.0751674 215.181C-1.1653 215.657 12.5895 243.916 68.0836 354.902C106.343 431.42 137.871 494.014 138.146 494C138.421 493.985 156.396 458.426 178.091 414.978C264.822 241.277 316.169 139.054 316.688 139.053C316.988 139.052 318.405 141.632 319.836 144.786C321.268 147.94 329.436 165.07 337.986 182.855C346.538 200.639 353.535 215.334 353.535 215.51C353.535 215.687 340.1 215.83 323.679 215.83C307.144 215.83 293.577 216.229 293.271 216.725C292.967 217.216 293.404 221.591 294.244 226.447C298.394 250.455 316.57 270.176 340.074 276.169C345.074 277.443 354.957 277.699 400.265 277.726C430.08 277.743 454.71 277.522 454.998 277.234C455.537 276.696 317.88 0.72037 316.715 0.000452004C316.359 -0.218914 276.148 79.4367 227.357 177.015Z"
                fill="white"
              />
            </svg>
          </Navbar.Brand>
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
