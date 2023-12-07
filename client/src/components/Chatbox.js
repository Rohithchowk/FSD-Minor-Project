import React, { useState } from 'react';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const toggleState = () => {
    setIsOpen(!isOpen);
  };

  const onSendButton = () => {
    if (inputText === '') {
      return;
    }

    const userMessage = { name: 'User', message: inputText };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    fetch('https://chandra76768.pythonanywhere.com/', {
      method: 'POST',
      body: JSON.stringify({ message: inputText }),
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        const samMessage = { name: 'Sam', message: response.answer };
        setMessages((prevMessages) => [...prevMessages, samMessage]);
        setInputText('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setInputText('');
      });
  };

  const updateChatText = () => {
    return messages.map((item, index) => {
      const messageTypeClass =
        item.name === 'Sam'
          ? 'messages__item--visitor'
          : 'messages__item--operator';
      return (
        <div key={index} className={`messages__item ${messageTypeClass}`}>
          {item.message}
        </div>
      );
    });
  };

  return (
    <div
      className={`chatbox ${isOpen ? 'chatbox--active' : ''}`}
      style={{
        position: 'fixed', // Use fixed position to overlay on other components
        bottom: '30px',
        right: '30px',
        zIndex: '9999', // Set a high z-index value to ensure it's above other elements
      }}
    >
      {/* Your existing HTML content goes here */}
      {/* ... */}

      {/* Reactified Button */}
      <div className="chatbox__button">
        <button
          style={{
            padding: '10px',
            background: 'white',
            border: 'none',
            outline: 'none',
            borderTopLeftRadius: '50px',
            borderTopRightRadius: '50px',
            borderBottomLeftRadius: '50px',
            boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
          }}
          onClick={toggleState}
        >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKIA6huXkgWcelHoxa-W4UV-jPtRbZgobmhA&usqp=CAU" alt="Chatbox Icon" />
        </button>
      </div>

      {/* Reactified Messages */}
      <div
        className="chatbox__messages"
        style={{
          marginTop: 'auto',
          display: 'flex',
          overflowY: 'scroll',
          flexDirection: 'column-reverse',
        }}
      >
        {updateChatText()}
      </div>

      {/* Reactified Footer */}
      <div
        className="chatbox__footer"
        style={{
          position: 'sticky',
          bottom: '0',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 20px',
          background: 'linear-gradient(268.91deg, #581B98 -2.14%, #9C1DE7 99.69%)',
          boxShadow: '0px -10px 15px rgba(0, 0, 0, 0.1)',
          borderBottomRightRadius: '10px',
          borderBottomLeftRadius: '10px',
          marginTop: '20px',
        }}
      >
        <input
          type="text"
          placeholder="Write a message..."
          style={{
            width: '80%',
            border: 'none',
            padding: '10px 10px',
            borderRadius: '30px',
            textAlign: 'left',
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="chatbox__send--footer send__button"
          style={{ color: 'white' }}
          onClick={onSendButton}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
