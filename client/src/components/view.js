import React, { useState } from 'react';

const IFrame360Viewer = ({ src }) => {
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  const handleIconClick = () => {
    setIsIframeVisible(!isIframeVisible);
  };

  const styles = `
    .icon {
      width: 70px;
      height: 70px;
      background-image: url('data:image/png;base64,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'); /* Replace with your image URL */
      background-size: cover;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: fixed;
      bottom: 27px;
      left: 20px;  /* Adjusted to position at the bottom left */
      border-radius: 50%;
      z-index: 1000;
    }

    .IFrame360View {
      position: fixed;
      top: 60%;
      left: 17%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 300px;
      border: 1px solid #ccc;
      overflow: hidden;
      z-index: 1000;
      border-radius:'10px'
    }
  `;

  return (
    <div>
      {/* Icon */}
      <div className="icon" onClick={handleIconClick}>
        {/* No text content needed when using background-image */}
      </div>

      {/* Conditionally render the IFrame360View based on state */}
      {isIframeVisible && (
        <div className="IFrame360View">
          <iframe
            title="360 View"
            width="100%"
            height="100%"
            src={src}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {/* Internal CSS */}
      <style>{styles}</style>
    </div>
  );
};

export default IFrame360Viewer;
