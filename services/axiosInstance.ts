import axios from 'axios';

import * as rootNavigation from './rootNavigation';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.9:8080',
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status == 403) {
      rootNavigation.navigate('Forbiden');
    } else if (error.response.data.expired == true) {
      rootNavigation.navigate('UnAuthorize');
    } else {
    }
    return Promise.reject(error.response.data || 'error');
  },
);
export default axiosInstance;
