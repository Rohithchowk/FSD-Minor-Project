import React, { useEffect } from 'react';

const GoogleMap = () => {
  useEffect(() => {
    const initMap = async () => {
      // Import the Map class from the Google Maps JavaScript API
      const { Map } = await google.maps.importLibrary('maps');

      // Create a map centered around CBIT
      const map = new Map(document.getElementById('map1'), {
        center: { lat: 17.3920, lng: 78.3194 },
        zoom: 8,
      });

      // Add a marker to the map with animation
      const marker = new google.maps.Marker({
        position: { lat: 17.3920, lng: 78.3194 },
        map: map,
        title: 'CBIT',
        animation: google.maps.Animation.DROP,
      });

      // Add an info window with content "This is CBIT"
      const infoWindow = new google.maps.InfoWindow({
        content: '<p>This is CBIT</p>',
      });

      infoWindow.open(map, marker);
    };

    // Call the initMap function on component mount
    initMap();
  }, []);

  const handleSendClick = () => {
    fetch('/send', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: '100vh', backgroundImage: "linear-gradient(#00d5ff,#0095ff,rgba(93,0,255,.555))" }}>
      <div style={{ background: '#fff', padding: '1rem', width: '80%', borderRadius: '0.25rem' }}>
        <h1 style={{ marginBottom: '1rem', color: '#007bff' }}>GOOGLE MAP API</h1>
        <div id="map1" style={{ height: '400px', marginBottom: '1rem' }}></div>
        <br />
        <button onClick={handleSendClick} className="btn btn-primary" style={{ cursor: 'pointer' }}>Send Email and SMS</button>
      </div>
    </div>
  );
};

export default GoogleMap;
