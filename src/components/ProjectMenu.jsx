/* eslint-disable react/prop-types */
import { Container, Row, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

//data
import { workspace } from "@data/projects";

export const All = () => {
  return (
    <Container>
      <Row>
        <Col xs={8}>
          <h1>Web Designing </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          dolores nulla ad natus doloremque ea enim ex maxime eos facere,
          consequatur incidunt quam nemo porro, vel rem perferendis aut modi
          perspiciatis earum? Ullam soluta porro neque consequuntur libero sit
          alias doloremque iusto repudiandae, distinctio, odit vitae unde
          perferendis aliquid officia tempore aut. Consectetur ratione error a
          corrupti accusamus? Perferendis dolor dolores nesciunt dignissimos
          eveniet veniam reiciendis architecto repudiandae corrupti distinctio
          sint placeat, voluptate nulla ex tempora incidunt doloribus! Amet
          excepturi labore, vero quae quo cum accusamus, dolorum laudantium
          doloribus quisquam commodi, laborum provident nobis totam natus
          impedit expedita illum. Harum!
        </Col>
        <Col xs={4}>
          <h1>
            UX/UI Web <br /> Designing
          </h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          dolores nulla ad natus doloremque ea enim ex maxime eos facere,
          consequatur incidunt quam nemo porro, vel rem perferendis aut modi
          perspiciatis earum? Ullam soluta porro neque consequuntur libero sit
          alias doloremque iusto repudiandae, distinctio, odit vitae unde
          perferendis aliquid officia tempore aut. Consectetur ratione error a
          corrupti accusamus? Perferendis dolor dolores nesciunt dignissimos
          eveniet veniam reiciendis architecto repudiandae corrupti distinctio
          sint placeat, voluptate nulla ex tempora incidunt doloribus! Amet
          excepturi labore, vero quae quo cum accusamus, dolorum laudantium
          doloribus quisquam commodi, laborum provident nobis totam natus
          impedit expedita illum. Harum!
        </Col>
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
          <Col xs={4} key={project.id}>
            <Card className="m-3 text-start">
              <Card.Title>{project.projectName}</Card.Title>
              <Card.Subtitle>{project.date}</Card.Subtitle>
              <Card.Body>{project.description}</Card.Body>
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
