import { Container, Row, Col, Nav } from "react-bootstrap";

const NavbarMobile = () => {
  return (
    <Container className="position-fixed fixed-bottom mb-4">
      <Row className="justify-content-center">
        <Col className="col-10">
          <Nav className="w-100 justify-content-center navbar-mobile py-2">
            <Nav.Link href="#home" className="d-flex align-items-center">
              <i className="fa-solid fa-house"></i>
            </Nav.Link>
            <Nav.Link href="#about" className="d-flex align-items-center">
              <i className="fa-solid fa-user"></i>
            </Nav.Link>
            <Nav.Link href="#experience" className="d-flex align-items-center">
              <i className="fa-solid fa-book"></i>
            </Nav.Link>
            <Nav.Link href="#project" className="d-flex align-items-center">
              <i className="fa-solid fa-folder"></i>
            </Nav.Link>
            <Nav.Link href="#contact" className="d-flex align-items-center">
              <i className="fa-solid fa-message"></i>
            </Nav.Link>
            <Nav.Link href="#theme" className="d-flex align-items-center">
              <i className="fa-solid fa-moon"></i>
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarMobile;
