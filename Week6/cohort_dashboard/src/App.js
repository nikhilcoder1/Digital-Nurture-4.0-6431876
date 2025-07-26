import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  return (
    <div className="App">
      <h1>My Academy Dashboard</h1>
      <CohortDetails
        name="React Bootcamp"
        startDate="01-July-2025"
        endDate="30-July-2025"
        status="ongoing"
      />
      <CohortDetails
        name="Java Sprint"
        startDate="01-June-2025"
        endDate="30-June-2025"
        status="completed"
      />
    </div>
  );
}

export default App;