// TrainList.js
import React, { useState, useEffect } from 'react';
import { getAllTrains } from './apiService';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch trains and set the state
    // Use getAllTrains() from apiService
  }, []);

  return (
    <div>
      <h2>All Trains</h2>
      {/* Map through trains and display train details */}
    </div>
  );
};

export default TrainList;
