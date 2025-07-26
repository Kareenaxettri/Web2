import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5050/api', // Your backend URL
});

// Add token to request headers if exists
API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;