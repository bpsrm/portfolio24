import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import "@styles/projects.css";

//component
import ProjectMenu from "@components/ProjectMenu";

const Projects = () => {
  const items = ["All", "Website", "UX/UI", "Graphics"];
  const [menu, setMenu] = useState("All");
  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
  };

  return (
    <Container fluid className="text-center about-container">
      <div className="box-title">
        <h2 className="title">PROJECTS</h2>
        <div className="border-title"></div>
      </div>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={4} className="project-menu">
          <ul className="d-flex justify-content-around px-0">
            {items.map((menuList, index) => (
              <li
                key={index}
                className={`btn-menu ${menu === menuList ? "active-menu" : ""}`}
                onClick={() => handleMenuClick(menuList)}
              >
                {menuList}
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <ProjectMenu menu={menu} />
    </Container>
  );
};

export default Projects;
