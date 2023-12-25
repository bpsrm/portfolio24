import { Container, Row, Col } from "react-bootstrap";
import Profile from "@assets/about-profile.jpg";
import { expertise } from "@data/expertise";

const About = () => {
  const develop = expertise.develop;
  const design = expertise.design;

  return (
    <Container fluid className="text-center about-container">
      <div className="box-title">
        <h2 className="title">
          About <span>BANK</span>
        </h2>
        <div className="border-title"></div>
      </div>
      <Row style={{ paddingBottom: "50px" }}>
        <Col xs={12} md={5} className="text-center mx-auto">
          <img src={Profile} alt="About Profile" className="img-about" />
        </Col>
        <Col xs={12} md={5} className="text-start mx-auto">
          <div className="about-text">
            <p>
              My name is Ponpitak Sirimart. You can call me <b>Bank</b>. I’m
              recent graduate at Silpakorn University.
            </p>
            <p>
              Driven by a passion for Front-End Development since my university
              days, I honed my skills in HTML and CSS, relishing the art of
              designing interactive websites for seamless user experiences.
            </p>
          </div>

          <div className="expertise-box">
            <h3>Development Expertise</h3>
            <ul className="expertise">
              {develop.map((dev) => (
                <li key={dev.id}>{dev.skill}</li>
              ))}
            </ul>
          </div>

          <div className="expertise-box">
            <h3>Design Expertise</h3>
            <ul className="expertise expertise-design">
              {design.map((des) => (
                <li key={des.id}>{des.skill}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
