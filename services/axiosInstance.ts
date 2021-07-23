import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import * as rootNavigation from './rootNavigation';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.1.9:8080',
});
const setUserData = async (name: string, token: string) => {
  await SecureStore.setItemAsync(name, token);
};
export const getUserData = async (name: string) => {
  let token = await SecureStore.getItemAsync(name);
  return token;
};

axiosInstance.interceptors.response.use(
  response => {
    if (response.data.isLogin == true) {
      setUserData('secure_token', response.data.secret.token);
    }
    return response;
  },
  error => {
    console.log(error.response.status);
    if (error.response.status == 403) {
      rootNavigation.navigate('Forbiden');
    } else if (error.response.data.expires == true) {
      rootNavigation.navigate('UnAuthorize');
    }
    return Promise.reject(error.response.data);
  },
);
export default axiosInstance;
