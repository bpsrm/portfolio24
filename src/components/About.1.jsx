import { Container, Row, Col } from "react-bootstrap";
import Profile from "@assets/about-profile.jpg";
import { expertise } from "@data/expertise";

export const About = () => {
  console.log(expertise.develop);
  const develop = expertise.develop.map((dev) => {
    // <ul key={dev.id}>
    //   <li>{dev.skill}</li>
    // </ul>;
    console.log(dev.id);
  });

  return (
    <Container className="text-center about-container">
      <div className="box-title">
        <h2 className="title">
          About <span>BANK</span>
        </h2>
        <div className="border-title"></div>
      </div>
      <Row>
        <Col xs={12} md={6}>
          <img src={Profile} alt="About Profile" className="img-about" />
        </Col>
        <Col xs={12} md={6} className="text-start">
          <p>
            My name is Ponpitak Sirimart. You can call me Bank. I’m recent
            graduate at Silpakorn University.
          </p>
          <p>
            Driven by a passion for Front-End Development since my university
            days, I honed my skills in HTML and CSS, relishing the art of
            designing interactive websites for seamless user experiences.
          </p>

          <div className="expertise-box">
            <h3>Development Expertise</h3>
            {develop}
          </div>
        </Col>
      </Row>
    </Container>
  );
};
