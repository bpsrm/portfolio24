import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";

const Footer = () => {
  const socialItem = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ponpitak-s-73162527a/",
      icon: <Icon icon="ri:linkedin-fill" width="32" height="32" />,
    },
    {
      id: 2,
      name: "GitHub",
      link: "https://github.com/bpsrm",
      icon: <Icon icon="mdi:github" width="32" height="32" />,
    },
    {
      id: 3,
      name: "Mail",
      link: "mailto:bank.pptsrm@gmail.com",
      icon: <Icon icon="tabler:mail" width="32" height="32" />,
    },
    {
      id: 4,
      name: "Instagram",
      link: "https://www.instagram.com/bp.srm/",
      icon: <Icon icon="mdi:instagram" width="32" height="32" />,
    },
  ];

  const linkStyle = {
    color: "var(--whiteToBlack)",
  };

  return (
    <Container
      fluid
      style={{
        backgroundColor: "var(--blackToWhite)",
        color: "var(--whiteToBlack)",
      }}
    >
      <Row className="py-5">
        <Col xs={12} md={8}>
          <h3 className="text-uppercase mb-3" style={{ fontWeight: "600" }}>
            Ponpitak Sirimart
          </h3>
          <p>
            New Graduates Transforming Dreams into Web Development Realities.
          </p>
        </Col>
        <Col xs={12} md={4}>
          <h3 className="text-uppercase mb-3" style={{ fontWeight: "600" }}>
            social
          </h3>
          <Container>
            <Row className="justify-content-start">
              {socialItem.map((item) => (
                <Col
                  xs={3}
                  md={1}
                  key={item.id}
                  className="d-flex justify-content-center me-3"
                >
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={linkStyle}
                    className="link-social"
                  >
                    {item.icon}
                  </a>
                </Col>
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
      <Row className="text-center">
        <p>© Copyright 2023. Made by Ponpitak Sirimart</p>
      </Row>
    </Container>
  );
};

export default Footer;
