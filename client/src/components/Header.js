// Header.js
import React, { useState } from "react";

const headerContainerStyle = {
  width: "100%",
  color: "#ffffff",
  padding: "1.5rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #0b4d78",
  position: "relative",
  zIndex: 2, // Higher z-index than particles container
};

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1rem",
  marginLeft: '120px'
};

const gridItemStyle = {
  width: "250px",
  height: "250px",
  backgroundColor: "rgba(255, 255, 255, 0.4)", // Initial low opacity
  borderRadius: "8px",
  overflow: "hidden",
  position: "relative",
  transition: "opacity 0.9s ease", // Transition for opacity change
  cursor: "pointer",
};

const divContents = [
  {
    title: "Div 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "url('https://www.cbit.ac.in/wp-content/uploads/2023/09/IMG_2032-1024x683-640x480.jpg')",
  },
  {
    title: "Div 2",
    text: "Proin vel tortor malesuada, volutpat lacus vel, volutpat ex.",
    backgroundImage: "url('https://www.cbit.ac.in/wp-content/uploads/2023/02/IMG00322-1024x683-640x480.jpg')",
  },
  {
    title: "Div 3",
    text: "Suspendisse potenti. Nulla facilisi. Fusce consequat euismod libero.",
    backgroundImage: "url('https://www.cbit.ac.in/wp-content/uploads/2022/12/DSC01335-1024x683-640x480.jpg')",
  },
  {
    title: "Div 4",
    text: "Nec bibendum libero venenatis non. Sed cursus mauris non mauris tincidunt fringilla.",
    backgroundImage: "url('image4.jpg')",
  },
  {
    title: "Div 5",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    backgroundImage: "url('https://www.cbit.ac.in/wp-content/uploads/2023/09/IMG_1893-1024x683-640x480.jpg')",
  },
  {
    title: "Div 6",
    text: "Proin vel tortor malesuada, volutpat lacus vel, volutpat ex.",
    backgroundImage: "url('https://www.cbit.ac.in/wp-content/uploads/2023/09/G-Krishna-garu-1024x683-640x480.jpg')",
  },
  {
    title: "Div 7",
    text: "Suspendisse potenti. Nulla facilisi. Fusce consequat euismod libero.",
    backgroundImage: "url('https://www.cbit.ac.in/wp-content/uploads/2023/09/IMG_1770-1024x683-640x480.jpg')",
  },
  {
    title: "Div 8",
    text: "Nec bibendum libero venenatis non. Sed cursus mauris non mauris tincidunt fringilla.",
    backgroundImage: "url('image8.jpg')",
  },
];

const popupContainerStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 3, // Higher z-index for the popup
};

const popupContentStyle = {
  width: "400px",
  height: "400px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  overflow: "hidden",
  padding: "16px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
};

const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  cursor: "pointer",
  fontSize: "24px", // Adjust the font size as needed
  color: "#333", // Adjust the color as needed
};

const Header = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);

  const handleHover = (index) => {
    if (!selectedDiv) {
      const div = document.getElementById(`gridItem-${index}`);
      if (div) {
        div.style.opacity = 1; // Increase opacity on hover
      }
    }
  };

  const handleLeave = (index) => {
    if (!selectedDiv) {
      const div = document.getElementById(`gridItem-${index}`);
      if (div) {
        div.style.opacity = 0.1; // Restore original opacity on leave
      }
    }
  };

  const handleDivClick = (index) => {
    setSelectedDiv(index);
  };

  const handleClosePopup = () => {
    setSelectedDiv(null);
  };

  return (
   
    
    <div style={headerContainerStyle}>

      <div style={gridContainerStyle}>
        {divContents.map((content, index) => (
          <div
            key={index}
            id={`gridItem-${index}`}
            style={{
              ...gridItemStyle,
              backgroundImage: content.backgroundImage,
            }}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleLeave(index)}
            onClick={() => handleDivClick(index)}
          />
        ))}
      </div>
      {selectedDiv !== null && (
        <div style={popupContainerStyle}>
          <div style={popupContentStyle}>
            <img
              src={divContents[selectedDiv].backgroundImage}
              alt={`Popup Image ${selectedDiv + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <h2 style={{ marginTop: "16px", fontSize: "1.5rem", marginBottom: "8px", color: "#333" }}>
              {divContents[selectedDiv].title}
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.4", color: "#333" }}>
              {divContents[selectedDiv].text}
            </p>
            <div style={closeButtonStyle} onClick={handleClosePopup}>
              X
            </div>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default Header;
