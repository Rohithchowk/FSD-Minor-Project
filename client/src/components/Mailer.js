import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';

function EmailForm() {
  const [message, setMessage] = useState('');

  const sendEmailAndSMS = async () => {
    try {
      const response = await fetch('http://13.232.90.49:5200/send', { method: 'POST' });
      const data = await response.json();
      setMessage(data.message);
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://polyfill.io/v3/polyfill.min.js?features=default`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const mapScript = document.createElement('script');
      mapScript.type = 'module';
      mapScript.src = 'script.js';
      mapScript.async = true;
      document.head.appendChild(mapScript);
    };
  }, []);

  return (
    <div className="App">
     
      <Button onClick={sendEmailAndSMS} style={{backgroundColor:'#007FFF',height:'40px',width:'400px', border:'1px solid black',borderRadius:'5px',color:'white',fontWeight:'600', cursor:'pointer'}}>Send Email and SMS</Button>
      <p>{message}</p>
    </div>
  );
}

export default EmailForm;
