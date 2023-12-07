import React, { useState, useEffect } from 'react';

const Display = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your MongoDB backend
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getData'); // Create a route for fetching data in your API
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Submitted Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <p>Name: {item.name}</p>
            <p>Date: {item.date}</p>
            <p>Description: {item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
