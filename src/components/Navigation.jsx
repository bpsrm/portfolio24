import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Navbar expand="lg" className="bg-danger">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="w-100 justify-content-center">
                  <Nav.Link href="#home">HOME</Nav.Link>
                  <Nav.Link href="#about">ABOUT</Nav.Link>
                  <Nav.Link href="#experience">EXPERIENCE</Nav.Link>
                  <Nav.Link href="#project">PROJECTS</Nav.Link>
                  <Nav.Link href="#contact">CONTACT</Nav.Link>
                  <Nav.Link href="#theme">THEME</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
    // <Container>
    //
    // </Container>
  );
};

export default Navigation;
