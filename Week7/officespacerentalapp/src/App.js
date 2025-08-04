import React from 'react';
import './App.css';

function App() {
  // Heading element
  const heading = <h1>Office Space Rental Portal</h1>;

  // Office space image
  const image = (
    <img
      src="https://images.unsplash.com/photo-1586985282066-d4f94f1bb9f3"
      alt="Office Space"
      style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px' }}
    />
  );

  // Office object list
  const officeSpaces = [
    {
      name: "TechPark Tower",
      rent: 75000,
      address: "123 MG Road, Bengaluru"
    },
    {
      name: "Startup Hub",
      rent: 55000,
      address: "5th Cross, Indiranagar, Bengaluru"
    },
    {
      name: "Innovation Point",
      rent: 68000,
      address: "Sector 62, Noida"
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {heading}
      {image}

      <h2>Available Office Spaces</h2>
      <ul>
        {officeSpaces.map((office, index) => {
          const rentStyle = {
            color: office.rent < 60000 ? 'red' : 'green',
            fontWeight: 'bold'
          };

          return (
            <li key={index} style={{ marginBottom: '20px' }}>
              <p><strong>Name:</strong> {office.name}</p>
              <p><strong>Address:</strong> {office.address}</p>
              <p><strong>Rent:</strong> <span style={rentStyle}>₹{office.rent}</span></p>
              <hr />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;