// Design.js
import React, { useEffect } from "react";

const designContainerStyle = {
  width: "100%",
  height: "100vh",
  backgroundColor: "black", // Add a background color for testing
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1, // Lower z-index than header and banner
};

const Design = () => {
  useEffect(() => {
    const particlesScript = document.createElement("script");
    particlesScript.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    particlesScript.async = true;

    particlesScript.onload = () => {
      window.particlesJS("tsparticles", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: {
            value: ["#ff69b4", "#ffd700", "#ff6347", "#4682b4"], // Pink, Yellow, Red, Blue
          },
          shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
          opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0 } },
          size: { value: 5, random: true, anim: { enable: true, speed: 3, size_min: 0.3 } },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff", // Line color
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            random: true,
            speed: 1,
            direction: "none",
            straight: false,
            out_mode: "out",
          },
        },
      });
    };

    document.head.appendChild(particlesScript);

    return () => {
      document.head.removeChild(particlesScript);
    };
  }, []);

  return <div style={designContainerStyle} id="tsparticles" />;
};

export default Design;
