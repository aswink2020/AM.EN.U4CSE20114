// TrainDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTrainDetails } from './apiService';

const TrainDetails = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch train details and set the state
    // Use getTrainDetails() from apiService with trainId
  }, [trainId]);

  return (
    <div>
      {train ? (
        <div>
          <h2>Train Details</h2>
          {/* Display train details */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TrainDetails;
