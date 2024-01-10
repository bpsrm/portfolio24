/* eslint-disable react/no-unescaped-entities */
import { Container, Row } from "react-bootstrap";
import Profile from "@assets/profile/banner-profile.jpg";
import Resume from "@assets/resume-ponpitak.pdf";

//components
import SocialBanner from "../components/SocialBanner";

const Banner = () => {
  return (
    <Container fluid className="px-0 banner">
      <Container className="banner-container">
        <Row className="text-center justify-content-center">
          <SocialBanner />
          <h1 className="welcome">
            HELLO, I'M <p className="name_banner">PONPITAK SIRIMART</p>
          </h1>
          <div className="img-banner">
            <img src={Profile} alt="Banner Profile" />
          </div>
          <p
            style={{
              fontSize: "20px",
              marginBottom: "20px",
              color: "var(--whiteToBlack)",
            }}
          >
            New Graduates Transforming Dreams into Web Development Realities.
          </p>

          <a
            href={Resume}
            download="resume-ponpitak-2023"
            className="btn-setting btn-resume text-decoration-none"
          >
            RESUME
          </a>

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
