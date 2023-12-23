import "@styles/social-banner.css";

const SocialBanner = () => {
  const socialStyle = {
    position: "absolute",
    top: "50%",
    left: "0",
    transform: "translateY(-50%)",
    width: "fit-content",
  };

  return (
    <div style={socialStyle}>
      <div className="social-banner-box">
        <a href="" className="btn-setting">
          LinkedIn
        </a>
        <a href="" className="btn-setting">
          Github
        </a>
        <a href="" className="btn-setting">
          Instagram
        </a>
      </div>
    </div>
  );
};

export default SocialBanner;
