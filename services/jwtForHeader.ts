import {getUserData} from './axiosInstance';

const jwtValidity = async () => {
  const token = await getUserData('secure_token');
  if (token != null) {
    return {authorization: 'Bearer ' + token};
  } else {
    return {};
  }
};

export default jwtValidity;
