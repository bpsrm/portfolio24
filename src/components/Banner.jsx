/* eslint-disable react/no-unescaped-entities */
import { Container, Row } from "react-bootstrap";
import Profile from "@assets/banner-profile.jpg";

//components
import SocialBanner from "./SocialBanner";

const Banner = () => {
  return (
    <Container fluid className="px-0 banner">
      <Container className="banner-container">
        <Row className="text-center justify-content-center">
          <SocialBanner />
          <h1>
            HELLO, I'M <span className="name_banner">PONPITAK SIRIMART</span>
          </h1>
          <div className="img-banner">
            <img src={Profile} alt="Banner Profile" />
          </div>
          <p style={{ fontSize: "20px" }}>
            New Graduates Transforming Dreams into Web Development Realities.
          </p>

          <button className="btn-setting btn-resume">RESUME</button>

          <div className="scroll-down mt-4">
            <span className="mouse-left">Scroll</span>
            <span className="mouse"></span>
            <span className="mouse-right">Down</span>
          </div>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;
