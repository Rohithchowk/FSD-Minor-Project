import React, { useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    endDate: '',
    message: '',
  });

  const { name, endDate, message } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToInsert = [[name, endDate, message]];

      const response = await fetch('https://v1.nocodeapi.com/minorproject/google_sheets/GrTnQypIwwBaVylJ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToInsert),
      });

      if (response.ok) {
        console.log('Data inserted into Google Sheets successfully');
        // Clear the form fields
        setFormData({
          name: '',
          endDate: '',
          message: '',
        });
      } else {
        console.error('Failed to insert data into Google Sheets');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message (Optional):</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormPage;





