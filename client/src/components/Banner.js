// Banner.js
import React from "react";

const bannerContainerStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",
  zIndex: 2, // Higher z-index than particles container
};

const textContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
};

const titleStyle = {
  fontSize: "2.25rem",
  color: "#d1d5db",
  fontWeight: "700",
  lineHeight: "1.2",
};

const boldTextStyle = {
  fontWeight: "bold",
  color: "#ffffff",
};

const descriptionStyle = {
  fontSize: "0.875rem",
  color: "#d1d5db",
  fontWeight: "600",
};

const buttonStyle = {
  width: "11rem",
  backgroundColor: "#10b981",
  padding: "1rem 1.5rem",
  fontSize: "1.25rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  borderRadius: "9999px",
};

const Banner = () => {
  return (
    <div style={bannerContainerStyle}>
      <div style={textContainerStyle}>
        <h3 style={{ fontSize: "1.25rem", color: "#10b981", fontWeight: "600" }}>
          SPREADING WINGS OF TECHNOLOGY
        </h3>
        <h1 style={titleStyle}>
          We make you <br /> <span style={boldTextStyle}>"Go Digital"</span>
        </h1>
        <p style={descriptionStyle}>
          Creativity is our Passion & We Transform you Digitally.
        </p>
        <button style={buttonStyle}>Call us</button>
      </div>
      <div>
        {/* <img src={bannerRight} alt="banner" /> */}
      </div>
    </div>
  );
};

export default Banner;
