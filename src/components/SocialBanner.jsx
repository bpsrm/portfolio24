import "@styles/social-banner.css";
import { Icon } from "@iconify/react";

const SocialBanner = () => {
  const socialStyle = {
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    width: "fit-content",
  };

  return (
    <div style={socialStyle} className="d-none d-lg-block px-0">
      <div className="social-banner-box">
        <a
          href="https://www.linkedin.com/in/ponpitak-s-73162527a/"
          target="_blank"
          rel="noreferrer"
          className="btn-setting-social"
        >
          <Icon icon="ri:linkedin-fill" width="24" height="24" />
        </a>
        <a
          href="https://github.com/bpsrm"
          target="_blank"
          rel="noreferrer"
          className="btn-setting-social"
        >
          <Icon icon="ri:github-fill" width="24" height="24" />
        </a>
        <a
          href="https://www.instagram.com/bp.srm/"
          target="_blank"
          rel="noreferrer"
          className="btn-setting-social"
        >
          <Icon icon="mdi:instagram" width="24" height="24" />
        </a>
      </div>
    </div>
  );
};

export default SocialBanner;
