import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.9:8080',
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response.data);
  },
);
export default axiosInstance;
