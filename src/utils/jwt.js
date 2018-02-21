import axios from 'axios';

export const setTokenToLS = token => {
  axios.defaults.headers.common.authorization = `Bearer ${token}`;
  localStorage.setItem('jwt', token);
};

export const removeTokenFromLS = () => {
  delete axios.defaults.headers.common.authorization;
  localStorage.removeItem('jwt');
};
