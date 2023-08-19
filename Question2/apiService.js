// apiService.js
import axios from 'axios';

const baseURL = 'http://20.244.56.144/train';

const instance = axios.create({
  baseURL,
});

export const registerCompany = async (registrationData) => {
  // Make a POST request to /register endpoint
  return instance.post('/register', registrationData);
};

export const getAuthToken = async (authData) => {
  // Make a POST request to /auth endpoint
  return instance.post('/auth', authData);
};

export const getAllTrains = async () => {
  // Make API call to fetch all trains
  // Replace with actual API call using authorization header
};

export const getTrainDetails = async (trainId) => {
  // Make API call to fetch specific train details
  // Replace with actual API call using authorization header
};
