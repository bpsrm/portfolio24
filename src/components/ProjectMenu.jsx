/* eslint-disable react/prop-types */
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

//data
import { workspace } from "@data/projects";

export const All = () => {
  const web = workspace.website[0].resource;
  const design = workspace.design[0].source;
  const webDesign = workspace.website[6].resource;
  const graphics = workspace.graphics[5].source;

  const hightBox = {
    height: "350px",
    position: "relative",
  };
  const imgBox = {
    width: "100%",
    height: "350px",
    objectFit: "cover",
    objectPosition: "top center",
    borderRadius: "10px",
    opacity: "0.7",
  };
  const description = {
    position: "absolute",
    bottom: "20px",
    left: "40px",
    color: "var(--whiteToBlack)",
    textAlign: "left",
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col xs={12} md={8} style={hightBox}>
          <img src={web} alt="web designing" style={imgBox} />
          <h3 style={description}>Web Designing</h3>
        </Col>
        <Col xs={12} md={4} style={hightBox} className="mt-4 mt-lg-0">
          <img src={design} alt="web designing" style={imgBox} />
          <h3 style={description}>
            UX/UI - Web <br /> Design
          </h3>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12} md={4} style={hightBox}>
          <img src={graphics} alt="web designing" style={imgBox} />
          <h3 style={description}>
            Graphic <br />
            Designing
          </h3>
        </Col>
        <Col xs={12} md={8} style={hightBox} className="mt-4 mt-lg-0">
          <img src={webDesign} alt="web designing" style={imgBox} />
          <h3 style={description}>Web Development</h3>
        </Col>
      </Row>
    </Container>
  );
};

export const Website = () => {
  const website = workspace.website;
  const [selectedId, setSelectedId] = useState(null);
  const openModal = (id) => {
    setSelectedId(id);
  };

  return (
    <Container>
      <Row>
        {website.map((project) => (
          <Col xs={12} md={4} lg={3} key={project.id}>
            <Card
              className="m-3 card-project"
              onClick={() => openModal(project.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img src={project.resource} className="img-card" />
              <Card.Body className="p-3 text-start card-project-body">
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Subtitle>{project.date}</Card.Subtitle>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {selectedId && (
          <ShowModal id={selectedId} handleClose={() => setSelectedId(null)} />
        )}
      </Row>
    </Container>
  );
};

export const ShowModal = ({ id, handleClose }) => {
  const dataProject = workspace.website;

  const project = dataProject.find((item) => item.id === id);

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header
        closeButton
        style={{
          borderBottom: "0",
          color: "var(--colorMenu)",
          backgroundColor: "var(--blackToWhite)",
        }}
      >
        <Modal.Title>{project.projectName}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          color: "var(--colorMenu)",
          backgroundColor: "var(--blackToWhite)",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <img
          src={project.resource}
          alt={project.projectName}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            objectPosition: "center top center",
            borderRadius: "5px",
          }}
        />
        <p className="pt-3">
          <b>Detail:</b> {project.description}
        </p>
        <div className="project-stack">
          {project.stack.map((stack) => (
            <div key={stack.id}>
              <li>{stack.name}</li>
            </div>
          ))}
        </div>

        <p>
          <b>Date:</b> {project.date}
        </p>
        <Row className="mx-1">
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-setting btn-modal main me-2"
          >
            <Icon
              icon="material-symbols:link"
              width={24}
              height={24}
              className="me-2"
            />
            Demo
          </a>
          <a
            href={project.reference}
            target="_blank"
            rel="noreferrer"
            className="btn-setting btn-modal"
          >
            <Icon
              icon="mingcute:code-line"
              width="24"
              height="24"
              className="me-2"
            />
            Source
          </a>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export const Design = () => {
  const designData = workspace.design;
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        {designData.map((design) => (
          <Col key={design.id} xs={4} md={3} lg={2}>
            <img src={design.source} alt="" className="img-fluid" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export const Graphics = () => {
  const artwork = workspace.graphics;
  const [hoveredCard, setHoveredCard] = useState(null);

  const showGraphicsInfo = (id) => {
    const project = artwork.find((item) => item.id === id);
    console.log(project);
  };

  return (
    <Container>
      <Row>
        {artwork.map((graphics) => (
          <Col
            xs={12}
            md={4}
            lg={3}
            key={graphics.id}
            className="mt-4"
            onMouseEnter={() => setHoveredCard(graphics.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => showGraphicsInfo(graphics.id)}
          >
            <Card className={hoveredCard === graphics.id ? "hoveredCard" : ""}>
              <img src={graphics.source} alt="" />
              {hoveredCard === graphics.id && (
                <div className="cardOverlay">
                  <h4>{graphics.topic}</h4>
                  <p>{graphics.description}</p>
                </div>
              )}
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
      {menuActive == "UX/UI" ? <Design /> : ""}
      {menuActive == "Graphics" ? <Graphics /> : ""}
    </Container>
  );
};

export default ProjectMenu;
