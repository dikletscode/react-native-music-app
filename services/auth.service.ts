import axiosInstance from './axiosInstance';

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

export default {
  postLogin,
  postSignup,
};
