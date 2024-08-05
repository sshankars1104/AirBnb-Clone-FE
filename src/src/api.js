// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/properties'; // Update this URL to your backend

export const fetchProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};
