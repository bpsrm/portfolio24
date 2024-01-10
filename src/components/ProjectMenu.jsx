/* eslint-disable react/prop-types */
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

//data
import { workspace } from "@data/projects";

export const All = () => {
  return (
    <Container>
      <Row>
        <Col xs={8}></Col>
        <Col xs={4}></Col>
      </Row>
    </Container>
  );
};

export const Website = () => {
  const website = workspace.website;

  return (
    <Container>
      <Row>
        {website.map((project) => (
          <Col xs={12} md={4} lg={3} key={project.id}>
            <Card className="m-3 card-project">
              <Card.Img src={project.resource} className="img-card" />
              <Card.Body className="p-3 text-start card-project-body">
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Subtitle>{project.date}</Card.Subtitle>
                {/* <Card.Text>{project.description}</Card.Text> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const ProjectMenu = ({ menu }) => {
  const [menuActive, setMenuActive] = useState("All");

  useEffect(() => {
    setMenuActive(menu);
  }, [menu, menuActive]);

  return (
    <Container>
      {menuActive == "All" ? <All /> : ""}
      {menuActive == "Website" ? <Website /> : ""}
    </Container>
  );
};

export default ProjectMenu;
