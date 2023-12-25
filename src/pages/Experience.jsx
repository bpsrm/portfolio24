import { Container, Row, Col } from "react-bootstrap";

const Experience = () => {
  return (
    <Container fluid className="experience-container">
      <div className="box-title">
        <h2 className="title">EXPERIENCE</h2>
        <div className="border-title"></div>
      </div>
      <Row style={{ padding: "0 50px 50px 50px" }}>
        <Col xs={12} md={9} className="exp-box">
          <h4 className="topic">Education</h4>
          <h2>Silpakorn University (Jun 2019 - July 2022)</h2>
          <h3>Faculty of Information and Communication Technology</h3>
          <h4>Digital Technology for Design Interactive Application</h4>
          <div className="topic-line"></div>
        </Col>
        <Col xs={12} md={3} className="bg-danger">
          image
        </Col>
      </Row>

      <Row style={{ padding: "0 50px 50px 50px" }}>
        <Col xs={12} md={9} className="exp-box">
          <h4 className="topic">Internship</h4>
          <h2 style={{ paddingBottom: "20px" }}>
            Nabla Digital Co.,Ltd. (Apr - Jun 2022)
          </h2>
          <h4 className="w-75">
            I aim to apply my refined web development skills, specializing in
            JavaScript, jQuery, and advanced techniques such as AJAX, Axios, and
            Fetch to ensure seamless API interactions. Proficient in PHP, I
            excel in creating dynamic web applications and leverage the
            CodeIgniter 4 PHP Framework to craft high-quality websites.
          </h4>
          <div className="topic-line"></div>
        </Col>
        <Col xs={12} md={3} className="bg-danger">
          image
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
