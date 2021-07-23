import axiosInstance from './axiosInstance';
import jwtValidity from './jwtForHeader';
const postLogin = (email: string, password: string) => {
  return axiosInstance.post('/login', {
    email: email,
    password: password,
  });
};
const postSignup = (username: string, email: string, password: string) => {
  return axiosInstance.post('/signup', {
    username: username,
    email: email,
    password: password,
  });
};
const getMusic = () => {
  return axiosInstance.get('/private', {headers: jwtValidity()});
};

export default {
  postLogin,
  postSignup,
  getMusic,
};
