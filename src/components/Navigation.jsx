import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Container className="fixed-top">
      <Row className="justify-content-center">
        <Col md={12} lg={7} className="navbar-col">
          <Navbar expand="lg">
            <Container className="py-2">
              <Nav className="w-100 d-flex flex-row justify-content-between">
                <Nav.Link href="#home" className="">
                  <i className="fa-solid fa-house pe-2"></i> HOME
                </Nav.Link>
                <Nav.Link href="#about" className="">
                  <i className="fa-solid fa-user pe-2"></i> ABOUT
                </Nav.Link>
                <Nav.Link href="#experience" className="">
                  <i className="fa-solid fa-book pe-2"></i> EXPERIENCE
                </Nav.Link>
                <Nav.Link href="#project" className="">
                  <i className="fa-solid fa-folder pe-2"></i> PROJECTS
                </Nav.Link>
                <Nav.Link href="#contact" className="">
                  <i className="fa-solid fa-message pe-2"></i> CONTACT
                </Nav.Link>
                <Nav.Link href="#theme" className="">
                  <i className="fa-solid fa-moon pe-2"></i> THEME
                </Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
