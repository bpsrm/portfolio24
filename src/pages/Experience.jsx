/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

import Hiomatsuri from "@assets/hiomatsuri.png";
import Dotwishion from "@assets/dotwishion.png";
import Silpakorn from "@assets/silpakorn.png";
import Nabla from "@assets/nabla.png";

const Experience = () => {
  return (
    <Container fluid className="experience-container">
      <div className="box-title">
        <h2 className="title">EXPERIENCE</h2>
        <div className="border-title"></div>
      </div>
      <Row className="exp-row">
        <h4 className="topic">Education</h4>
        <Col xs={12} md={9} className="exp-box">
          <h2>Silpakorn University (Jun 2019 - July 2022)</h2>
          <h3>Faculty of Information and Communication Technology</h3>
          <h4>Digital Technology for Design Interactive Application</h4>
          <div className="d-none d-md-block topic-line"></div>
        </Col>

        <Col
          xs={12}
          md={3}
          className="d-flex justify-content-center align-items-start"
        >
          <img
            src={Silpakorn}
            alt="Silpakorn University Logo"
            className="img-education img-silpakorn mt-5 mt-lg-0"
          />
        </Col>
      </Row>
      <div className="d-block d-md-none topic-line mt-0 mb-5"></div>

      <Row className="exp-row">
        <h4 className="topic">Internship</h4>
        <Col xs={12} md={9} className="exp-box">
          <h2 style={{ paddingBottom: "20px" }}>
            Nabla Digital Co.,Ltd. (Apr - Jun 2022)
          </h2>
          <h4 className="description-nabla">
            I aim to apply my refined web development skills, specializing in
            JavaScript, jQuery, and advanced techniques such as AJAX, Axios, and
            Fetch to ensure seamless API interactions. Proficient in PHP, I
            excel in creating dynamic web applications and leverage the
            CodeIgniter 4 PHP Framework to craft high-quality websites.
          </h4>
          <div className="d-none d-md-block topic-line"></div>
        </Col>
        <Col
          xs={12}
          md={3}
          className="d-flex justify-content-center align-items-start"
        >
          <img
            src={Nabla}
            alt="Silpakorn University Logo"
            className="img-education img-nabla mt-5 mt-lg-0"
          />
        </Col>
      </Row>
      <div className="d-block d-md-none topic-line mt-0 mb-5"></div>

      <Row className="exp-row">
        <h4 className="topic">Exhibitions</h4>
        <Col xs={12} md={6} className="exp-box">
          <h2>HiOmatsuri Interactive Exhibition 2022</h2>
          <h3>At Siam-Center 26 - 27 Apr 2022</h3>
          <h4>: Yoshida Himatsuri Group</h4>
          <img
            src={Hiomatsuri}
            alt="Hiomatruri Interactive Exhibitions"
            className="img-fluid"
            style={{ paddingTop: "30px" }}
          />
          <div className="link-group" style={{ paddingTop: "30px" }}>
            <a
              href="https://medium.com/funcslash/hi-yoshida-himatsuri-omatsuri-%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B9%84%E0%B8%9F-%E0%B8%99%E0%B8%B4%E0%B8%97%E0%B8%A3%E0%B8%A3%E0%B8%A8%E0%B8%81%E0%B8%B2%E0%B8%A3-hiomatsuri-interactive-2022-3c8ea7dd30b2"
              target="_blank"
              rel="noreferrer"
              className="btn-link mb-3"
            >
              <Icon icon="mingcute:medium-fill" width={24} height={24} />: Hi!
              Yoshida Himatsuri Blog
            </a>
            <a
              href="https://www.youtube.com/embed/w45Wxy7bImY"
              target="_blank"
              rel="noreferrer"
              className="btn-link mb-3"
            >
              <Icon icon="mingcute:youtube-fill" width={24} height={24} />:
              Yoshida Himatsuri Demo Interactive
            </a>
            <a
              href="https://www.youtube.com/watch?v=XYbIza7v3X4&t=2s"
              target="_blank"
              rel="noreferrer"
              className="btn-link mb-3"
            >
              <Icon icon="mingcute:youtube-fill" width={24} height={24} />:
              HiOmatsuri Interactive Exhibition 2022
            </a>
          </div>
        </Col>
        <Col xs={12} md={6} className="exp-box justify-content-start">
          <h2>Dotwish/*on Senior Project Exhibition 2023</h2>
          <h3>At Siam-Center 26 - 27 Apr 2022</h3>
          <h4>: Yoshida Himatsuri Group</h4>
          <img
            src={Dotwishion}
            alt="Dotwishion Senior Project Exhibitions"
            className="img-fluid"
            style={{ paddingTop: "30px" }}
          />
          <div className="link-group" style={{ paddingTop: "30px" }}>
            <a
              href="https://medium.com/funcslash/hi-yoshida-himatsuri-omatsuri-%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B9%84%E0%B8%9F-%E0%B8%99%E0%B8%B4%E0%B8%97%E0%B8%A3%E0%B8%A3%E0%B8%A8%E0%B8%81%E0%B8%B2%E0%B8%A3-hiomatsuri-interactive-2022-3c8ea7dd30b2"
              target="_blank"
              rel="noreferrer"
              className="btn-link mb-3"
            >
              <b>Website FUNC/</b>: VoiceBrary Project
            </a>
          </div>
        </Col>
      </Row>
      <Row className="exp-row">
        <h4 className="topic">Activity</h4>
        <Col xs={12} className="exp-box">
          <h2 style={{ paddingBottom: "30px" }}>
            BKKDW2022 - Bangkok Design Week 2022
          </h2>
          <h3 style={{ padding: "0 0 30px 0" }}>TCDC, Bangkok 10500 - 2022</h3>
          <h4>
            Visited Bangkok Design Week 2022 and immersed myself in the vibrant
            and innovative world of design, gaining inspiration and insights
            into the latest trends and creative ideas.
          </h4>

          <h2 style={{ padding: "30px 0" }}>
            Mini Workshop Collaboration Mindset for 1st Jobber
          </h2>
          <h3 style={{ padding: "0 0 30px 0" }}>
            SCB Headquarters, Bangkok 10900 - 2023
          </h3>
          <h4>
            Participated in the enlightening 'Mini Workshop Collaboration
            Mindset for 1st Jobber' at SCB Headquarters, where I engaged with
            industry professionals and enhanced my collaborative mindset,
            preparing for the exciting journey into my career.
          </h4>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
