// src/api.js
import axios from 'axios';

const API_URL = 'https://airbnb-clone-be-l1y1.onrender.com'; // Update this URL to your backend

export const fetchProperties = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
};
