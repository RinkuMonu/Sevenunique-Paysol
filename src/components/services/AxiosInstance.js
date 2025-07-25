import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://server.finuniques.in/api/',                                                                           
  baseURL: 'https://7qcwg3jk-5002.inc1.devtunnels.ms/api/',                                                                           
  
  headers: {
    'Content-Type': 'application/json',
  },
}); 

axiosInstance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    
    if (error.response && error.response.status === 401) {
      console.error('Unauthorized! Redirecting to login...');
     
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
