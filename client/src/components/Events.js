// Events.js
import React from "react";

import Design from "./Design";
import Header from "./Header";

const appContainerStyle = {
  width: "100%",
  height: "100vh",
  background: "url('your-banner-bg-image-path') no-repeat center / cover",
  position: "relative",
  overflow: "hidden",
};

const appInnerContainerStyle = {
  maxWidth: "6xl",
  margin: "0 auto",
  color: "#ffffff",
};

const Events = () => {
  return (
    <>
    
    <div style={appContainerStyle}>
      
      <div style={appInnerContainerStyle}>
        
        <Header />
        
      </div>
      <Design />
    </div>
    </>
  );
};

export default Events;
