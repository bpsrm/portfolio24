/* eslint-disable no-unused-vars */
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { useState } from "react";

const NavbarMobile = () => {
  const [theme, setTheme] = useState("dark");
  const [themeIcon, setThemeIcon] = useState("moon");

  const changeTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");

    if (currentTheme === "light") {
      setTheme("dark");
      document.body.setAttribute("data-theme", "dark");
      setThemeIcon("moon");
    } else {
      setTheme("light");
      document.body.setAttribute("data-theme", "light");
      setThemeIcon("sun");
    }
  };

  return (
    <Container className="position-fixed fixed-bottom mb-4 d-block d-md-block d-lg-none">
      <Row className="justify-content-center">
        <Col className="col-10">
          <Nav className="w-100 justify-content-evenly navbar-mobile py-2">
            <Link
              to="home"
              className="d-flex align-items-center nav-link"
              duration={300}
              smooth={true}
              spy={true}
              activeClass="active"
            >
              <Icon icon="mynaui:home" width="18" height="18" />
            </Link>
            <Link
              to="about"
              className="d-flex align-items-center nav-link"
              duration={300}
              smooth={true}
              spy={true}
              activeClass="active"
            >
              <Icon icon="solar:user-linear" width="18" height="18" />
            </Link>
            <Link
              to="experience"
              className="d-flex align-items-center nav-link"
              duration={300}
              smooth={true}
              spy={true}
              activeClass="active"
            >
              <Icon icon="iconoir:book" width="18" height="18" />
            </Link>
            <Link
              to="project"
              className="d-flex align-items-center nav-link"
              duration={300}
              smooth={true}
              spy={true}
              activeClass="active"
            >
              <Icon icon="mingcute:folder-line" width="18" height="18" />
            </Link>
            <Link
              to="contact"
              className="d-flex align-items-center nav-link"
              duration={300}
              smooth={true}
              spy={true}
              activeClass="active"
            >
              <Icon icon="tabler:message" width="18" height="18" />
            </Link>
            <div
              className="d-flex align-items-center nav-link"
              onClick={changeTheme}
            >
              <Icon icon={`ph:${themeIcon}-light`} width="18" height="18" />
            </div>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default NavbarMobile;
