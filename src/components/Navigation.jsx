import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-scroll";
import { useState } from "react";

const Navigation = () => {
  const [theme, setTheme] = useState("DARK");
  const [themeIcon, setThemeIcon] = useState("moon");

  const changeTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme === "light") {
      document.body.setAttribute("data-theme", "dark");
      setTheme("DARK");
      setThemeIcon("moon");
    } else {
      document.body.setAttribute("data-theme", "light");
      setTheme("LIGHT");
      setThemeIcon("sun");
    }
  };

  return (
    <Container className="fixed-top d-none d-lg-block">
      <Row className="justify-content-center">
        <Col md={12} lg={7} className="navbar-col">
          <Navbar expand="lg">
            <Container className="py-2">
              <Nav className="w-100 d-flex flex-row justify-content-between">
                <Link
                  to="home"
                  className="nav-link"
                  duration={300}
                  smooth={true}
                  spy={true}
                  activeClass="active"
                >
                  <Icon
                    icon="mynaui:home"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  HOME
                </Link>
                <Link
                  to="about"
                  className="nav-link"
                  duration={300}
                  smooth={true}
                  spy={true}
                  activeClass="active"
                >
                  <Icon
                    icon="solar:user-linear"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  ABOUT
                </Link>
                <Link
                  to="experience"
                  className="nav-link"
                  duration={300}
                  smooth={true}
                  spy={true}
                  activeClass="active"
                >
                  <Icon
                    icon="iconoir:book"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  EXPERIENCE
                </Link>
                <Link
                  to="projects"
                  className="nav-link"
                  duration={300}
                  smooth={true}
                  spy={true}
                  activeClass="active"
                >
                  <Icon
                    icon="mingcute:folder-line"
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  PROJECTS
                </Link>
                <div className="nav-link" onClick={changeTheme}>
                  <Icon
                    icon={`ph:${themeIcon}-light`}
                    width="20"
                    height="20"
                    className="me-2"
                  />
                  {theme}
                </div>
              </Nav>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigation;
